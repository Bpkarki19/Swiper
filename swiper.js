document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle_button');
  const moreBrands = document.querySelectorAll('.grid-item.hidden');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isHidden = moreBrands[0] && moreBrands[0].classList.contains('hidden');

      moreBrands.forEach(brand => {
        if (isHidden) {
          brand.classList.remove('hidden');
        } else {
          brand.classList.add('hidden');
        }
      });

      if (isHidden) {
        toggleButton.querySelector('span').textContent = 'Show Less';
      } else {
        toggleButton.querySelector('span').textContent = 'Show More';
      }
    });
  }
});