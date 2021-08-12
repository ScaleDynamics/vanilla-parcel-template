require('@warpjs/engine');

const backend = require('./.backend/backend');

const { hello } = new backend();

// call module function
hello().then((msg) => {
  document.getElementById('message').innerHTML = msg;
});
