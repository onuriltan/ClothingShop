import React from 'react'
import './card_icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CardIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
export default CardIcon
