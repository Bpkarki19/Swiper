document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('my_button');
  const moreBrands = document.querySelector('.more--brands');
  const computedStyle = window.getComputedStyle(moreBrands);
  if (myButton) {
    myButton.addEventListener('click', function() {
      alert('Button clicked!');
      const display =
    });
  } else {
    console.error('Button with id "my_button" not found.');
  }
});