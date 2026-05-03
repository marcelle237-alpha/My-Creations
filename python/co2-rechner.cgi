#!/bin/python3
import cgi, cgitb

form=cgi.FieldStorage()

distance = float(form.getvalue('distance'))
factor = float(form.getvalue('transport'))
name = form.getvalue('personName')
destination = form.getvalue('destination')

emissions=distance*factor

print('content-type: text/html\n')
print("<!DOCTYPE html>")
print('<html lang="de">')
print("<head>")
print("<title>Result</title>")
print('<link rel = "stylesheet" href="../styles.css">')
print("</head>")
print("<body>")
print("<h1>Result</h1>")
print(f"<p>Welcome <strong> {name} </strong>. You engage yourself for a trip with destination<strong> {destination} </s$print("<a href = ../index.html >Go Back!! </a>")
print("</body>")
print("</html>")
