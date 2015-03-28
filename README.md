# three-js

Custom Element for Three.js

This is the result of Polytechnic Tokyo #1.

I noticed about the [PolymerLabs/three-js](https://github.com/PolymerLabs/three-js) after developing my own three-js. So they have nothing to do with each other.

## sample

```html
<html>
  <head>
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    <link rel="import" href="three-js.html">
  </head>
  <body>
    <three-js-canvas width="200" height="200" antialias clearColor="#000000">
      <three-js-camera position="0,0,8" lookAt="0,0,0"></three-js-camera>
      <three-js-light direction="0.577,0.577,0.577" color="#cccccc"></three-js-light>
      <three-js-light ambient color="#333333"></three-js-light>
      <three-js-sphere radius="1" color="#ffffff" map="images/earth.jpg"></three-js-sphere>
    </three-js-canvas>
    <script>
      (function() {
        var angle = 0;
        var cameraElement = document.querySelector('three-js-canvas three-js-camera');
        cameraElement.addEventListener('render', function() {
          var x = 8 * Math.sin(angle);
          var z = 8 * Math.cos(angle);
          angle += 0.01;
          this.setAttribute('position', '' + x + ',0,' + z);
          this.setAttribute('lookAt', '0,0,0,' + Math.random());
        });
      })();
    </script>
  </body>
</html>
```
