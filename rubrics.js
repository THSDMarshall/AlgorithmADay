const rubrics = [
  {
    "topic": "Selection",
    "skills": [
      "input",
      "compare",
      "output"
    ],
    "hint": "Compare both orders; use a conditional.",
    "solution": "a=float(input()); b=float(input()); print(a if a>b else b)"
  },
  {
    "topic": "Selection",
    "skills": [
      "input",
      "output"
    ],
    "hint": "Map 0 to Monday and handle invalid values.",
    "solution": "n=int(input()); days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; print(days[n] if 0<=n<7 else 'Invalid')"
  },
  {
    "topic": "Sequence",
    "skills": [
      "input",
      "add",
      "output"
    ],
    "hint": "Convert input to numbers before adding.",
    "solution": "a=float(input()); b=float(input()); print(a+b)"
  },
  {
    "topic": "Selection",
    "skills": [
      "input",
      "divide",
      "compare",
      "output"
    ],
    "hint": "Validate each mark before calculating the mean.",
    "solution": "a,b,c=[float(input()) for _ in range(3)]; print((a+b+c)/3 if all(0<=x<=100 for x in [a,b,c]) else 'Invalid')"
  },
  {
    "topic": "Sequence",
    "skills": [
      "input",
      "subtract",
      "divide",
      "output"
    ],
    "hint": "Subtract 32, then multiply by 5/9.",
    "solution": "print((float(input())-32)*5/9)"
  },
  {
    "topic": "Sequence",
    "skills": [
      "input",
      "multiply",
      "output"
    ],
    "hint": "Use the two independent conversion factors.",
    "solution": "h=float(input()); w=float(input()); print(h*2.54,w*6.364)"
  },
  {
    "topic": "Sequence",
    "skills": [
      "input",
      "multiply",
      "add",
      "output"
    ],
    "hint": "Calculate each subtotal before adding.",
    "solution": "h=float(input())*7; b=int(input())*.45; print(h,b,h+b)"
  },
  {
    "topic": "Sequence",
    "skills": [
      "input",
      "divide",
      "multiply",
      "output"
    ],
    "hint": "Calculate radius first; use angle divided by 360.",
    "solution": "d=float(input()); r=d/2; c=3.14*d; a=float(input()); print(r,3.14*r*r,c,c*a/360)"
  },
  {
    "topic": "Selection",
    "skills": [
      "input",
      "compare",
      "output"
    ],
    "hint": "Use strictly greater than 18.",
    "solution": "print('Older' if int(input())>18 else 'Not older')"
  },
  {
    "topic": "Selection",
    "skills": [
      "input",
      "compare",
      "output"
    ],
    "hint": "Check invalid marks and grade boundaries.",
    "solution": "m=int(input()); print('Invalid' if not 0<=m<=100 else 'DISTINCTION' if m>=80 else 'MERIT' if m>=60 else 'PASS' if m>=40 else 'FAIL')"
  },
  {
    "topic": "Selection",
    "skills": [
      "input",
      "compare",
      "output"
    ],
    "hint": "Convert to Celsius before comparing.",
    "solution": "c=(float(input())-32)*5/9; print('Frozen' if c<=0 else 'Boiling' if c>=100 else 'Neither')"
  },
  {
    "topic": "Selection",
    "skills": [
      "input",
      "compare",
      "output"
    ],
    "hint": "Check dosage boundaries in descending order.",
    "solution": "n=float(input()); print(3 if n>10 else 2 if n>=2.5 else 1 if n>=1 else .5)"
  },
  {
    "topic": "Sequence",
    "skills": [
      "input",
      "multiply",
      "add",
      "output"
    ],
    "hint": "Calculate adult and child subtotals.",
    "solution": "s=int(input()); a=int(input())*s*20; c=int(input())*s*10; print(a,c,a+c)"
  },
  {
    "topic": "Iteration",
    "skills": [
      "loop",
      "output"
    ],
    "hint": "Iterate from 1 through 20 inclusive.",
    "solution": "for i in range(1,21): print(i*i)"
  },
  {
    "topic": "Iteration",
    "skills": [
      "input",
      "loop",
      "output"
    ],
    "hint": "Count down including zero.",
    "solution": "for i in range(int(input()),-1,-1): print(i)"
  },
  {
    "topic": "Iteration",
    "skills": [
      "input",
      "loop",
      "divide",
      "output"
    ],
    "hint": "Accumulate values then divide by count.",
    "solution": "n=int(input()); total=0\nfor i in range(n): total+=float(input())\nprint(total/n)"
  },
  {
    "topic": "Iteration",
    "skills": [
      "loop",
      "add",
      "output"
    ],
    "hint": "Keep two previous terms and update together.",
    "solution": "a,b=0,1\nfor i in range(20):\n print(a)\n a,b=b,a+b"
  },
  {
    "topic": "Iteration",
    "skills": [
      "input",
      "loop",
      "output"
    ],
    "hint": "Repeat until a valid choice is entered.",
    "solution": "print('1. Play Game\\n2. Instructions\\n3. Quit')\nchoice=input()\nwhile choice not in ['1','2','3']: choice=input()\nprint(\"Let's Go\")"
  },
  {
    "topic": "Iteration",
    "skills": [
      "input",
      "loop",
      "multiply",
      "output"
    ],
    "hint": "Update the balance every year.",
    "solution": "b=float(input()); r=float(input()); t=float(input()); year=0\nwhile b<t:\n b*=1+r; year+=1; print(year,round(b,2))"
  },
  {
    "topic": "Iteration",
    "skills": [
      "input",
      "loop",
      "output"
    ],
    "hint": "Reject length 15 and retry.",
    "solution": "tag=input()\nwhile len(tag)>=15:\n print('Rejected'); tag=input()\nprint('Accepted')"
  },
  {
    "topic": "Arrays and lists",
    "skills": [
      "list",
      "loop",
      "output"
    ],
    "hint": "Accumulate every list element.",
    "solution": "numbers=[2,5,3,6,2,3,6,4]; total=0\nfor n in numbers: total+=n\nprint(total)"
  },
  {
    "topic": "Arrays and lists",
    "skills": [
      "list",
      "loop",
      "compare"
    ],
    "hint": "Search sequentially and report a match.",
    "solution": "WordList=['adios','bonjour','ciao','danke','gelato','hola','merci','nein','salut','tschuss']; word=input()\nfor item in WordList:\n if item==word:\n  print('Word Found'); break"
  },
  {
    "topic": "Iteration",
    "skills": [
      "loop",
      "random",
      "output"
    ],
    "hint": "Generate a new random roll inside the loop.",
    "solution": "import random\nfor i in range(3): print(random.randint(1,6))"
  },
  {
    "topic": "String manipulation",
    "skills": [
      "input",
      "output"
    ],
    "hint": "Extract positions 4, 8, 12 and 16; round up.",
    "solution": "import math\ns=input(); print(math.ceil(sum(int(s[i]) for i in [3,7,11,15])/4))"
  },
  {
    "topic": "String manipulation",
    "skills": [
      "input",
      "slice",
      "output"
    ],
    "hint": "Slice names and uppercase the result.",
    "solution": "g=input(); s=input(); y=input(); print(s[:3].upper()+g[:2].upper()+y)"
  },
  {
    "topic": "String manipulation",
    "skills": [
      "input",
      "loop",
      "output"
    ],
    "hint": "Convert characters to codes and back.",
    "solution": "word=input(); shift=int(input()); result=''\nfor c in word: result+=chr(ord(c)+shift)\nprint(result)"
  },
  {
    "topic": "Iteration",
    "skills": [
      "loop",
      "multiply",
      "output"
    ],
    "hint": "Use row and column counters.",
    "solution": "for i in range(1,5):\n print(*[i*j for j in range(1,5)])"
  },
  {
    "topic": "Subprograms",
    "skills": [
      "function",
      "return"
    ],
    "hint": "Return cost multiplied by 1.2.",
    "solution": "def VATCalculate(cost): return cost*1.2"
  },
  {
    "topic": "Subprograms",
    "skills": [
      "function",
      "return",
      "compare"
    ],
    "hint": "Compare profit strictly above 100.",
    "solution": "def goodWeek(takings): return takings-300>100"
  },
  {
    "topic": "Subprograms",
    "skills": [
      "function",
      "return",
      "compare"
    ],
    "hint": "Check length and at least one digit.",
    "solution": "def passwordCheck(password): return len(password)>=8 and any(c.isdigit() for c in password)"
  }
];
