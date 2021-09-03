import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css'
import Home from './pages/home/Home';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import UserList from './pages/userlist/UserList';
import User from './pages/User/User';
import NewUser from './pages/Newuser/NewUser';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/products/Product';
import NewPorduct from './pages/NewPorduct/NewPorduct';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewPorduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
