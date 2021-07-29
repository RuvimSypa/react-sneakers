import { useEffect, useState} from "react";
import { Route } from 'react-router-dom'
import axios from "axios";
import AppContext from "./context";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./components/pages/Home";

import './App.scss';
import Favorites from "./components/pages/Favorites";
import Orders from "./components/pages/Orders";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    async function fetchData() {
      try {
        const cartItemsResponse = await axios.get('/cart');
        const favoritesResponse = await axios.get('/favorites');
        const itemsResponse = await axios.get('/items');

        setIsLoading(false)
        setCartItems([...cartItemsResponse.data]);
        setFavorites([...favoritesResponse.data])
        setItems([...itemsResponse.data]);
      } catch (err) {
        console.error(err)
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (item) => {
    try {
      const findItem = cartItems.find((cartItem) => +cartItem.parentId === +item.id);
      if (findItem) {
        setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => +cartItem.parentId !== +item.id));
        await axios.delete(`/cart/${findItem.id}`);
      } else {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
        const { data } = await axios.post('/cart', item);
        setCartItems((prevCartItems) =>
          prevCartItems.map((prevCartItem) => {
            if (prevCartItem.parentId === data.parentId) {
              return {
                ...prevCartItem,
                id: data.id,
              }
            }
            return prevCartItem;
          })
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  const onRemoveItemInCart = async (id) => {
    try {
      await axios.delete(`/cart/${id}`)
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id))
    } catch (err) {
      console.error(err)
    }

  }

  const onAddToFavorites = (item) => {
    try {
      if (favorites.find((favorite) => +favorite.id === +item.id)) {
        axios.delete(`/favorites/${item.id}`);
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => +favorite.id !== +item.id))
      } else {
        axios
          .post('/favorites', item)
          .then(({ data }) => {
            setFavorites((prevFavorites) => [...prevFavorites, { ...item, id: data.id }])
          })
      }
    } catch (err) {
      console.error(err)
    }

  }

  const onChangeInputSearch = ({ target }) => {
    setSearchInput(target.value)
  }

  const isItemAdded = (id) =>
    cartItems.some((cartItem) => +cartItem.parentId === +id)

  return (
    <AppContext.Provider value={{
      cartItems,
      items,
      favorites,
      isItemAdded,
      onAddToFavorites,
      onAddToCart,
      setOpenCart,
      setCartItems
    }}>
      <div className="wrapper">
        <Drawer
          onClose={() => setOpenCart(false)}
          items={cartItems}
          onRemove={onRemoveItemInCart}
          opened={openCart}
        />
        <Header onOpenCart={() => setOpenCart(true)}/>
        <Route path='/' exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onChangeInputSearch={onChangeInputSearch}
            isLoading={isLoading}
          />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
