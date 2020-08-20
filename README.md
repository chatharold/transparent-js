# Transparent-js

Experimentation of building a simple UI with vanilla js.

  - App 
  - Layout 


## How does it work

  - You have an App ( OBJECT )
  - The save property(OBJECT) stores the data
  - The trigger property(OBJECT) contains the functions
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
const app = {
  save: {
    top: "",
    down: "",
  },
  trigger: {
    addBoth() {
      return app.save.top + app.save.down;
    },
    getValueTop(value) {
      app.save.top = parseInt(value);
      document.querySelector(".result").innerHTML = app.trigger.addBoth();
    },
    getValueBottom(value) {
      app.save.down = parseInt(value);
      document.querySelector(".result").innerHTML = app.trigger.addBoth();
    },
  },
};

let Layout = `
     <div class="container">
        <h1>Add</h1>
        <input type="number" oninput="app.trigger.getValueTop(value)">
        <input type="number" oninput="app.trigger.getValueBottom(value)">
        <p>Result: <span class="result"></span></p>
     </div>
`;

const html = (document.querySelector("#root").innerHTML = Layout);
```


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

.container {
  color: white;
  background-color: #424242;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
}

input {
  padding: 10px;
  margin: 1em 35vw;
}

p {
  text-align: center;
  margin-top: 1em;
}
```


### See project in codepen

| Plugin | README |
| ------ | ------ |
| Codepen | : https://codepen.io/chattingharold/pen/LYNbGzd |



License
----

MIT


**Free Software**

