# Grid

> Flexbox

<img src="./assets/grid/flexbox-vs-grid.png" alt="flexbox" align="center" width="400px" >

> Grid

<img src="./assets/grid/flexbox-vs-grid-2.png" alt="flexbox"  align="center" width="400px" >

Now here Flexbox work on 1-Dimensional and Grid works on 2-Dimensional as shown above pic.

<img src="./assets/grid/flexbox-vs-grid-3.png" alt="flexbox" align="center" width="400px" >

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
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  gap: 10px;
}
```
