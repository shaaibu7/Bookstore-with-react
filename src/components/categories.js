import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checktheStatus } from '../redux/categories/categoriesSlice';
import styles from './styles/Category.module.css';

const Categories = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);
  const categoryHandle = () => {
    setDisplay(false);
    dispatch(checktheStatus());
  };
  return (
    <div className={styles.button}>
      { display && <button className={styles.btn} type="button" onClick={categoryHandle}>Check status</button>}
      {
        display ? (<p />) : (
          <p>Under Construction</p>
        )
      }
    </div>
  );
};

export default Categories;
