import React from 'react';
import { Provider } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { GamePage } from './pages/gamePage';
import { OrderPage } from './pages/orderPage';
import { Header } from './components/header';
import { store } from './redux';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/app/:title' element={<GamePage />}></Route>
        <Route exact path='/app/order' element={<OrderPage />}></Route>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
