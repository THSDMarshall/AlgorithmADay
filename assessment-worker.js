importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');
let engine;
self.onmessage=async({data:{code,test,id}})=>{try{engine=engine||await loadPyodide();postMessage({type:'ready'});let g=engine.toPy({__name__:'__main__',student_code:code,case_json:JSON.stringify(test),exercise_id:id});try{let result=await engine.runPythonAsync(`
import json, io, contextlib, builtins, re, math
case = json.loads(case_json)
name, inputs, kind, expected, hint = case
out = io.StringIO()
values = iter(inputs)
used = 0
def fake_input(prompt=''):
    global used
    try: value = next(values)
    except StopIteration: raise EOFError('Unexpected extra input')
    used += 1
    return str(value)
ns = {'__name__':'__main__', '__builtins__':dict(vars(builtins), input=fake_input)}
try:
    with contextlib.redirect_stdout(out), contextlib.redirect_stderr(out):
        exec(compile(student_code,'student.py','exec'),ns)
        if kind == 'function':
            actual = ns[expected['fn']](*expected['args'])
    s = out.getvalue()
    nums = [float(x) for x in re.findall(r'(?<![\\w.])[-+]?\\d+(?:\\.\\d+)?(?:[eE][-+]?\\d+)?',s)]
    def close(a,b): return math.isclose(a,b,rel_tol=0.002,abs_tol=0.011)
    if kind == 'function':
        e = expected['e']
        ok = type(actual) is bool and actual == e if type(e) is bool else isinstance(actual,(int,float)) and not isinstance(actual,bool) and close(actual,e)
    elif kind == 'numbers':
        # Ordered subsequence permits labels and intermediate calculations.
        j = 0
        for n in nums:
            if j < len(expected) and close(n,expected[j]): j += 1
        ok = j == len(expected)
    elif kind == 'dice': ok = len(nums)==3 and all(n.is_integer() and 1<=n<=6 for n in nums)
    else:
        ok = not bool(re.search(expected[1:],s,re.I)) if expected.startswith('!') else bool(re.search(expected,s,re.I))
        if exercise_id == 9 and inputs[0]>18 and re.search(r'\\b(not|no|false)\\b',s,re.I): ok=False
        if exercise_id == 22 and expected.startswith('!') and re.search(r'word not found',s,re.I): ok=True
    ok = ok and used == len(inputs)
    result = {'pass':bool(ok),'output':s[:1500],'detail':'' if ok else hint}
except Exception as exc:
    result = {'pass':False,'output':out.getvalue()[:1500],'detail':type(exc).__name__+': '+str(exc)[:300]+' — '+hint}
json.dumps(result)
`,{globals:g});postMessage({type:'result',result:JSON.parse(result)});}finally{g.destroy()}}catch(e){postMessage({type:'fatal',detail:String(e)})}};
