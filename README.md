# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshots

**Desktop View**
![Desktop Screenshot](/desktop-screenshot.png)

**Mobile View**
![Mobile Screenshot](/mobile-screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/abrahamcuenca/tip-calculator)
- Live Site URL: [Website](https://abrahamcuenca.com/frontendmentor/tip-calculator)

## My process



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap 5 
- Mobile-first workflow

### What I learned

This was the first time I added an image to an input field.

Also, I had fun writing the logic for calculating the tip and total.


```html
<input tabindex="2" class="very-dark-cyan very-light-grayish-cyan-bg py-2 rounded-1 py-2 px-3 w-100 people" id="numberOfPeople" type="text">
```
```css
.people{
  background-image: url('images/icon-person.svg');
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 10px;
} 
```
```js
const calcTip = () => {
    if (bill > 0 && people > 0 && percent > 0) {

        const billDivided = bill / people;
        const tip = (billDivided * percent) / 100;
        const totalPerPerson = billDivided + tip;

        tipTotal.textContent = formatCurrency(tip);
        personTotal.textContent = formatCurrency(totalPerPerson);
    }
}
```

### Useful resources

- [StackOverflow](https://stackoverflow.com/questions/2913236/html-text-input-field-with-currency-symbol) - This helped me understand how to add an image as a background for an input element 
- [Bootstrap](https://getbootstrap.com/docs/5.3/utilities/api/) - This resource is always helpful when working with layouts

## Author

- Website - [Abraham Cuenca](https://www.abrahamcuenca.com)
- Frontend Mentor - [@abrahamcuenca](https://www.frontendmentor.io/profile/abrahamcuenca)
- Twitter - [@yourwebdevguy](https://www.twitter.com/yourwebdevguy)

## Acknowledgments

Special thanks to [CodeMatrix95](https://github.com/codematrix95) for the inspiration to work on this project

