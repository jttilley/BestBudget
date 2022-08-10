import React from 'react';
import Categories from '../views/BudgetView';
import { personalCategories, businessCategories } from '../utils/allCategories';
import {Router, Route} from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  margin-left: 20%;
  margin-right: 20%;

  @media screen and (max-width: 768px){
    margin: 0px;
  }
`;

const Home = () => {
  let categories = personalCategories;
  // if localStorage has categories, use that
  let local = localStorage.getItem("categories");
  if (local) categories = JSON.parse(local);
  // console.log("🚀 ~ file: BudgetView.js ~ line 72 ~ Categories ~ local", local)
  // console.log("🚀 ~ file: BudgetView.js ~ line 72 ~ Categories ~ categories", categories)


  return (
    <Layout>
      <Categories categories={categories}/>    

    </Layout>
  )
}

export default Home;