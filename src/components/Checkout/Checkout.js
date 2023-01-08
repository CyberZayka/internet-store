import React from "react"
import {Form, Formik} from "formik";
import validationSchema from "./validationSchema";
import Input from "./Input";
import {clearCart} from "../../store/cart/operations";
import {connect} from "react-redux";
import "./Checkout.scss";

export function Checkout({cartedItems, clearCart}) {
    const checkout = (values) => {
        console.log("Customer:", values);
        console.log("Purchased items:", cartedItems);
        clearCart();
    }

    return (
        <Formik
            initialValues={{
                name: "",
                surname: "",
                age: "",
                address: "",
                tel: ""
            }}
            onSubmit={checkout}
            validationSchema={validationSchema}
        >
            {() => (
                <section className="checkout">
                    <h3 className="checkout__title">Оформление заказа</h3>
                    <Form className="checkout__form" noValidate>
                        <Input name="name" type="text" labelText="Имя" required/>
                        <Input name="surname" type="text" labelText="Фамилия" required/>
                        <Input name="age" type="number" labelText="Возраст" required/>
                        <Input name="address" type="text" labelText="Адрес доставки" required/>
                        <Input name="tel" type="tel" labelText="Мобильный телефон" required/>
                        <div className="checkout__submit-wrapper">
                            <button type="submit" className="checkout__submit-btn" data-testid="checkout-submit-btn">Оформить заказ</button>
                        </div>
                    </Form>
                </section>
            )}
        </Formik>
    )
}


const mapStateToProps = (state) => {
    const cartedItems = state.honey.data.filter((h, i) => state.cartedArr.includes(i)).map(({name, price}) => ({name, price}));
    return {
        cartedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);