import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import  Header  from './components/Header';

import { Home, Favorites } from './pages'; 

function App() {
  const [list,setList] = useState()
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list').then(({ data }) => {
      setList(data)
    });
  }, []);

  function addFav(id) {
    const card = list.find(el => el.id === id)
    if(card.hasOwnProperty('isFavorite')){
      card.isFavorite = !card.isFavorite
    }else{card.isFavorite = true}   
    const idx = list.findIndex(el => el.id === id)

    const newList = [ 
      ...list.slice(0,idx),
      card,
      ...list.slice(idx+1)
    ]

    setList(newList)
    
  }
  
  return (
    
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home list={list} addFav={addFav}/>} exact />
        <Route path="/favorites" render={() => <Favorites list={list.filter(({isFavorite}) => isFavorite === true)} addFav={addFav}/>} exact /> 



      </div>
    </div>
  );
}

export default App;
