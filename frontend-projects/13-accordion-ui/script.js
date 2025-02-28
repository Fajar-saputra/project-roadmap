const accordionHeaders = document.querySelectorAll(".accordion-header");

// accordionHeaders.forEach(header => {
//   header.addEventListener('click', function () {
//     const activeItem = document.querySelector('.accordion-item.active');
//     if (activeItem && activeItem !== this.parentElement) {
//       activeItem.classList.remove('active');
//     }

//     this.parentElement.classList.toggle('active');
//   });
// });

// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Accordion</title>
//   <link rel="stylesheet" href="styles.css">
// </head>

// <body>
//   <h1>Frequently Asked Questions</h1>
//   <p>
//     Here are some common questions about web development. Click on the buttons to view the answers.
//   </p>

//   <div class="accordion">
//     <div class="accordion-item">
//       <button class="accordion-header">
//         <span>
//           What is HTML?
//         </span>
//         <img src="../../assets/chevron-down.svg" alt="expand">
//       </button>
//       <div class="accordion-content">
//         <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <button class="accordion-header">
//         <span>
//           What is CSS?
//         </span>
//         <img src="../../assets/chevron-down.svg" alt="expand">
//       </button>
//       <div class="accordion-content">
//         <p>CSS stands for Cascading Style Sheets. It is used to style and layout web pages.</p>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <button class="accordion-header">
//         <span>
//           What is JavaScript?
//         </span>
//         <img src="../../assets/chevron-down.svg" alt="expand">
//       </button>
//       <div class="accordion-content">
//         <p>JavaScript is a programming language that allows you to implement complex features on web pages.</p>
//       </div>
//     </div>
//   </div>

//   <script src="script.js"></script>
// </body>

// </html>

const accordionItem = document.querySelectorAll(".accordion-header");

// accordionItem.addEventListener("click", () => {
//     accordionItem.classList.toggle("active");
// });

accordionItem.forEach((items) => {
    items.addEventListener("click", function () {
        const activeItem = document.querySelector(".accordion-item.active");
        if (activeItem && accordionItem !== activeItem.parentElement) {
            activeItem.classList.remove("active");
        }

        activeItem.parentElement.classList.toggle("active");
    });
});

// accordionHeaders.forEach(header => {
//   header.addEventListener('click', function () {
//     const activeItem = document.querySelector('.accordion-item.active');
//     if (activeItem && activeItem !== this.parentElement) {
//       activeItem.classList.remove('active');
//     }

//     this.parentElement.classList.toggle('active');
//   });
// });



const test = document.querySelector('.accordion')
console.log(test.parentElement)