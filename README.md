# Landing Page Project

Landing page is a single page for practice what I've learned from Udacity about JavaScript & The DOM.

## Description

The JavaScript code in this page make you add any section that you need to the page dynamically with easy steps and this section will take the style of old sections in page without doing anything.

## Table of Contents

The page is made up of three files:
1. index.html
2. styles.css
3. app.js

The (index.html) file contains a static HTML code that build the structure of page.
The (styles.css) file contains a static CSS code that build the style of page.
The (app.js) file contains a dynamic JavaScript code that build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

Some methods that i use in (app.js) file:

I use the following two method to access elements from the DOM:

```JavaScript
document.querySelector()
document.querySelectorAll()
```
I use the following method to select a DOM element by its id:

```JavaScript
document.getElementbyId()
```
I use the following method to select a DOM elements by its class:

```JavaScript
document.getElementsByClassName()
```

I use classList property to manipulate the class list for a DOM element:

```JavaScript
element.classList.add()
element.classList.remove()
element.classList.toggle()
```

I use the following method to Creates a new empty DocumentFragment into which DOM nodes:

```JavaScript
document.createDocumentFragment()
```

I use the following method to get position of a DOM element from top,bottom,left and right:

```JavaScript
element.getBoundingClientRect()
```

I use the following method to get the value of a specified attribute on the DOM element:

```JavaScript
element.getAttribute()
```

## Instructions

To modifying in the page content you can do this from modify the JavaScript code from app.js and to modifying in the page style you can do this from modify the CSS code from styles.css.

## License
[MIT](https://choosealicense.com/licenses/mit/)
