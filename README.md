# splitter.js
#### Easy resizable HTML elements with a splitter
Dependency: jQuery
## Support for:
 - Horizontal Splitter
 - Vertical Splitters
 - Both at once
 - min-width is minded

# Horizontal Splitter
![Horizontal Splitter](https://i.imgur.com/OArd5kv.gif)
See: horizontal_example.html
###### Important: Both resizable elements as well as the splitter need to have the css property ``display: inline-block``

##### Example:
```html
<div class="box"></div> <!-- .box gives them a height, width and display: inline-block-->
<div id="splitter"></div>
<div class="box"></div>
<script>initHorizontalSplitter('#splitter'); // jQuery slector</script>
```

# Vertical Splitter
![Vertical Splitter](https://i.imgur.com/iHWwvkI.gif)
###### Important: Both resizable elements as well as the splitter need to have the css property ``display: block``

##### Example:
```html
<div class="box"></div> <!-- .box gives them a height, width and display: block-->
<div id="splitter"></div>
<div class="box"></div>
<script>initVerticalSplitter('#splitter'); // jQuery slector</script>
```

# Horizontal and Vertical Splitters
![Horizontal and Vertical Splitter](https://i.imgur.com/eWKkMOq.gif)
 
 ##### Example:
```html
<div class="horizontal-wrapper">
    <!-- See: Horizontal Splitter -->
    <div class="box"></div><div id="splitter-horizontal"></div><div class="box"></div>
</div>
<div id="splitter-vertical"></div>
<div class="box-bottom"></div>
```

Thanks for checking out splitter.js! It's coded with simplicity in mind so anyone can understand and use it.

Dennis Heckmann 2018
