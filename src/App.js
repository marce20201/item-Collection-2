import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemList/Item/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Contacto from './components/Contacto/Contacto';




function App() {
  return (
    
      <Router>
        <CartContextProvider>
          <div className="App">
            <NavBar/>
            <Switch>
                <Route exact path='/'>
                  <ItemListContainer greeting='Todos nuestros productos' item='item'/>
                </Route>
                <Route exact path='/category/:categoryId'> {/*"categoryId es un parametro dinamico que lo toma useParams() en ItemListContainer"*/}
                  <ItemListContainer/>
                </Route>
                <Route exact path='/item/:id'>
                  <ItemDetailContainer/>
                </Route>
                <Route exact path='/cart'>
                  <Cart/>
                </Route>
                <Route>
                  <Contacto/>
                </Route>
            </Switch>
            <Footer/>
            
          </div>
        </CartContextProvider>    
      </Router>
    
  );
}

export default App;
