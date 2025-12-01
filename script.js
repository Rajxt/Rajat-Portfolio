// Pipeline stage interaction
const stages = document.querySelectorAll('.stage');
const projectsStage = document.querySelector('.stage[data-stage="4"]');

stages.forEach(stage => {
stage.addEventListener('click', () => {
// Only toggle non-project stages
if (stage !== projectsStage) {
  stages.forEach(s => {
    if (s !== projectsStage) {
      s.classList.remove('active');
    }
  });
  stage.classList.add('active');
}
  });
});

// Ensure projects stage is always active
projectsStage.classList.add('active');