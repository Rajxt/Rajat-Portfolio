// Simple stage click interaction + fake pipeline status “animation”

const stages = document.querySelectorAll(".pipeline-stage");
const footerStatus = document.getElementById("footer-status");
const statusMessages = [
  "Running tests…",
  "Building image…",
  "Pushing to registry…",
  "Deploying to production…",
  "Deployment complete ✅"
];

let msgIndex = 0;

if (footerStatus) {
  setInterval(() => {
    msgIndex = (msgIndex + 1) % statusMessages.length;
    footerStatus.textContent = statusMessages[msgIndex];
  }, 2500);
}

stages.forEach((stage) => {
  stage.addEventListener("click", () => {
    stages.forEach((s) => s.classList.remove("active"));
    stage.classList.add("active");
  });
});
