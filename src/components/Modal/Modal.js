import React from "react";
import {ReactComponent as CloseIcon} from "./close-modal.svg";
import PropTypes from "prop-types";
import "./Modal.scss";

function Modal(props) {
    const {header, closeButton, text, actions, closeHandler} = props;
    return (
        <div className="modal-overlay" onClick={closeHandler} data-action="close-modal" data-testid="modal-overlay">
            <div className="modal">
                <h3 className="modal__header">{header}</h3>
                {closeButton &&
                <button className="close-btn" data-action="close-modal">
                    <CloseIcon data-action="close-modal"/>
                </button>}
                <p className="modal__body">{text}</p>
                {actions}
            </div>
        </div>
    )
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    actions: PropTypes.element.isRequired,
    closeHandler: PropTypes.func.isRequired
}

Modal.defaultProps = {
    closeButton: true,
}

export default Modal;