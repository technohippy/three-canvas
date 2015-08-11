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
    <three-canvas width="200" height="200" antialias="true" clear-color="#000000">
      <three-camera position="0,0,8" look-at="0,0,0" controls="orbit"></three-camera>
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

## License

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
