//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors

company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };

const {name} = company
// const {products:{shirts:{colors}}} = company
const cores1 = company.products.socks.colors;
const cores2 = company.products.shirts.colors;

const colors = [[...cores1],[...cores2]]

console.log(name)
console.log(colors)