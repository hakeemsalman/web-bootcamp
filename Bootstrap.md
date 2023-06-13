# Bootstrap

Bootstrap is a CSS Framework developed by _Two Twitter Developer in 2010_

**_Mark Auto & Jacob Donton_**

## When to use Bootstrap

- If you want create quick website with responsicve Both Desktop and Mobile screen then use Bootstrap

- If you have complex design then it is NOT recommended to use Bootstrap

- If you want to use pixel size icons and cards quality and need some customization then it is NOT recommend to use Bootstrap, it's heavy customize the code using Bootstrap.

## How to use Bootstrap

1. Copy CDN `link` from Bootstrap website [https://getbootstrap.com/](https://getbootstrap.com/)
2. Paste into _html_ file in `link` tag

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
  </head>

  <body></body>
</html>
```

There are so many CSS Frameworks

- Tailwind
- Bootstrap
- and many more

You can search which css framework is most usage and popular

### Bootstrap Exercise

Below code is an Exercise, and Bootstrap code to achieve as Goal shown.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap</title>
    <!-- TODO 1: Add the Bootstrap link here. -->
    <style>
      /* TODO 4: Use flexbox to center the card in the vertical and horizontal center. */
    </style>
  </head>

  <body>
    <div class="flex-container">
      <!-- TODO 2: Add the Bootstrap Prebuilt Card here -->
      <!-- TODO 3: Change the image src to display the flower.jpg image. -->
    </div>
  </body>
</html>
```

#### SOLUTION

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <!-- TODO 1: Add the Bootstrap link here. -->
    <style>
      /* TODO 4: Use flexbox to center the card in the vertical and horizontal center. */
      .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
  </head>

  <body>
    <div class="flex-container">
      <!-- TODO 2: Add the Bootstrap Prebuilt Card here -->
      <div class="card" style="width: 18rem">
        <img src="./flower.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <!-- TODO 3: Change the image src to display the flower.jpg image. -->
    </div>
  </body>
</html>
```
