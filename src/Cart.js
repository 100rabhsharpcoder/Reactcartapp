import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
  constructor(){
    super();
    this.state={
        products:[
          {
            price:999,
            title:" watch",
            qty:1,
            img:'',
            id:1
        },
        {
          price:999,
          title:" Mobile PHONE",
          qty:10,
          img:'',
          id:2
      },
      {
        price:999,
        title:"Laptop",
        qty:5,
        img:'',
        id:3
    }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}
  render() {
    const {products}  = this.state;
    
    return( 
    <div className='cart'>
          {products.map((product)=>{
             return  <CartItem
              product = {product} 
              key = {product.id}
              func= {()=>console.log("sdsds")}
              jsx = {<h1>Test</h1>}
              // comp = {<CartItem/>}
              />
          })}  
    </div>
    );
  }
}



export default Cart;
