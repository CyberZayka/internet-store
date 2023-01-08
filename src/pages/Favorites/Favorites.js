import React from "react";
import GoodsList from "../../components/GoodsList/GoodsList";
import {connect} from "react-redux";


function Favorites({honeyArr, favoritesArr}) {
    const favoritesItems = honeyArr.filter((h, i) => favoritesArr.includes(i));
    return <GoodsList honeyArr={favoritesItems}/>
}

const mapStateToProps = (state) => {
    return {
        honeyArr: state.honey.data,
        favoritesArr: state.favoritesArr
    }
}

export default connect(mapStateToProps)(Favorites)