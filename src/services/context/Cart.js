import React from "react";

const CartState = React.createContext()
const CartStateDispatch = React.createContext()

function CartReducer(state, action) {
    action.num = action.num ? action.num : 1
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'add': {
            let obj = state;

            if (typeof obj[action.name]!='undefined') {
                obj[action.name].amount += action.num;
                return {...obj}
            }

            obj[action.name] = {
                amount: action.num,
                name: action.name,
                price: action.price,
                img: action.img
            }
            return {...obj}
        }
        case 'delete': {
            let obj = state;
console.log('ss')
            if (typeof obj[action.name]!='undefined') {
                console.log('ss')
                obj[action.name].amount -= action.num;
                if(obj[action.name].amount<=0){
                    delete obj[action.name]
                }
                return {...obj}
            }

            return obj
        }
        default:
            throw Error('Cart dont have this atribute' + action)
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = React.useReducer(CartReducer, {})
    return (
        <CartState.Provider value={state}>
            <CartStateDispatch.Provider value={dispatch}>
                {children}
            </CartStateDispatch.Provider>
        </CartState.Provider>
    )
}

function useCartState() {
    const context = React.useContext(CartState)
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

function useCartDispatch() {
    const context = React.useContext(CartStateDispatch)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}

export { CartProvider, useCartState, useCartDispatch }