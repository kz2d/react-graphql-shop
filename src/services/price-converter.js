const MoneyTypeSymbol = require("../assets/Constants");

const fun = (cart, Currency, element) => {
  const specialPrice = cart[element].price.find(
    (e) => Currency === e.currency
  ).amount;
  return MoneyTypeSymbol.MoneyTypeSymbol[Currency] + specialPrice;
};

export default fun;
