import React, {PureComponent} from "react";
import deathStar from "./death-star.png";
import PropTypes from "prop-types";
import "./ErrorBoundary.scss";

class ErrorBoundary extends PureComponent {
    state = {
        errorPresent: false
    }

    static getDerivedStateFromError() {
        return {errorPresent: true}
    }

    render() {
        const {errorPresent} = this.state;
        const {children} = this.props;
        if (errorPresent) {
            return (
                <div className="error">
                    <img src={deathStar} className="error__img" alt="death-star"/>
                    <h3>An error has occurred</h3>
                    <h4>But we already sent droids to fix it</h4>
                </div>
            )
        }
        return children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired
}

export default ErrorBoundary