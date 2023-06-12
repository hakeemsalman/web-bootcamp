# Grid

> Flexbox

<img src="./assets/grid/flexbox-vs-grid.png" alt="flexbox" align="center" width="400px" >

> Grid

<img src="./assets/grid/flexbox-vs-grid-2.png" alt="flexbox"  align="center" width="400px" >

Now here Flexbox work on 1-Dimensional and Grid works on 2-Dimensional as shown above pic.

> Flexbox vs Grid

<img src="./assets/grid/flexbox-vs-grid-3.png" alt="flexbox" align="center" width="400px" >

> Grid vs Flexbox

<img src="./assets/grid/flexbox-vs-grid-4.png" alt="flexbox" align="center" width="400px" >

Link of Grid vs Flexbox website in github

- [https://appbrewery.github.io/grid-vs-flexbox/](https://appbrewery.github.io/grid-vs-flexbox/)

Playaround with this.

## How to use Grid

```html
<div class="container">
  <p>...</p>
  <p>...</p>
  <p>...</p>
</div>
```

```css
.container {
  display: grid; /* in Flexbox - display: flex; */
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  gap: 10px;
}
```

<img src="./assets/grid/flexbox-vs-grid-5.png" alt="flexbox" align="center" width="400px" >

`1fr` means **fraction**

## Exercise

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Chessboard</title>
    <style>
      /* Write your code here */
      /* Each square should be 100px by 100px */
      /* My colours for white: #f0d9b5, black: #b58863 */
    </style>
  </head>

  <body>
    <div class="container">
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
      <div class="black"></div>
      <div class="white"></div>
    </div>
  </body>
</html>
```

SOLUTION -

Add style code inside above html to work

```html
<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    /* gap: 0px;  NOT working */
    width: 800px;
  }
  .white {
    background-color: #f0d9b5;
    height: 100px;
    width: 100px;
  }
  .black {
    background-color: #b58863;
    height: 100px;
    width: 100px;
  }
</style>
```
