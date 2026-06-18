import React from 'react'
import CarouselItem from "./CarouselItem"

const GenreSection = (props) => {
  return (
    <div>
        <p className="text-2xl">{props.content?.genre}</p>
        <div className="w-10 border border-primary-gold"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {
                props.content?.items?.map((contentItem)=>(
                    <CarouselItem setShowVideoOverlay={props.setShowVideoOverlay} setSelectedItem={props.setSelectedItem} item={contentItem} />
                ))
            }
        </div>
    </div>
  )
}

export default GenreSection