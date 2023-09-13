# SASS

SASS is stand for **S**yntactically **A**wesome **S**tyle **S**heets, it is a pre-processor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
SassScript is the scripting language itself. [For more info](https://en.wikipedia.org/wiki/Sass_(style_sheet_language))

Sass consists of two syntaxes. 
1. SASS (original syntax, `indented syntax` similar to Haml).
2. SCSS (newer syntax, `Sassy CSS`, uses block formatting like that of CSS.)


## Keypoints:
1. It is a pre-processor, to compile the css from .scss or .sass extension.
2. Need to install Sass compiler in computer where you are working [click here for installation guide](https://sass-lang.com/install/).
3. Write a command to watch sass `sass --watch input.scss output.css`.

#### Sass features
1. [Variables](#1-variables)
2. [Nesting](#2-nesting)
3. [Modules & Partials](#3-partials)
4. [Mixins](#4-mixins)
5. [Extend](#5-extend)
6. [Operators](#6-operators)

#### Tips and Tricks
1. [Media queries](#1-media-queries)


## Sass Features
### 1 Variables
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

### 2 Nesting
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

### 3 Partials
1. Partial Sass files that contain little snippets of CSS that you can include in other Sass files.
2. Underscore `_` should be denoted before first letter when you create partial files.
3. Use `@use` to import `*.scss` file. <p style="color: red;">*If @use is NOT working try with @import rule.*</p>
4. This rule loads another Sass file as a *`module`*
5. No need to write the extension of *`module`* file when importing.

```scss
// _variables.scss 
$font-stack: Helvetica, sans-serif;
$primary-color: #333;


// section.scss
@use "./_variables";

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

### 4 Mixins
1. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
2. It helps keep your Sass very DRY. *Don't Repeat Yourself*.
3. 

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

```css
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
``` 

### 5 Extend
1. It's `Inherit` the properties from `selectors`.
2. Use `%` keyword to share the properties. Like example:`%flex{ display: flex; }`.
3. Use `@extend` keyword to extend the shared property.
4. You cannot extend a nested selector.
5. You cannot extend a selector that is wrapped in a media query (which is another reason to do this)

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```
```css
/* This CSS will print because %message-shared is extended. */
.warning, .error, .success, .message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

### 6 Operators
1. We can use Operators/expressions for doing Math calculations.
2. They are `+`, `-`, `*`, `math.div()`, and `%`.

```scss
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```
```css
.container {
  display: flex;
}

article[role=main] {
  width: 62.5%;
}

aside[role=complementary] {
  width: 31.25%;
  margin-left: auto;
}
```

### 1 Media queries
1. Write `@media queries` inside a class.
2. Don't use `css` *media queriess* instead of `scss` *media queries syntax*

```scss
/* Don't do this */
@media (min-width: $screen-sm-min) {
    .my-class {
        padding-right: $sc-base-margin;
    }
}

/* Do this instead */
.my-class {
    @media (min-width: $screen-sm-min) {
        padding-right: $sc-base-margin;
    }
}
```

### Semantic class name
1. Use Class names that describe the meaning of the content, rather than its presentation.

a. item-details-sku-container
b. header-menu-search-icon
c. profile-information-label



---
---
### Resources
1. Some guidelines collected from [https://sass-lang.com/guide/](https://sass-lang.com/guide/).
2. 
