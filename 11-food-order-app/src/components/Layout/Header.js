import classes from "./Header.module.css";
import React from "react";


const Header = () => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
            </div>
            <div className={classes.mainImage}>
                <img src="/meals.jpg" alt='meal image'/>
            </div>


        </React.Fragment>
    );
}

export default Header;