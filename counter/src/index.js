import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import Routes from "./routes/Routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>, /* <React.StrictMode> - следит за всеми библ, которые показываются,и в процессе развития то, что устаревает, предупреждает обновить или удалить*/
    document.getElementById('root')
);



