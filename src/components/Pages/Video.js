import React from 'react'
import ReactPlayer from 'react-player'
import './videos.css'
function Video () {
  return (
    <div className='App'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=E-BIaJc7pq0'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default Video