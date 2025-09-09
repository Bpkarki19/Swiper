document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('my_button');
  if (myButton) {
    myButton.addEventListener('click', function() {
      alert('Button clicked!');
    });
  } else {
    console.error('Button with id "my_button" not found.');
  }
});