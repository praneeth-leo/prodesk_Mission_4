const form = document.getElementById("coverForm");
const output = document.getElementById("output");
const outputContainer = document.getElementById("outputContainer");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  output.innerText = `Dear Hiring Manager at ${company},

I am excited to apply for the ${role} role. My name is ${name}, and I have strong skills in ${skills}.

I am confident in my ability to contribute effectively and bring value to your team.

Sincerely,
${name}`;

  outputContainer.classList.remove("hidden");
});

document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText);
  alert("Copied!");
});

