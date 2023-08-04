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
        // this.testing();
    }

    // testing(){
    //     const promise =  new Promise((resolve, reject )=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});

    //         this.setState({qty:this.state.qty+10});

    //         // set state acts like asycnhronou call
    //         console.log("state", this.state);
    //     })
    // }


    // function for increase quantity 
    increaseQuantity = () =>{
        // this.state.qty+=1;
        // set sate form one
        // this.setState({
        //     qty:this.state.qty+1
        // });

        // set state form 2 - if previousstate requred use this form 
        this.setState((prevState)=>{
                 return{
                   qty: prevState.qty+1
                 }
        }, ()=>{ 
            console.log('this.state', this.state);
        });
        
        
    }
   

    // function for decrase the quantity
    decreaseQuantity = () =>{
        const {qty} =  this.state;
        if(qty === 0){
            return;
        }
        // this.state.qty+=1;
        // set sate form one
        // this.setState({
        //     qty:this.state.qty-1
        // });

        // set state form 2 - if previousstate requred use this form 
        this.setState((prevState)=>{
                 return{
                   qty: prevState.qty-1
                 }
        });
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
             src="https://www.svgrepo.com/show/522961/minus-circle.svg "
             onClick={this.decreaseQuantity} />

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
