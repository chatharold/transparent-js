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
    Add values
`;

const bannerResult = `
    Result:
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
            <input type="number" placeholder="Enter first value:" oninput="app.triggerEvent.getTopValue(value)">   
            <input type="number" placeholder="Enter second value:" oninput="app.triggerEvent.getBottomValue(value)">   
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
