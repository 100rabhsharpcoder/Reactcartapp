import React from 'react';

const CartItem = (props) => {


    console.log("this.prop", props)
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className='card-item' style={{ display: 'inline-flex' }}>
            {/* {this.props.jsx} */}
            <div className='left-block'>
                <img style={styles.image} />
            </div>

            <div className='right-block'>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty:{qty}</div>
                <div className='cart-item-actions'></div>

                {/* Buttons */}
                <img alt="increase"
                    className="action-icons"
                    src="https://www.svgrepo.com/show/522735/add-circle.svg"
                    onClick={() => onIncreaseQuantity(product)} />

                <img alt="decrease"
                    className="action-icons"
                    src="https://www.svgrepo.com/show/522961/minus-circle.svg "
                    onClick={() => onDecreaseQuantity(product)} />

                <img alt="delete"
                    className="action-icons"
                    src="https://www.svgrepo.com/show/502608/delete-2.svg"
                    onClick={() => onDeleteProduct(product.id)} />

            </div>


        </div>
    );
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
