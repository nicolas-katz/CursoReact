import React from 'react'

const CustomImage = ({img, name}) => (
  <div>
    <img src={img} alt={name} />
  </div>
)

export default CustomImage