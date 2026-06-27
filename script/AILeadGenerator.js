document.getElementById("generate").addEventListener("click", async () => {
  const input = document.getElementById("input").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.innerHTML = "Please describe your product first.";
    return;
  }

  output.innerHTML = "Generating...";

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: `Create a short, professional marketing message for: ${input}` }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates.length > 0) {
      output.innerHTML = data.candidates[0].content.parts[0].text;
    } else {
      output.innerHTML = "No response from AI.";
    }

  } catch (error) {
    output.innerHTML = "Error: " + error.message;
  }
});
