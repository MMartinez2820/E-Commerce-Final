import React, { useEffect } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  return (

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.map(product => (
          <div key={product.id}>{product.title}</div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart