import React from 'react';
import axios from 'axios';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const getItems = async () => {
      const result = await axios.get('https://654f0f0e358230d8f0ccfb7e.mockapi.io/items');
      setItems(result.data);
    };

    getItems();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                id={pizza.id}
                title={pizza.title}
                imageUrl={pizza.imageUrl}
                types={pizza.types}
                sizes={pizza.sizes}
                price={pizza.price}
                category={pizza.category}
                rating={pizza.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
