#!C:/Users/marce/AppData/Local/Programs/Python/Python312/python.exe
import cgi, cgitb
cgitb.enable()

form = cgi.FieldStorage()

# Safely read form values
name = form.getvalue('personName') or "Guest"
destination = form.getvalue('destination') or "Unknown"
distance_raw = form.getvalue('distance')
factor_raw = form.getvalue('transport')

# Convert numeric values safely
try:
    distance = float(distance_raw)
except (TypeError, ValueError):
    distance = 0

try:
    factor = float(factor_raw)
except (TypeError, ValueError):
    factor = 0

emissions = distance * factor

# Output HTML
print("Content-Type: text/html\n")
print(f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>CO₂-Rechner Ergebnis</title>
    <link rel="stylesheet" href="../styles/co2-rechner.css">
</head>
<body style="font-family: Arial; margin: 40px;">
    <h1>CO₂-Rechner Ergebnis</h1>
    <p>Hallo <strong>{name}</strong>!</p>
    <p>Dein Ziel: <strong>{destination}</strong></p>
    <p>Distanz: <strong>{distance}</strong> km</p>
    <p>Transportfaktor: <strong>{factor}</strong></p>
    <p><strong>Geschätzte CO₂-Emissionen:</strong> {emissions:.2f} kg</p>
    <a href="../CO2-Rechner.html">Zurück zum Formular</a>
</body>
</html>""")
