<h1 align=center>React 360 Spin</h1>
<p align=center>
<img align=center width="200" height="200" src="https://github.com/lilbogdaddy/react-360-spin/blob/main/example-media/ezgif-4-b185f9f8b8.gif?raw=true">
</p>

<p align=center>
npm package for react that is a powerful component for displaying arrays of images in a 3D environment.<br> Users can easily upload and manipulate images, creating stunning 3D visuals that can be spun around. <br>Designed to work with react's dynamic importing of images but also works with links to images stored remotely 
</p>
<p align=center>· <a href="https://github.com/lilbogdaddy/react-360-spin">github</a> · <a href="https://www.npmjs.com/package/react-360-spin">npm</a> ·</p>
<h2>About</h2>

I was working on a client landing page who wanted a 360 representation of the product. I looked extensively for a package that could do this and the one that worked best was Todilo's <a href="https://github.com/Todilo/react-360-product-viewer">react-360-product-viewer</a> which is a great component that does exactly what this component aims to do. However, I could not for the life of me figure out how to make it work with dynamic image imports. I was fine using google cloud to store the images and use Todilo's component until the client decided cloud storage was too expensive. As a result, I made my own and published to npm.  

This component works with react's dynamic imports by storing all image import variable names in an array and displaying the image at the current index. As a result this can also work with images stored in the cloud by simply creating an array and storing each image url as a string in the array. Then, by passing the array of image variable names or url strings to the component, the desired effect is created. The components width, height, and border properties can be set aswel as the scroll speed in addition to autoplay and reverse spin functionality. Consult the <a href="#API">api</a> on how to properly use this component.
<h2>Installation</h2>
<h4>1. Get started with create-react-app</h4>

If you haven't already, create a new react app. Using terminal, type in

```sh
  npx create-react-app my-app 
```

<h4>2. Download the package</h4>

Download using npm. cd into your react app directory and write

```sh
  npm i react-360-spin
```

<h4>3. Import the component</h4>

Write the following along with your other import statements in the file you'd like to use this component

```javascript
  import Spin360 from 'react-360-spin';
```

<h4>4. Import the images</h4>

Because of react's dynamic importing, each image must be individually imported from their respective path(s)

```javascript
  import shirt1 from "./SHIRTFINAL/shirt-1.jpg"
  import shirt2 from "./SHIRTFINAL/shirt-2.jpg"
  import shirt3 from "./SHIRTFINAL/shirt-3.jpg"
  import shirt4 from "./SHIRTFINAL/shirt-4.jpg"
  import shirt5 from "./SHIRTFINAL/shirt-5.jpg"
  import shirt6 from "./SHIRTFINAL/shirt-6.jpg"
  import shirt7 from "./SHIRTFINAL/shirt-7.jpg"
  import shirt8 from "./SHIRTFINAL/shirt-8.jpg"
  import shirt9 from "./SHIRTFINAL/shirt-9.jpg"
  import shirt10 from "./SHIRTFINAL/shirt-10.jpg"
  import shirt11 from "./SHIRTFINAL/shirt-11.jpg"
  import shirt12 from "./SHIRTFINAL/shirt-12.jpg"
  import shirt13 from "./SHIRTFINAL/shirt-13.jpg"
  import shirt14 from "./SHIRTFINAL/shirt-14.jpg"
  import shirt15 from "./SHIRTFINAL/shirt-15.jpg"
  import shirt16 from "./SHIRTFINAL/shirt-16.jpg"
```

<h4>5. Create an array of the imported files</h4>

Store the images you just imported in an array with their import variable names

```javascript
  let shirts = [
                shirt1, shirt2, shirt3, 
                shirt4, shirt5, shirt6, 
                shirt7, shirt8, shirt9, 
                shirt10, shirt11, shirt12, 
                shirt13, shirt14, shirt15, shirt16
              ]
```

<h4>6. Add the Spin360 component</h4>

In the return statement, include the Spin360 Component - passing it the image array you just created to the component's imageArray prop. Also, pass it width, height, and speed props. See <a href=#API>API</a> for full list of props, descriptions, and types

```javascript
  <Spin360 imageArray={shirts}
           width={300}
           height={300}
           speed={3}
  />
```

<h2 id="API">API</h2>

| Props         | Type    | Description                                                                                                                                                  |
|---------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| imageArray    | Array   | Array of import image variables or url links to each image                                                                                                   |
| width         | Number  | Number representing width of container in pixels                                                                                                             |
| height        | Number  | Number representing height of container in pixels                                                                                                            |
| speed         | Number  | Determines how quickly images change when dragging or swiping                                                                                                |
| border        | String  | Sets the border property of a container as it would in css                                                                                                   |
| autoPlay      | Boolean | If true, the images will change automatically on page load and user  wont be able to interact with the component. If false, images will change on user input |
| autoPlaySpeed | Number  | Delay in ms between each image change while autoPlay is true                                                                                                 |
| reverse       | Boolean | True or False will swap the order that the images are displayed in

To recreate the top gif above the title, use the provided sample images and these props in the component

```javascript
  <Spin360 imageArray={shirts}
           width={300}
           height={300}
           speed={3}
           border="1px solid black"
           autoPlay={false}
           autoPlaySpeed={120}
           reverse={true}
  />
```

