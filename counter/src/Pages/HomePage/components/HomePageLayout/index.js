import React from 'react';
import {Link} from "react-router-dom";
import styles from "../HomePageView/styles.module.scss"

//import {ROUTES} from "../../../../routes/routeNames";

const HomePageLayout = () => {
    return (
        // <div>
        //     {Object.entries(ROUTES).map(([routeName, path]) => (
        //         <Link className={styles.links} to={path} key={path}>
        //             <button className={styles.butPages}>{routeName}</button>
        //         </Link>
        //     ) )
        //     }
        // </div>
        <div>
            <Link className={styles.links} to="/counter">
                <button className={styles.butPages}>Counter</button>
            </Link>
        </div>
    );
};

export default HomePageLayout;