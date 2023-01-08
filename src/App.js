import React, {useEffect} from "react";
import {getHoney} from "./store/honey/operations";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import {connect} from "react-redux";
import "./styles/App.scss";

function App({getHoney, isLoading}) {
    useEffect(() => getHoney(), [getHoney]);

    return (
        <>
            <header>
                <div className="container">
                    <h1 className="title">Online Honey Shop</h1>
                    <Navbar/>
                </div>
            </header>
            <main>
                <div className="container">
                    {isLoading? <Loader/> : <AppRoutes/>}
                </div>
            </main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.honey.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHoney: () => dispatch(getHoney())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);