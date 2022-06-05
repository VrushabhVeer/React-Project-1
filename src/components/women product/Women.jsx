import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../women product/Women.module.css'

const Women = () => {

    const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:2323/womensData/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);


  return (
    <div className={styles.product}>

    <img src={product.image} />
    <p>{product.nameCls}</p>
    
    <div className={styles.priceBox}>
      <p>₹{product.price}</p>
      <p className={styles.striked}>₹{product.orginalPrice}</p>
    </div>

    <p className={styles.discount}>Discount {product.discount}</p>
    <button type="button" class="btn btn-secondary">Add To Cart</button>
  </div>
  )
}

export default Women;