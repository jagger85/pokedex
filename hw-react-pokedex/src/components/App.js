import React, { Component } from 'react';
import PokeApi from './PokeApi';
import MainLayout from '../layouts/MainLayout';

class App extends Component{
  render() {
    return (
      <div>
      <MainLayout>
        <PokeApi/>
      </MainLayout>
      </div>
    )
  }
}
export default App;

