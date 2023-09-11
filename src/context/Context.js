import React from 'react'
import {createContext, useReducer, useContext} from 'react';
import productData from './productData.json';
import { cartReducer } from './Reducers';
import { productReducer } from './Reducers';
// import {faker} from 'faker';

const Cart= createContext();

const Context = ({children}) => {
    const products= productData.products;
//   const products=[...Array(20)].map(()=> ({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     Price: faker.commerce.Price(),
//     image: faker.random.image(),
//     inStock: faker.random.arrayElement([0, 3, 5,6,7]),
//     fastDelivery: faker.datatype.boolean(),
//     ratings: faker.random.arrayElement([1,2 ,3 ,4, 5]),
//   }));

console.log(products);

const [state, dispatch]= useReducer(cartReducer,{
    products: products,
    cart:[]
});

const[productState, productDispatch]= useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating:0,
    searchQuery: "",
});

 

  return (<Cart.Provider  
    value={{state, dispatch,productState, productDispatch}}>
        {children}
        </Cart.Provider>
        );
 
};



export const CartState = () => {
    return useContext(Cart);
}

export default Context;