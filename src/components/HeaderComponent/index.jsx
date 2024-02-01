import React from 'react'
import DarkModeToggle from './DarkModeToggle'
 import './index.css'
// import CartIcon from '../icons/CartIcon'
// import { useContext } from 'react'
// import CartContext from '../../services/Contexts/CartContext'
import CartDisplay from './CartDisplay'

const HeaderComponent = () => {
  // const [state, dispatch] = useContext(CartContext)
  // console.log(state)
  return (
    <div className='header'>
        <h1> E-commerce app</h1>
        <CartDisplay/>
      <DarkModeToggle/>
    </div>
  )
}

export default HeaderComponent