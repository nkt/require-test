const btn = document.querySelector('button');

require.ensure(['lodash'], (require) => {
  btn.addEventListener('click', () => {
    const { head } = require('lodash');
    head([1, 2, 3]);
  });
  console.log('Test me!');
});
