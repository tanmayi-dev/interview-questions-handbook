## Category - Accessibility / Semantic HTML <a id="a11y"></a>

### 1. What is Accessibility ?

Starting question (no exact answer needed)

Just checking if the candidate is aware of a11y and whether it makes sense to ask further questions.

### 2. What is a screen reader ?

A screen-reader is a software program that a**ssists blind or visually-impaired users** by reading aloud the text that is displayed on the computer screen.

### 3. How can you make an `<img />` tag accessible for a blind person?

Include an **informative** and concise alt **attribute** that describes the content or purpose of the image.

### 4. What is a tabindex element for?

**tabindex** is an HTML attribute that specifies the order in which elements **receive focus** when a user navigates through a web page using the keyboard or other input devices

- **tabindex=0** > means that the element should be focusable in sequential keyboard navigation
- **tabindex = 1, 2, 3, 4**, …. > elements will be focused in specified order (should be avoided)
- **tabindex= -1** > Will ignore `tab` pressing, but will make the element focusable by javascript by `element.focus()`

### 5. What is a label element and how does it relate to form elements?

label element in HTML is used to **associate a text label with a form control, enhancing the accessibility** and usability of web forms

### 6. How can you improve accessibility of a page?

- by using **semantic HTML**
- by using proper **contrast ratios**
- by using **ARIA attributes** to enhance the experience for assistive technologies

### 7. What role do the semantic elements play in accessibility?


Semantic elements in HTML play a crucial role in accessibility by **providing meaning and structure** to the content of a web page. These elements convey information about the **relationships and roles of different parts of the content**, making it easier **for assistive technologies and browsers** to interpret and present the information to users.

### 8. Name some semantic elements and their meaning.

No strict list or answer here, just to check if the candidate is familiar with some.

### 9. What if the `<img>` is decorative? like an icon. How do you hide it from screen readers?


You can hide element from screen readers by adding `aria-hidden="true"`
