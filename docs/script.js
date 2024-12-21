var typed1 = new Typed('.text', {
  strings: ['Developer-->', 'Freelancer-->', 'Designer-->'],
  typeSpeed: 150,      // Speed of typing
  backSpeed: 150,      // Speed of backspacing
  backDelay: 100,      // Delay before backspacing starts
  cursorChar: '_',     // Cursor character
  loop: true,          // Loop forever
});

let bar = document.querySelector('.bars');
let sidebar = document.querySelector('.side_bar');

bar.addEventListener('click', () => {
  sidebar.classList.toggle('show_side_bar');
});