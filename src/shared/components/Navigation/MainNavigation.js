import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../UIElements/Backdrop';
import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => setDrawerIsOpen(true);
  const closeDrawerHandler = () => setDrawerIsOpen(false);
  return (
    <>
      {drawerIsOpen &&
      <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-button"
          onClick={openDrawerHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
