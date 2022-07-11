import { Fragment } from "react";
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Hotel Shree Panjurli.....!</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="When not in Mood, Just Have Some Foooood......!"></img>
        </div>
    </Fragment>

};
export default Header;