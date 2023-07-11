import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import React from 'react'

export const LocationPin = ({ text }) => {
  return (
    <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
  )
}

