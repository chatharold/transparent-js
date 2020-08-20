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