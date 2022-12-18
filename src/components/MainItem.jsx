import React from 'react'
import Character from './Character';

const MainItem = React.forwardRef((props, ref) => {
 
  return (
    <>
      <Character src={props.img} {...props} ref={ref}/>
    </> 
    
  )
  })

export default MainItem