# SASS

SASS is stand for **S**yntactically **A**wesome **S**tyle **S**heets, it is a pre-processor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
SassScript is the scripting language itself.

Sass consists of two syntaxes. 
1. SASS (original syntax, `indented syntax` similar to Haml).
2. SCSS (newer syntax, `Sassy CSS`, uses block formatting like that of CSS.)


## Keypoints:
1. It is a pre-processor, to compile the css from .scss or .sass extension.
2. Need to install Sass compiler in computer where you are working.
3. Write a command to watch sass `sass --watch input.scss output.css`.

## Sass features
1. [Variables](#variables)
2. [Nesting](#nesting)
3. [Modules & Partials](#partials)

### Variables
Variables are used to store the values and use it anytime and everywhere.
```html
<h1>Hello World</h1>
  <p>Animals</p>
  <ul>
    <li>Cat</li>
    <li>Dog</li>
  </ul>
  <a href="#">Click me</a>
```

```scss
// SCSS SYNTAX
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
```css
/* CSS */
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### Nesting
It's a hierarchy based syntax.

```scss
// scss
body {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li { display: inline-block; }
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
```css
/*css*/
body ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
body ul li {
  display: inline-block;
}
body a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

### Partials
1. Partial Sass files that contain little snippets of CSS that you can include in other Sass files.
2. Underscore `_` should be denoted before first letter when you create partial files.
3. Use `@use` to import `*.scss` file. <p style="color: red;">*If @use is NOT working try with @import rule.*</p>
4. This rule loads another Sass file as a *`module`*

```scss
// _variables.scss 
$font-stack: Helvetica, sans-serif;
$primary-color: #333;


// section.scss
@use "./_variables.scss";

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
```css
/* CSS */
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```
