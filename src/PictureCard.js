import React from 'react'

const PictureCard = ({imageUrl}) => {
  return (
      <div className="bg-cover w-full h-full" style={{backgroundImage: `url(${imageUrl})`}}/>
  )
}

export default PictureCard
