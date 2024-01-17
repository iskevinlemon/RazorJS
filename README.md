# RazorJS
JavaScript library for Razor (@) templating.
<br/>
<h1>⚠️ Warning: DO NOT USE in production</h1>
There is a bug in which all eventListener in the document is cancelled off.

# CDN link
```html
<script src="https://cdn.jsdelivr.net/gh/iskevinlemon/RazorJS/Razor.js"></script>
```

# Usage examples

**Data Binding (bind value)** <br>
```html
<h1>@color</h1> <!-- Razor @variable will be rendered as <h1>blue</h1> -->

<script>
    var color = "blue"; // set the value variable "color"
</script>
```
**Data Binding (bind js)** <br>
```html
<button @sayhello>Click me</button>

<script>
    var sayhello = `onclick="alert('Hello')"`;
</script>
```
**Data Binding (bind component)** <br>
```html
@goodmorning <!-- will be rendered as <h3>Good Morning</h3> -->

<script>
    var goodmorning = '<h3>Good Morning</h3>';
</script>
```
