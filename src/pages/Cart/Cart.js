import React from "react";
import GoodsList from "../../components/GoodsList/GoodsList";
import CheckoutForm from "../../components/Checkout/Checkout";
import {connect} from "react-redux";


function Cart({honeyArr, cartedArr}) {
    const cartedItems = honeyArr.filter((h, i) => cartedArr.includes(i));
    return (
        <>
            <GoodsList honeyArr={cartedItems}/>
            {!!cartedItems.length && <CheckoutForm/>}
        </>)
}

const mapStateToProps = (state) => {
    return {
        honeyArr: state.honey.data,
        cartedArr: state.cartedArr
    }
}

export default connect(mapStateToProps)(Cart);