# HTML

## General Questions

### What is `<!DOCTYPE html>` used for?

<details>
<summary>Answer</summary>
<p>
All HTML documents must start with a <!DOCTYPE> declaration.

The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

</p>
</details>

---

### What happens if <!DOCTYPE html> is not used in html page?

<details>
<summary>Answer</summary>
<p>

[Reference Link](https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/)

a. **Quirks mode:** The <!DOCTYPE html> declaration triggers the browser to render the document in standards mode. Without it, the browser may enter "quirks mode," where it tries to mimic the behavior of older, non-standard browsers. This can result in inconsistent rendering and may cause compatibility issues with modern CSS and JavaScript.
b. **Layout problems:** In standards mode, the browser follows the HTML and CSS specifications more closely, leading to a predictable layout. In quirks mode, the layout may become unpredictable, causing elements to appear incorrectly or misaligned.
c. **Validation issues:** The <!DOCTYPE html> declaration is also essential for HTML validation. Removing it may cause validation errors and hinder the ability to identify and fix coding mistakes.
d. **Rendering issues:** Without the <!DOCTYPE html> declaration, the browser may not interpret certain HTML elements or CSS properties correctly, leading to rendering problems on the page.
e. **Reduced browser support:** Modern browsers are designed to handle HTML5 documents with the <!DOCTYPE html> declaration properly. By removing it, you risk encountering issues on browsers that rely on this declaration for proper rendering.

</p>
</details>

---

### What is semantic tags and non-semantic tags in Html?

<details>
<summary>Answer</summary>
<p>

**Semantic Tags:**

- Semantic tags are HTML elements that have **inherent meaning**, indicating the type of content they contain and their relationship to other elements.
- They provide context and clarity to both browsers and developers, making it easier to understand the purpose of different parts of the web page.
- Semantic tags are essential for **accessibility**, **search engine optimization (SEO)**, and proper document structure.
- Some examples of semantic tags include:
  `<header>`: Represents the header or top section of a document or a section within a document.
  `<nav>`: Represents a section containing navigation links.
  `<article>`: Represents a self-contained composition, such as a blog post, news story, or forum post.
  `<section>`: Represents a thematic grouping of content, often with a heading.
  `<aside>`: Represents content that is tangentially related to the main content, such as sidebars or pull quotes.
  `<footer>`: Represents the footer or bottom section of a document or a section within a document.

**Non-Semantic Tags:**

- Non-semantic tags are HTML elements that **don't** inherently convey any meaning about the content they contain.
- They are often used for formatting, styling, and layout purposes.
- Examples of non-semantic tags include:
  `<div>`: A general-purpose container for grouping content or creating layout structures.
  `<span>`: An inline container used for applying styles to specific portions of text or content.
  `<b>` and `<i>`: Used for applying bold and italic formatting, respectively, but don't convey the reason for the formatting.
  `<br>`: Used to insert line breaks.
  `<table>`, `<tr>`, `<td>`: Used for creating tables but don't convey the purpose of the data they contain.

</p>
</details>

---

### What is difference between div and span in Html?

<details>
<summary>Answer</summary>
<p>

`<div>`:
The `<div>` element is a **block-level container** that is often used to group and structure larger sections of content or layout elements. It doesn't have any specific semantic meaning on its own, but it is commonly used to create divisions or sections within a web page.

`<span>`:
The `<span>` element is an **inline-level container** used to apply styles or manipulate specific portions of text within a larger block of content. Unlike the `<div>` element, the `<span>` element doesn't create a visual division or layout structure. It's often used when you want to target a specific portion of text or inline content to apply styling, such as changing the color, font, or background of a particular word or phrase.

</p>
</details>

---

###

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

## Questions asked in Interviews

### What will be the background color is both the divs?

```html
<style>
  .blue {
    background-color: blue;
  }
  .red {
    background-color: red;
  }
</style>
<body>
  <div class="blue red"></div>
  <div class="red blue"></div>
</body>
```

<details>
<summary>Answer</summary>
<p>
Both will be red. Because in style tag, first blue color is written and then red. So red has higher precedence over blue color
</p>
</details>

---

<!--







### What is difference between html and html5?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What is iframe tag in html5?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What are the formatting tags in html?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What is difference `<b>` and `<strong>` in html?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What is difference `<i>` and `<em>` in html?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What is view port attribute in html?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What is block level element and inline element in html?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What is difference between html and html5?

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### What will happen to DOM tree if some issue happens in script tag?

```html
<body>
    <script src="index.js">
    <div>
    </div>
</body>

```

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### Write HTML and CSS for a grid of images where in one row there are 3 images. (flexbox) - what if the image sizes are not same.

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### Display none vs visibility hidden

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### Positioning in css along with flex box to style components along with hands on coding.

[Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

### Question

<details>
<summary>Answer</summary>
<p>

</p>
</details> -->
