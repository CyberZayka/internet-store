import React from "react";
import storage from "../../services/LocalStorage/LocalStorage";
import {ReactComponent as FavStar} from "./icons/fav-star.svg";
import {ReactComponent as Cart} from "./icons/cart.svg";
import {ReactComponent as CartFilled} from "./icons/cart-filled.svg";
import {setModalHeader, setModalId, setModalVisible} from "../../store/modal/actions";
import {setFavoritesArr} from "../../store/favorites/actions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./GoodsItem.scss";


export function GoodsItem({honey, setModalVisible, setModalHeader, isInCart, isInFavorite, setFavoritesArr, setModalId}) {
    const cartBtnClickHandler = () => {
        const headerText = isInCart ? "Удалить товар из корзины?" : "Добавить товар в корзину?";
        setModalHeader(headerText);
        setModalId(honey.id);
        setModalVisible(true);
    }

    const favoriteBtnClickHandler = () => {
        isInFavorite ? storage.remove("favorites", honey.id) : storage.add("favorites", honey.id);
        setFavoritesArr([...storage.favorites])
    }

    const {vendorCode, name, price, imgURL, color} = honey;

    return (
            <li className="honey-list__item card">
                <button className={`fav-btn${isInFavorite ? " added" : ""}`} onClick={favoriteBtnClickHandler} data-testid="fav-btn">
                    <FavStar/>
                </button>
                <a className="card__link" href="/">
                    <div className="card__img-wrapper">
                        <img className="card__img" src={imgURL} alt={name}/>
                    </div>
                    <h3 className="card__title">{name}</h3>
                </a>
                <p className="card__info">
                    <span>Артикул: {vendorCode} </span>
                    <span>Цвет: {color}</span>
                </p>
                <p className="card__purchase">
                    {price}₴
                    <button className="cart-btn" onClick={cartBtnClickHandler} data-testid="cart-btn">
                        {isInCart ? <CartFilled/> : <Cart/>}
                    </button>
                </p>
            </li>
    );
}

GoodsItem.propTypes = {
    honey: PropTypes.object.isRequired,
    updFavorites: PropTypes.func
}

const mapStateToProps = (state, props) => {
    const isInFavorite = state.favoritesArr.includes(props.honey.id);
    const isInCart = state.cartedArr.includes(props.honey.id);
    return {
        isInCart,
        isInFavorite
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModalVisible: (isVisible) => dispatch(setModalVisible(isVisible)),
        setModalHeader: (headerText) => dispatch(setModalHeader(headerText)),
        setModalId: (modalId) => dispatch(setModalId(modalId)),
        setFavoritesArr: (favoritesArr) => dispatch(setFavoritesArr(favoritesArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsItem)