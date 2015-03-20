# three-js

Custom Element for Three.js

This is the result of Polytechnic Tokyo #1.

I noticed about the [PolymerLabs/three-js](https://github.com/PolymerLabs/three-js) after developing my own three-js. So they have nothing to do with each other.

## sample

    <html>
      <head>
        <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
        <link rel="import" href="three-js.html">
      </head>
      <body>
        <three-js width="500" height="500" antialias clearcolor="0x000000">
          <three-js-camera position="0,0,8" lookat="0,0,0"></three-js-camera>
          <three-js-light direction="0.577,0.577,0.577" color="0xcccccc"></three-js-light>
          <three-js-light ambient color="0x333333"></three-js-light>
          <three-js-sphere radius="1" color="0xffffff" map="images/earth.jpg"></three-js-sphere>
        </three-js>
      </body>
    </html>
