import React, { useState, useEffect } from 'react';
import styles from './CarCatalogue.module.scss';

import { getAllCars } from '../../../redux/carsRedux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

import CarBox from '../../common/CarBox/CarBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { loadCars } from '../../../redux/carsRedux';
import { API_URL } from '../../../config';

const CarCatalogue = () => {
  const categories = useSelector(getAllCategories);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewport, setViewport] = useState(window.innerWidth);
  const [fade, setFade] = useState(false);
  const [rows, setRows] = useState(2);
  const [cars, setCars] = useState([]);
  console.log(cars);

  const dispatch = useDispatch();

  const fetchCars = () => {
    fetch(`${API_URL}/api/cars`)
      .then((res) => res.json())
      .then((res) => {
        setCars(res);
        dispatch(loadCars(res));
      });
  };

  useEffect(() => {
    fetchCars();
  }, [dispatch]);

  console.log(cars);

  const categoryCars = cars.filter((car) => car.category === activeCategory);
  let pagesCount = 0;
  if (activeCategory === 'all') {
    pagesCount = Math.ceil(cars.length / (itemsPerRow * rows));
  } else {
    pagesCount = Math.ceil(categoryCars.length / (itemsPerRow * rows));
  }

  const updateItemsPerRow = () => {
    if (viewport >= 1600) {
      setItemsPerRow(4);
      setRows(2);
    } else if (viewport >= 1220) {
      setItemsPerRow(3);
      setRows(3);
    } else if (viewport >= 992) {
      setItemsPerRow(2);
      setRows(2);
    } else if (viewport < 767) {
      setItemsPerRow(1);
      setRows(2);
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
    setActivePage(0);
    setFade(true);
    setActiveCategory(newCategory);
    setFade(false);
  };

  const nextPage = () => {
    if (activePage < pagesCount - 1) {
      setActivePage(activePage + 1);
    } else {
      setActivePage(0);
    }
  };
  const prevPage = () => {
    if (activePage === 0) {
      setActivePage(pagesCount - 1);
    } else {
      setActivePage(activePage - 1);
    }
  };

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <button
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          Page {i}
        </button>
      </li>,
    );
  }

  return (
    <>
      <div id="cars" className={styles.root}>
        <div className="container-fluid">
          <div className={styles.panelBar}>
            <div className="row no-gutters">
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
                        onClick={() => handleCategoryChange(item.id)}
                      >
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
          {activeCategory === 'all' ? (
            <div
              className={`${fade ? styles['fade-out'] : ''} ${
                styles['products-view']
              } row`}
            >
              {dots.length > 1 && (
                <>
                  <button className={styles.rightArrow} onClick={nextPage}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </button>
                  <button className={styles.leftArrow} onClick={prevPage}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </button>
                </>
              )}
              {cars
                .slice(
                  activePage * itemsPerRow * rows,
                  (activePage + 1) * itemsPerRow * rows,
                )
                .map((item) => (
                  <div key={item.id} className={`col-${12 / itemsPerRow}`}>
                    <CarBox {...item} />
                  </div>
                ))}
            </div>
          ) : (
            <div
              className={`${fade ? styles['fade-out'] : ''} ${
                styles['products-view']
              } row`}
            >
              {dots.length > 1 && (
                <>
                  <button className={styles.rightArrow} onClick={nextPage}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </button>
                  <button className={styles.leftArrow} onClick={prevPage}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </button>
                </>
              )}
              {categoryCars
                .slice(
                  activePage * itemsPerRow * rows,
                  (activePage + 1) * itemsPerRow * rows,
                )
                .map((item) => (
                  <div key={item.id} className={`col-${12 / itemsPerRow}`}>
                    <CarBox {...item} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CarCatalogue;
