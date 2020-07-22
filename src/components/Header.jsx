import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  
return(
<div className="header">
    <div className="container">
       
        <Link to="/">
            <div>
                <h1>Images</h1>
            </div>
        </Link>

        <div className="header__separator"></div>

        <Link to="/favorites">
            <div>
                <h1>Favorites</h1>
            </div>
        </Link>


    </div>
</div>

);  
    }
    
    export default Header;