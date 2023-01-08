import React from "react";
import {Route, Switch} from "react-router-dom";
import GoodsList from "../components/GoodsList/GoodsList";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";
import {connect} from "react-redux";

function AppRoutes({honeyArr}) {
    return (
        <Switch>
            <Route exact path="/"><GoodsList honeyArr={honeyArr}/></Route>
            <Route exact path="/cart"><Cart/></Route>
            <Route exact path="/favorites"><Favorites/></Route>
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        honeyArr: state.honey.data
    }
}

export default connect(mapStateToProps)(AppRoutes)