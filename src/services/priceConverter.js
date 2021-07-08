const MoneyTypeSymbol = require('../assets/Constants')

const fun=(cart, Currency, element) => {
    let specialPrice=cart[element].price.find((e) =>
        Currency === e.currency).amount;
    console.log(specialPrice)
    return MoneyTypeSymbol.MoneyTypeSymbol[Currency] + specialPrice
}

export default fun;