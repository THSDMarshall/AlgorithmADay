Optional Google Workspace integration (staff-managed, no live login or sync):
1. Students export CSV and submit via your approved Google Classroom assignment or Drive workflow.
2. Staff create a restricted Google Sheet, Extensions > Apps Script, paste Code.gs, save and reload.
3. Authorise Drive/Sheets access if permitted by school policy. Use Algorithm A Day > Import student CSV, supply Drive file ID and approved student identifier.
4. Each import appends a snapshot. Filter by student/date or build a pivot table. Do not publish the sheet or use real passwords in exercises.
5. Students may save JSON backups in their own Drive and restore manually on another device. Backups contain code. Use school retention rules and restricted sharing.
No OAuth sign-in, automatic cloud sync, or central teacher authentication is implemented. Apps Script has not been deployed or tested against your tenant. Teacher solutions in the public website are visible to students; do not use for secure assessment.
