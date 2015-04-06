# three-canvas

A Custom Element to Use WebGL Easily by Utilizing Three.js

## How to Use

Install the custom element through bower.

```
$ bower install three-canvas
```

Edit a HTML file as following with your favorite editor and save as index.html.

```html
<html>
  <head>
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    <link rel="import" href="bower_components/three-canvas/dist/three-canvas.html">
  </head>
  <body>
    <three-canvas width="200" height="200" antialias="true" clearColor="#000000">
      <three-camera position="0,0,8" lookAt="0,0,0" controls="orbit"></three-camera>
      <three-box width="1" height="1" depth="1" rotation="0.2,0.2,0" color="#ff0000"></three-box>
    </three-canvas>
  </body>
</html>
```

Start a local web server.

```
$ python -m SimpleHTTPServer
```

Open the web page with a web brower which supports WebGL.

```
$ open http://localhost:8000/index.html
```

## Examples

http://technohippy.github.io/three-canvas/
