const btn = document.querySelector('button');

function testRequire() {
  console.time('testRequire');

  const { head } = require('lodash');
  head([1, 2, 3]);

  console.timeEnd('testRequire');
}

btn.addEventListener('click', () => {
  testRequire();
});
