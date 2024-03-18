
const companies = ["Sportify", "Cola", "NBA", "youtube", "Blizzered"];
let currentIndex = 0;

function rotateText() {
  const textElement = document.getElementById("rotatingText");
  textElement.textContent = `Drew for ${companies[currentIndex]}...`;
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


