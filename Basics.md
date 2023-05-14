# Basics of Web bootcamp
## CSS -

### Level 1
- class selectors
- Id selectors
- Element selectors
- Attribute selectors

- background-color
- color
- height
- width

### Level 2
Font Properties
- font-weight
- font-size
- font-family
- text-align

> 1 px ---> 1/96^th^ inch ----> 0.26 mm  
> 1 pt ---> 1/72^th^ inch ----> 0.35 mm  
> 1 em ---> 100% of parent tag  
> 1 rem ---> 100% of root (root means <html> tag)

```html
<body><!-- 20px   -->
  <h1>Hello</h1> <!--  1em = 20px  or 2em = 40px  -->
</body>
```
```html
<html> <!--  20px  -->
  <body>
    <footer>
      <h2>Hello</h2> <!--  1rem  = 20px  or 2rem = 40px  -->
    </footer>
  </body>
</html>
```

### Level 3
- [Margin](#margin)
- [Padding](#padding)
- [Border](#border)
- [pesticide](#pesticide-extension)(chrome extension)

![Image](./assets/margin-padding-border.png)

### Margin
```css
{
  margin: 0px 10px 20px 30px;

  /* TOP RIGHT BOTTOM LEFT (clock-wise) */

  margin: 10px 20px;
  /* top&bottom   right&left */

}

```

### Padding
```css
{
  padding: 0px 10px 20px 30px;

  /* TOP RIGHT BOTTOM LEFT (clock-wise) */

  padding: 10px 20px;
  /* top&bottom   right&left */

}

```

### Border

```css
p1{
border: 30px solid black;
}

{
  border-width: 0px 10px 20px 30px;

  /* TOP RIGHT BOTTOM LEFT (clock-wise) */

  border-width: 10px 20px;
  /* top&bottom   right&left */

}

```
### Pesticide extension
After installing extension and open a website which is live website(running on a server) then press `ctrl` to see the hover bar at the bottom.
  


