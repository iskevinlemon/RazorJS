# RazorJS
JavaScript library for Razor (@) templating.
<br/>

# Usage

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
