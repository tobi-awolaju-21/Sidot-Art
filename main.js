
const companies = ["Monad", "A kid called beast", "Cola", "Redbull", "Pipeline"];
let currentIndex = 0;

function rotateText() {
  const textElement = document.getElementById("rotatingText");
  textElement.textContent = `My Arts   ${companies[currentIndex]}...`;
  currentIndex = (currentIndex + 1) % companies.length;
}

// Set initial interval to 2 seconds
let intervalId = setInterval(rotateText, 2000);

// Click event listener for redirection
document.getElementById("rotatingText").addEventListener("click", function() {
  window.location.href = "clients.html";
});

// Optional: Improve accessibility by adding an aria-label
document.getElementById("rotatingText").setAttribute("aria-label", "Company Rotator");

