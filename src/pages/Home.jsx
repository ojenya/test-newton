import React from 'react';
import  Card  from '../components/Card';

function Home({list,addFav}) {
  console.log(list)
  return (
   
    <div className="container">
  
      <div className="card-columns">
        {list?list.map((el,i)=>(<Card key={i} {...el} addFav={addFav}/>)):<div className="fail"></div>}
      </div>
    </div>
  );
}

export default Home;