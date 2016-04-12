const btn = document.querySelector('button');

function testRequire() {
  const { head } = require('lodash');
  head([1, 2, 3]);
}

btn.addEventListener('click', () => {
  testRequire();
});
