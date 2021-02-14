// set initial count
let count = 0

// get paraghraph and buttons
const text = document.querySelector('.card-text')
const btns = document.querySelectorAll('.btn')

// foreach btn
btns.forEach((btn) => {
   btn.addEventListener('click', function (e) {
      const styles = e.target.classList;

      if (styles.contains('decrease')) {
         count--
      } else if (styles.contains('increase')) {
         count++
      } else {
         count = 0
      }

      if (count > 0) {
         text.style.color = 'green'
      }
      if (count < 0) {
         text.style.color = 'red'
      }
      if (count === 0) {
         text.style.color = 'black'
      }

      text.textContent = count;
   });
});