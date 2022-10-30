import React, { useState } from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {
  // const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    // setActiveItem(index);
    onClickItem(index)
  }
  return (
    <div className="categories">
      <ul>
        <li onClick={() => { onSelectItem(null) }} className={activeCategory === null ? 'active' : ''}>Все</li>
        {items && items.map((item, index) => <li onClick={() => { onSelectItem(index) }} className={activeCategory === index ? 'active' : ''} key={`${item}_${index}`}>{item}</li>)}
      </ul>
    </div>
  )
})

export default Categories