# three-canvas

Custom Element for Three.js

## sample

```html
<html>
  <head>
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    <link rel="import" href="three.html">
  </head>
  <body>
    <three-canvas width="200" height="200" antialias clearColor="#000000">
      <three-camera position="0,0,8" lookAt="0,0,0"></three-camera>
      <three-light direction="0.577,0.577,0.577" color="#cccccc"></three-light>
      <three-light ambient color="#333333"></three-light>
      <three-sphere radius="1" color="#ffffff" map="images/earth.jpg"></three-sphere>
    </three-canvas>
    <script>
      (function() {
        var angle = 0;
        var cameraElement = document.querySelector('three-canvas three-camera');
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
