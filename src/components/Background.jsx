import React from 'react'
import { Stage, Layer, Star, Text,Rect, Shape} from 'react-konva';
import Point from './Point';
 
const Background = React.memo(({Fposition}) => {
  const F2R = Fposition + (Fposition - window.innerWidth / 2)
  const F2L = window.innerWidth - (Fposition + (Fposition - window.innerWidth / 2))
  return (
    <>
        <Rect width={window.innerWidth} height={2} fill={'rgb(35, 44, 68)'} y={window.innerHeight / 2}/>
        <Rect height={window.innerHeight} width={2} fill={'rgb(35, 44, 68)'} x={window.innerWidth / 2}/>
 
        <Point text="F" x={window.innerWidth - Fposition + 5}/>
        <Point text="F" x={Fposition - 5}/>

        <Point text="2F" x={F2R -5}/>
        <Point text="2F" x={F2L + 5} />

      </>
  )
})

export default Background