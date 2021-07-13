import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import {Link} from "react-router-dom";
//import {ROUTES} from "../../../../routes/routeNames";

const CounterView = ({ countValue,
                         /*parityType,*/
                         handleIncrement,
                         handleDecrement,
                         handleReset}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.display}> {countValue} </div>
            {/*<div className={styles.displayType}>{parityType}</div>*/}
            <div className={styles.displayType} >{ countValue % 2 === 0 ? <div>четное</div> : <div>нечетное</div> }</div>
            <div className={styles.buttonWrapper}>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleIncrement} >+</button>
            </div>
            <div className={styles.but_HomePage}>
                <Link to="/">
                    <button>HomePage</button>
                </Link>
            </div>
        </div>
    );
};
CounterView.propTypes = {
    countValue: PropTypes.number.isRequired,
};
export default CounterView;