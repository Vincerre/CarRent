import React, { useState, useEffect } from 'react';
import styles from './CarCatalogue.module.scss';

import { getAllCars } from '../../../redux/carsRedux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

import CarBox from '../../common/CarBox/CarBox';
import SwipeableComponent from '../../features/SwipeableComponent/SwipeableComponent';

const CarCatalogue = () => {
  const cars = useSelector(getAllCars);
  const categories = useSelector(getAllCategories);

  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('standard');
  const [viewport, setViewport] = useState(window.innerWidth);
  const [fade, setFade] = useState(false);
  const [rows, setRows] = useState(2);

  const categoryCars = cars.filter((car) => car.category === activeCategory);
  const pagesCount = Math.ceil(categoryCars.length / (itemsPerRow * 2));

  const updateItemsPerRow = () => {
    if (viewport >= 1230) {
      setItemsPerRow(4);
      setRows(2);
    } else if (viewport >= 992) {
      setItemsPerRow(3);
      setRows(3);
    } else if (viewport >= 767) {
      setItemsPerRow(2);
      setRows(4);
    } else if (viewport < 767) {
      setItemsPerRow(2);
      setRows(4);
    }
  };

  const handleResize = () => {
    setViewport(window.innerWidth);
    updateItemsPerRow();
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  const handlePageChange = (newPage) => {
    setActivePage(newPage);
  };

  const handleCategoryChange = (newCategory) => {
    setFade(true);
    setActiveCategory(newCategory);
    setFade(false);
  };

  const handleSwipeLeft = () => {
    if (activePage < pagesCount - 1) {
      setActivePage((prevState) => prevState.activePage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activePage > 0) {
      setActivePage((prevState) => prevState.activePage - 1);
    }
  };

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <button
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}>
          Page {i}
        </button>
      </li>
    );
  }

  return (
    <SwipeableComponent
      leftAction={handleSwipeRight}
      rightAction={handleSwipeLeft}>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.panelBar}>
            <div className="row no-gutters align-items-end">
              <div className={`col-auto ${styles.heading}`}>
                <h3>Our Cars</h3>
              </div>
              <div className={`col ${styles.menu}`}>
                <ul>
                  {categories.map((item) => (
                    <li key={item.id}>
                      <a
                        className={
                          item.id === activeCategory ? styles.active : ''
                        }
                        onClick={() => handleCategoryChange(item.id)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`col-auto ${styles.dots}`}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div
            className={`${fade ? styles['fade-out'] : ''} ${
              styles['products-view']
            } row`}>
            {categoryCars
              .slice(
                activePage * itemsPerRow * rows,
                (activePage + 1) * itemsPerRow * rows
              )
              .map((item) => (
                <div key={item.id} className={`col-${12 / itemsPerRow}`}>
                  <CarBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </SwipeableComponent>
  );
};

export default CarCatalogue;
