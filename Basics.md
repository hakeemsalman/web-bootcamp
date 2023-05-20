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

#### Margin
```css
{
  margin: 0px 10px 20px 30px;

  /* TOP RIGHT BOTTOM LEFT (clock-wise) */

  margin: 10px 20px;
  /* top&bottom   right&left */

}

```

#### Padding
```css
{
  padding: 0px 10px 20px 30px;

  /* TOP RIGHT BOTTOM LEFT (clock-wise) */

  padding: 10px 20px;
  /* top&bottom   right&left */

}

```

#### Border

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
#### Pesticide extension
After installing extension and open a website which is live website(running on a server) then press `ctrl` to see the hover bar at the bottom.
  
	
### CSS Cascade
	
cascade means (you can search in google)
but here we should know the importance of multiple rules applied on same element or tag, which rule is applied first.
First bowser see the **External CSS** then **Internal CSS** then **Inline CSS**
> External CSS ----> Internal CSS ----> Inline CSS
  
#### Important of CSS catogory precedence rule
1. Position
2. Specifity
3. Type
4. Importance
  
##### 1. Position
```css
li{
  color: red;
  color: blue;
  }
```
##### 2. Specifity
> **NOTE:** flows goes from TOP to BOTTOM. Element Selector --> Class Selector ---> Attribute Selector ---> Id Selector 
```html
<li id="first-class" class="first-class" draggable>
```
```css
li{     /* this one is least specific. Element Selector*/
  color: blue;
 }
.first-class{
  color: red;
 }
 li[draggable] {
  color: purple; 
 }
 #first-class{
  color: orange;
 }
```
##### 3. Type
```html
  <link rel="stylesheet" href="./style.css">
  <style></style>
  <h1 style=" ">Hello</h1>
```
  
##### 4. Importance
```css
  color: red;
  color: green !important;
```
#### Combining CSS 
```html
<p>Yellow text</p>
<div class="box inner-box">
	<p>White Text</p>
</div>

```
```css
p{
	color: Yellor;
}
.inner-box p{
	color: white;
}
```

##### 1. Group rule
	
 Group = Apply to both selectors
```css
selector, selector{
	color: bluevoilet;
}
```
##### 2. Child rule
	
It's only work only ONE child element tag, NOT for grand child.
Works on Only One level deep. 
```css
selector > selector{
	color: firebrick;
}
```
selector `>` selector means parent `>` child

##### 3. Descendant

Descendant = Apply to descendant of a left side
```css
selector1 selector2{
	color: blue;
}
```
selector1 is An Ancestor selector and selector2 is Descendant selector
- Example

```html
<div class="box">
    <p class="done">Do these things today!</p>
    <ul class="list">
      <li>Wash Clothes</li>
      <li class="done">Read</li>
      <li class="done">Maths Questions</li>
    </ul>
  </div>
```
```css
.box li{
    color: blue;
}
```
##### 4. Chaining
Chaining = Apply where ALL selectors are true

```css
selector1selector2{
	color: seagreen;
}
```
![IMAGE](./assets/combine-selector-1.png)

##### 5. Combining Combiners
```css
selector1 selector2selector3{
	font-size: 0.5rem;
}
```
- example - change the font-size of `p` element

```html
<div class="box">
    <p class="done">Do these things today!</p>
    <ul class="list">
      <li>Wash Clothes</li>
      <li class="done">Read</li>
      <li class="done">Maths Questions</li>
    </ul>
  </div>

  <ul>
    <p class="done">Other items</p>
  </ul>
``` 
```css

.box p.done{ /* WRONG*/
	font-size: 0.5rem;
}

ul p.done{    /*CORRECT*/
    font-size: 0.5rem;
}
```

#### CSS Positioning
1. [Static](#1.-static)
2. [Relative](2.-relative)
3. [Absolute](3.-absolute)
4. [Fixed]()

You can practice in this [LINK](https://appbrewery.github.io/css-positioning/)

![IMAGE](./assets/css-positioning-1.png)

##### 1. Static

![IMAGE](./assets/css-static-pos-1.png)

##### 2. Relative

![IMAGE](./assets/css-relative-pos-1.png)

##### 3. Absolute

![IMAGE](./assets/css-absolute-pos-1.png)

> NOTE: If `position: relative` is NOT found in Ancestors element then this descendant element will move to TOP-LEFT corner.

- z-index is change order of position in css in z-axis
```css
 z-index: 0; /*default value*/
 z-index: -1; /*change the order from Top to Bottom*/
```

##### 4. Fixed

![IMAGE](./assets/css-fixed-pos-1.png)

