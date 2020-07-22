import React,{useState,useEffect} from 'react';

function Card(props) {
  const {addFav,download_url,id,author,isFavorite} = props
  const classHeart = isFavorite? "card__favorite red" : "card__favorite"
  return (
   
      <div className="card" onDoubleClick={() => addFav(id)}>

        <img className='card__img' src={download_url}/>
        <div className="card__desc">
          <div className="card__author">{author}</div>
          <button onClick={() => addFav(id)}><span className={classHeart}>❤</span></button>
        </div>
      </div>
    


  );
}


export default Card;


