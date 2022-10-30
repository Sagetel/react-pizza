import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Categories from './../components/Categories';
import SortPopup from './../components/sortPopup';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';

import { setCaregory, setSortBy } from './../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import LoadingPizzablock from './../components/PizzaBlock/LoadingPizzablock';



const categoryName = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

function Home() {

  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)
  const cartItems = useSelector(({ cart }) => cart.items)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = index => {
    dispatch(setCaregory(index))
  }
  const onSelectType = (type) => {
    dispatch(setSortBy(type))
  }

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryName} onClickItem={onSelectCategory} />
        <SortPopup activeSortType={sortBy} onClickSortType={onSelectType} items={[
          { name: 'популярности', type: 'popular' },
          { name: 'цене', type: 'price' },
          { name: 'алфавиту', type: 'name' }]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ? items.map((obj, index) =>
            <PizzaBlock
              onClickAddPizza={handleAddPizza}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              key={`${obj.name}_${index}`}
              {...obj} />) : Array(8).fill(0).map((_, index) => < LoadingPizzablock key={index} />)
        }
      </div>
    </div>
  )
}

export default Home