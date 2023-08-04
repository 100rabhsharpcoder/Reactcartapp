import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:" Mobile PHONE",
            qty:1,
            img:''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () =>{
        console.log('this.state', this.state);
    }
    render(){
        const { price , title , qty} = this.state;
        return (
             <div className='card-item' style={{display: 'inline-flex'}}>
                <div className='left-block'>
                     <img style={styles.image}/>
                </div>

                <div className='right-block'>
                     <div style={{fontSize:25}}>{title}</div>
                     <div style={{color:'#777'}}>Rs {price}</div>
                     <div style={{color:'#777'}}>Qty:{qty}</div>
                     <div className='cart-item-actions'></div>

                      {/* Buttons */}
            <img alt="increase"
             className="action-icons" 
             src="https://www.svgrepo.com/show/522735/add-circle.svg"
             onClick={this.increaseQuantity} />

            <img alt="decrease" 
            className="action-icons"
             src="https://www.svgrepo.com/show/522961/minus-circle.svg " />

            <img alt="delete"
             className="action-icons" 
             src= "https://www.svgrepo.com/show/502608/delete-2.svg" />

                </div>


             </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;
