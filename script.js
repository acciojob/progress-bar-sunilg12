const circles = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress-bar');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentActive = 1;

function update() {
  // Toggle active class on circles
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update progress bar width
  const total = circles.length - 1;
  const percent = ((currentActive - 1) / total) * 100;
  progressBar.style.width = percent + '%';

  // Enable/disable buttons
  prevBtn.disabled = currentActive === 1;
  nextBtn.disabled = currentActive === circles.length;
}

nextBtn.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

// Initialize
update();
