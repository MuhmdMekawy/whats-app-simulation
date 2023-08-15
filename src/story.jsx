import React , { useEffect, useState} from 'react'

function Story({story}) {
  return (
    <React.Fragment>
      {story !== undefined && (
        <div className="story">
          <div className="image-s">
            <img src={story} alt="story" />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Story