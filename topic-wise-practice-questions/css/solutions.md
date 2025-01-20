# CSS

## SCSS / CSS <a id="css"></a>

### Have you used SCSS/LESS? What is the difference between CSS var to SCSS var

<details>
<summary>Answer</summary>
<p>
   
css var - They can be updated at runtime but we cant do that with SCSS var
</p>
</details>


### What CSS units do you know?

<details>
<summary>Answer</summary>
<p>
   
- Root font size of browsers is 16px

- px : pixels
  - absolute unit
- % : percentage
  - relative unit
  - certain percentage of parents value
- em : emphemeral unit
  - relative to the current font size
  - do not use much in production
  - fonts: 2 em = 2 \* parent's computed font size
  - lengths : 2 em = 2 \* current div size
- rem : root em
  - relative to the root font size
  - refers to the font-size of the root element of a document - by default root font-size is 16px
  - To make it 10px we use 62.5%
  - font size : 62.5%
  - https://m2.material.io/design/typography/the-type-system.html#type-scale
  - https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/
  - https://www.youtube.com/watch?v=BPsrVVOKMLc
- ch : character width
  - the width of the character 0 (zero, or U+0030) of the font
- vh : viewport height
- vw : viewport width

- By default, font-size of root is 16px
- It is recommended not to modify the default font-size since browser takes into account user preferences
- It will cause problem with accessiblity

- You should use relative units such as percentage or rem for font-size. So that when user increases the percentage of browser, the font-size increase with it. If you use fixed pixel units, then user will not be able to increase the font-size


</p>
</details>


### What is a difference between padding and margin?

<details>
<summary>Answer</summary>
<p>
   
**Padding** is the space **inside the border**, providing internal spacing within the element.

**Margin** is the space **outside the border**, creating space between the element and its neighboring elements.

</p>
</details>

### What is the difference between css grid and flexbox

<details>
<summary>Answer</summary>
<p>

Dimensionality - grid is two-dimensional. Flexbox is one-dimensional.

Grid offers more precise control over layout with explicit row and column definitions, while Flexbox is better for distributing space within a container.

</p>
</details>

### What is a gap property good for? and how it is different to margin?

<details>
<summary>Answer</summary>
<p>

Gap property specifies spacing between elements in Grid and Flexbox layouts.

It automatically detect presence of elements and is applied only when needed.

USing margins to achieve the same effect can lead to wrong content representation and unnecessary spaces around elements.

</p>
</details>

### Can you describe CSS Box Model?

<details>
<summary>Answer</summary>
<p>

   
CSS box model is a fundamental concept that describes how elements on a web page are structured and how they interact with each other. It consists of the following components:

1. **Content:**

   - The innermost part of the box, which contains the actual content of the element, such as text, images, or other media.

2. **Padding:**

   - The space between the content and the element's border. Padding helps create space around the content, improving readability and aesthetics.

3. **Border:**

   - The border surrounds the padding and content. It can be styled with various properties such as color, width, and style to create visual distinctions between elements.

4. **Margin:**

   - The space between the border of an element and its neighboring elements. Margins provide separation between elements on the page.

</p>
</details>


### What does !important mean in CSS? and why you should avoid using it?

<details>
<summary>Answer</summary>
<p>

   
When a style rule contains `!important`, it takes precedence over other conflicting styles.

`!important` can **lead to specificity issues**, making it harder to debug and maintain styles. It can **override styles that you might not expect it to**, causing confusion and making the code less predictable

</p>
</details>


### Explain CSS specificity

<details>
<summary>Answer</summary>
<p>
   
CSS specificity is a **set of rules** that determine which style rules are applied to an HTML element when there are conflicting styles

**Order from lowest to highest:**

- Type selectors and pseudo-elements
- Class selectors, attribute selectors, and pseudo-classes
- ID selectors
- inline styles

</p>
</details>

### What is difference between


```
box-sizing: content-box; (default)
box-sizing: border-box;
```

<details>
<summary>Answer</summary>
<p>
   
With `border-box`, the width and height of an **element include the content area, padding, and border**.

With `content-box`, the width and height of an **element are calculated based only on the content area, excluding padding and border**.
</p>
</details>

### How to center a div

<details>
<summary>Answer</summary>
<p>

### Centering a div

**Horizontal center:**

- `margin: auto` : centers the div horizontally
- [codepen example](https://codepen.io/tanmayid/pen/MWzdzor)

**Vertical center:**

- `position: absolute;`
- `top: 50%;`
- `transform: translate(0, -50%);`
- [codepen example](https://codepen.io/tanmayid/pen/mdQYaVW)

**Position to center:**

- `position: absolute;`
- `top: 50%;`
- `left: 50%;`
- `transform: translate(-50%,-50%);`
- [codepen example](https://codepen.io/tanmayid/pen/vYQwvXg)

### Centering a div within a div

**Horizontal center - flexbox**

- apply below styles to parent
- `display: flex`
- `justify-content: center` : centers the div horizontally
- [codepen example](https://codepen.io/tanmayid/pen/abQrPWz)

**Vertical center - flexbox**

- apply below styles to parent
- `display: flex`
- `align-items: center` : centers the div vertically
- [codepen example](https://codepen.io/tanmayid/pen/bGQyOJO)

**Position center - flexbox**

- apply below styles to parent
- `display: flex`
- `justify-content: center` : centers the div horizontally
- `align-items: center` : centers the div vertically
- [codepen example](https://codepen.io/tanmayid/pen/JjeqwqE)

**Position center - css property**

- apply below style to parent
- `position: relative`
- apply below styles to child
- `position: absolute;`
- `top: 50%;`
- `left: 50%;`
- `transform: translate(-50%,-50%);`
- [codepen example](https://codepen.io/tanmayid/pen/OJaYdPa)

</p>
</details>

---

### What is the difference between CSS and CSS3 ?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What are the selector in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is media query in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is different position in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is bom in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is difference between PX, unit, em, rem in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is flex box in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is pseudo selector in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### How to make website responsive?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What are breakpoint for viewport responsive device?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### Why we use box-sizing in css?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---




### How to center a div horizontally

<details>
<summary>Answer</summary>
<p>

```html
<div class="square"></div>
```

```css
.square {
  /*other styles*/
  margin: auto;
}
```

</p>
</details>

### How to center a div horizontally within a div

<details>
<summary>Answer</summary>
<p>

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
/*add below lines to the parent div of the element which you want to center*/
.parent {
  /*other styles*/
  display: flex;
  justify-content: center;
}

.child {
  /*other styles*/
}
```

</p>
</details>

---
