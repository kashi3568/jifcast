import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import * as en from './string/en';
import PlayList from './components/PlayList/PlayList';
import {Switch, Route} from 'react-router-dom';
import Link2 from './components/Link2/Link2';

function App() {
  return (
    <div >
      <Header brandName={en.JIFCAST}>
      </Header>
      <Switch>
      <Route path='/link2' component={Link2} />  
      <Route path='/' exact component={PlayList} />
      </Switch>      
    </div>
  );
}

export default App;
