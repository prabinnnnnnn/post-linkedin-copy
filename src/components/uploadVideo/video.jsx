import React from 'react'

export default function Video() {
  return (
    <div>
      <video width="100%" height="340" controls autoPlay className=' rounded-md'>
        <source src="demo.webm" type="video/webm"/>
      </video>
    </div>
  )
}
