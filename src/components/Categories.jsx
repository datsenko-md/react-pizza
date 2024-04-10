import React from 'react';
import cn from 'classnames';

function Categories() {
  const categories = [
    { id: 1, name: 'Все' },
    { id: 2, name: 'Овощные' },
    { id: 3, name: 'Вегетарианские' },
    { id: 4, name: 'Гриль' },
    { id: 5, name: 'Острые' },
    { id: 6, name: 'Закрытые' },
  ];

  const [active, setActive] = React.useState(categories[0].id);

  const renderItem = ({ id, name }) => (
    <li
      key={id}
      className={cn({ active: id === active })}
      onClick={() => setActive(id)}
    >
      {name}
    </li>
  );

  return (
    <div className="categories">
      <ul>
        {categories.map(renderItem)}
      </ul>
    </div>
  );
}

export default Categories;
