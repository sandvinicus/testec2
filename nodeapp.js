const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let formInput = 'Esercizio di docker e Dockerfile';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('asset'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>IL CORSO DOCKER DELL'ITS spec</h2>
          <h3>Valore inserito: ${formInput}</h3>
        </section>
        <form action="/save" method="POST">
          <div class="form-control">
            <label>Input</label>
            <input type="text" name="input">
          </div>
          <button>Acquisci il testo</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/save', (req, res) => {
  const enteredInput = req.body.input;
  console.log('valore inserito: ' + enteredInput);
  formInput = enteredInput;
  res.redirect('/');
});

app.listen(80);
