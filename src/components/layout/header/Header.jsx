import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../../providers/ModalProvider'
import { ModalNavigate } from '../../providers/ModalProvider'
import { ReservTableModal } from '../../shared/reservTable/ReservTableModal'
import { NavigateModal } from '../../shared/navigationModal/NavigateModal'
import "./style.css"
import { LeftLogo } from '../../shared/leftLogo/LeftLogo'
 


export const Header = () => {
  const {showReservTableModal, handleShowReservTableModal, handleHideReservTableModal} = useContext(ModalContext)
  const {showNavigateModal, handleHideNavigateModal} = useContext(ModalNavigate)

  return (
    <header className='header'>
      {showReservTableModal && (
        <ReservTableModal
        handleHideReservTableModal={handleHideReservTableModal}
        />
      )}
      {showNavigateModal && (
        <NavigateModal
        handleHideNavigateModal={handleHideNavigateModal}
        />
      )}
      <ul className='headerMenu'>
        <div className='headerLink'>
          <li><Link to="/foodMenu">Меню</Link></li>
          <li><Link to="/delivery">Доставка</Link></li>
          <li><Link to="/">Оплата</Link></li>
          <button onClick={handleShowReservTableModal} className='reservBtn'>Бронювання</button>
        </div>
      </ul>
    </header>
  )
}
