import React, { useState } from 'react'
import "../style.css"
import Menu from '../Api';
import MenuCard from '../MenuCard';

const Restaurant = () => {
  const [menudata, setmenudata] = useState(Menu);

  const filteritems = (category) => {
    const updateList = Menu.filter((curr) => {
      return curr.category === category;
    });
    setmenudata(updateList);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={() => filteritems("breakfast")}>Breakfast</button>
          <button className='btn-group__item' onClick={() => filteritems("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() => filteritems("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() => filteritems("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={() => {setmenudata(Menu)}}>All</button>
        </div>
      </nav>
      <div className='main_div'>
        {
          menudata.map((val, index) => {
            return <MenuCard image={val.image} category={val.category} description={val.description} key={val.id} id={val.id} name={val.name} />
          })
        }
      </div>
    </>
  )
}

export default Restaurant;
