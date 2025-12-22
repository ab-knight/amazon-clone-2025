import React from 'react'
import Layout from '../../Components/Layout/Layout';
import classes from './Payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { useContext, useState } from 'react';
import ProductCard from '../../Components//Product/ProductCard'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { red } from '@mui/material/colors';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { display } from '@mui/system';

function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null)
  const handleChange = (e) =>{
    console.log(e);
    e.error?.message? setCardError(e.error?.message): setCardError("")
  };
  

  return (
    <Layout>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem})</div>

      {/* payment method */}
      <section className={classes.payment}>
        <div>
          {/* address */}
          <div className={classes.flex}>
            <h3>Delivery Address</h3>
            <div>
              <div>{user?.email}</div>
              <div>123 React Lane</div>
              <div>Chicago, IL</div>
            </div>
          </div>

          <hr />

          {/* product */}
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              {basket?.map((item) => (
                <ProductCard product={item} flex={true} />
              ))}
            </div>
          </div>

          <hr />

          {/* card form */}
          <div className={classes.flex}>
            <h3>Payment methods</h3>
            <div className={classes.payment_card_container}>
              <div className={classes.payment_details}>
                <form action="">
                    {cardError && <small style={{color:"red"}}>{cardError}</small>}
                  <CardElement onChange={handleChange} />

                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex", gap: "10px"}}>
                      Total order | <CurrencyFormat amount= {total}/>
                    </span>
                  </div>
                  <button>
                    pay Now
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment