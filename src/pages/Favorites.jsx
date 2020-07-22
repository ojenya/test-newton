import React from 'react'
import  Card  from '../components/Card';


const Favorites = ({list,addFav}) => {

    return (
        <div className="container">
        <div className="card-columns">
          {list?list.map((el,i)=>(<Card key={i} {...el} addFav={addFav}/>)):<div className="fail"></div>}
        </div>
      </div>
    )
}

export default Favorites;
