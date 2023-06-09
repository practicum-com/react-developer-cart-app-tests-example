import React from 'react';
import { useSelector } from 'react-redux';
import styles from './checkout-address.module.css';

export const CheckoutAddress = ({ extraClass }) => {
  const { deliveryForm, deliveryMethod } = useSelector(state => ({
    deliveryForm: state.delivery.deliveryForm,
    deliveryMethod: state.delivery.deliveryMethods.find(
      method => method.id === state.delivery.selectedDeliveryId
    )
  }));
  return (
    <ul className={`${styles.container} ${extraClass}`}>
      <li className={styles.textbox}>
        <h3 className={styles.title}>Shipping information:</h3>
        <p className={styles.text}>{deliveryForm.address}</p>
        <div className={styles.addressInfo}>
          <p className={styles.text}>
            <span className={styles.span}>Apt, suite, etc: </span>
            {deliveryForm.unitNumber}
          </p>
          <p className={styles.text}>
            <span className={styles.span}>Entry code: </span>
            {deliveryForm.intercom}
          </p>
          <p className={styles.text}>
            <span className={styles.span}>Floor: </span>
            {deliveryForm.floor}
          </p>
        </div>
        <p className={styles.text}>{deliveryForm.name}</p>
        <p className={styles.text}>{deliveryForm.phone}</p>
      </li>
      <li className={styles.textbox}>
        <h3 className={styles.title}>Shipping option:</h3>
        <p className={styles.text}>{deliveryMethod.text}</p>
        <p className={styles.text}>{deliveryMethod.duration}</p>
      </li>
    </ul>
  );
};
