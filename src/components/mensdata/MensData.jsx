import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../mensdata/MensData.module.css';

const MensData = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch("http://localhost:2323/mensData")
      let data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  return (
    <div className={styles.products}>
      {products.map((p) => (

        <div className={styles.productDiv} key={p.id}>

          <Link to={`/mensData/${p.id}/${p.nameCls}`}>
            <img src={p.image} />
          </Link>

          <p>{p.nameCls}</p>

          <div className={styles.priceBox}>
            <p>₹ {p.price}</p>
            <p className={styles.striked}>{p.orginalPrice}</p>
          </div>

          <p className={styles.discount}>Discount {p.discount}</p>
        </div>
      ))}
    </div>
  )
}

export default MensData;