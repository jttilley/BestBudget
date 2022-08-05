import React from 'react';
import Categories from '../components/BudgetView';
import { personalCategories, businessCategories } from '../utils/allCategories';

const Home = () => {
  let categories = personalCategories;
  // if localStorage has categories, use that
  let local = localStorage.getItem("categories");
  if (local) categories = JSON.parse(local);
  // console.log("🚀 ~ file: BudgetView.js ~ line 72 ~ Categories ~ local", local)
  // console.log("🚀 ~ file: BudgetView.js ~ line 72 ~ Categories ~ categories", categories)


  return (
    <Categories categories={categories}/>    
  )
}

export default Home;