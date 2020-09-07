# Transparent-js

Experimentation of building a simple UI with vanilla js.

  - App 
  - Layout 


## How does it work
  - The variables: get injected inside your html
  - The save { object }: stores the data
  - The triggerEvent { object }: contains all the events
  - The triggerMethod { object }: contains all the methods
  - The Layout contains you HTML
  

## Installation

### html
```sh
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div id="root"></div>
    <script src="js/main.js"></script>   
</body>

</html>
```

### main.js

```sh
// ***************************
//  HEADER
// ***************************
const headerTitle = `
  My page
`;

const headerUl = `
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
`;


// ***************************
//  BANNER
// ***************************
const bannerTitle = `
    My app
`;

const bannerResult = `
    Result:
`;

// ***************************
//  HTML
// ***************************
// ***************************
//  HEADER
// ***************************
const headerTitle = `
  My page
`;

const headerUl = `
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
`;


// ***************************
//  BANNER
// ***************************
const bannerTitle = `
    My app
`;

const bannerResult = `
    Result:
`;

// ***************************
//  INPUTS
// ***************************
const firstInput = `
<input type="number" placeholder="Enter first value:" oninput="app.triggerEvent.getTopValue(value)">   
`;

const secondInput = `
<input type="number" placeholder="Enter second value:" oninput="app.triggerEvent.getBottomValue(value)"> 
`;
      

// ***************************
//  HTML
// ***************************
const Layout = `
     <div class="container">
        <header>
           <h1>${headerTitle}</h1> 
           <nav>${headerUl}</nav>
        </header>
        <section id="banner">
            <h2>${bannerTitle}</h2>
             ${firstInput}
             ${secondInput}
            <p>${bannerResult} <span class="result"></span></p>
        </section>        
     </div>
`;
// ***************************
//  LOGIC
// ***************************
const app = {
  save: {
    topValue: "",
    bottomValue: "",
  },
  triggerMethod: {
    addBoth() {
      return app.save.topValue + app.save.bottomValue;
    },
  },
  triggerEvent: {
    getTopValue(value) {
      app.save.topValue = parseFloat(value) || 0;
      document.querySelector(".result").innerHTML = app.triggerMethod.addBoth();
    },
    getBottomValue(value) {
      app.save.bottomValue = parseFloat(value) || 0;
      document.querySelector(".result").innerHTML = app.triggerMethod.addBoth();
    },
  },
};
// ***************************
//  RENDERING
// ***************************
const html = (document.querySelector("#root").innerHTML = Layout);


### css

```sh
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

html {
    font-size: calc(15px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
}

.container {
  color: white;
  background-color: #424242;
  height: 100vh;
  text-align: center;
}

/* { HEADER } */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #494949;
}

header h1 {
  padding-left: 1em;
}

nav {
  display: flex;
}

nav ul {
  display: inherit;  
}

nav li {
  list-style-type: none;  
  padding: 0 1em;
  margin-right: 1em;
}

/* { BANNER } */
#banner {
    padding: 2em 0;
    font-size: x-large;
    display: grid;
    justify-items: center;
}

#banner input {
    padding: 8px 13px;
    margin-top: 2em;
    display: block;
}

#banner p {
    margin-top: 1em;
}


```


### See project in codepen

| EX | LIVE |
| ------ | ------ |
| Codepen | https://codepen.io/chattingharold/pen/LYNbGzd |



License
----

MIT


**Free Software**

