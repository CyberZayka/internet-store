import React from "react";
import storage from "../../services/LocalStorage/LocalStorage";
import {setCartedArr} from "../../store/cart/actions";
import {setModalVisible} from "../../store/modal/actions";
import GoodsItem from "../GoodsItem/GoodsItem";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./GoodsList.scss";


export function GoodsList({honeyArr, modalVisible, modalHeader, setModalVisible, modalId, cartedArr, setCartedArr}) {
    const honeyCards = honeyArr.map(h => <GoodsItem key={h.id} honey={h}/>);
    const isInCart = cartedArr.some(e => e === modalId);

    const addToCart = () => {
        storage.add("addedToCart", modalId);
        setCartedArr([...storage.addedToCart]);
        setModalVisible(false);
    }

    const removeFromCart = () => {
        storage.remove("addedToCart", modalId);
        setCartedArr([...storage.addedToCart]);
        setModalVisible(false);
    }

    return (
        <>
            <ul className="honey-list">
                {honeyCards}
                {!honeyCards.length && <li className="honey-list__empty-state">Товар отсутствует</li>}
            </ul>
            {modalVisible && <Modal
                header={modalHeader}
                closeButton={true}
                text={`Вы действительно хотите ${modalHeader.toLowerCase()}`}
                actions={
                    <div className="cart-confirm-wrapper">
                        <button
                            className="cart-confirm-btn cart-confirm-btn--accept"
                            onClick={isInCart ? removeFromCart : addToCart}
                            data-testid="cart-confirm-btn">
                            ОК
                        </button>
                        <button
                            className="cart-confirm-btn cart-confirm-btn--decline"
                            onClick={() => setModalVisible(false)}
                            data-testid="cart-decline-btn">
                            Отмена
                        </button>
                    </div>
                }
                closeHandler={(e) => {
                    if (e.target.dataset.action === "close-modal") setModalVisible(false)
                }}
            />}
        </>
    );
}

GoodsList.propTypes = {
    honeyArr: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        vendorCode: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imgURL: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        modalVisible: state.modal.isVisible,
        modalHeader: state.modal.header,
        modalId: state.modal.cardId,
        cartedArr: state.cartedArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModalVisible: (isVisible) => dispatch(setModalVisible(isVisible)),
        setCartedArr: (cartedArr) => dispatch(setCartedArr(cartedArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)