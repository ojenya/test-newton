import React from 'react';

function Card(props) {
  const {addFav,download_url,id,author,isFavorite} = props
  const classHeart = isFavorite? "card__favorite red" : "card__favorite"
  return (
    <div className="card" onDoubleClick={() => addFav(id)}>
      <img className="card__img" src={download_url} alt={'image by ' + author}/>

      <div className="card__author">{author}
        <button onClick={() => addFav(id)}><span className={classHeart}>❤</span></button>
      </div>

    </div>


  );
}


export default Card;


