// Pipeline stage interaction
const stages = document.querySelectorAll('.stage');

stages.forEach(stage => {
  stage.addEventListener('click', () => {
    stages.forEach(s => s.classList.remove('active'));
    stage.classList.add('active');
  });
});

// Status animation
const statusTexts = [
  'Building reliable systems',
  'Shipping with confidence',
  'Automating workflows',
  'Ready to deploy'
];

let index = 0;
setInterval(() => {
  index = (index + 1) % statusTexts.length;
  document.getElementById('status').textContent = statusTexts[index];
}, 3000);