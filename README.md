# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](/images/AgeCalculator.png)

### Links
- Live Site URL: [https://carvso.github.io/AgeCalculator/](https://carvso.github.io/AgeCalculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

To realize this project i just jumped in to recreat the design images provided by FrontEndMentor writing down HTML and CSSNothingreally  important to highlight i9n this part. talking about javascript is the main core of this project, that involves.
To hhandl the erroers and check on input fields, we used two functions
```js
const setError = (element, message) => {
    const inputContainer = element.parentElement;
    const errorDisplay = inputContainer.querySelector('.required-p');
  
    if (!errorDisplay) {
      const requiredP = document.createElement("p");
      requiredP.innerText = message;
      requiredP.classList.add("required-p");
      inputContainer.appendChild(requiredP);
    } else {
      errorDisplay.innerText = message;
    }
  
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
};  
```
The setError function takes two parameters: element and message. element is the input field that needs to display the error message, and message is the error message that needs to be displayed.
```js
const setSuccess = (element) => {
    const inputContainer = element.parentElement;
    const errorDisplay = inputContainer.querySelector('.required-p');
  
    if (errorDisplay) {
      errorDisplay.remove();
    }
  
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
};  
```
The setSuccess function takes an element parameter and is used to remove the error message from an input field and add a success class to the input container.

It also helped me in working with dates: 
```js
    const dayValue = parseInt(day.value);
    const monthValue = parseInt(month.value);
    const yearValue = parseInt(year.value);

    const birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    const toDay = new Date();

    const oneDayMs = 1000 * 60 * 60 * 24;
    const diffMs = toDay.getTime() - birthDate.getTime();

    const diffDays = Math.floor(diffMs / oneDayMs);
    const years = Math.floor(diffDays / 365);

    const months = Math.floor((diffDays / 30.44) % 12);
    const days = diffDays - (years * 365) - (months * 30);

    checkNaN(days, months, years);
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

## Author

- Website - [Carvso](https://www.carvso.me)
- Frontend Mentor - [@carvso](https://www.frontendmentor.io/profile/carvso)
- Twitter - [@carvsoo](https://www.twitter.com/carvsoo)
