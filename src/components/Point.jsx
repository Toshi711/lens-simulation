import React from 'react'
import { Stage, Layer, Star, Text,Rect, Shape} from 'react-konva';

const Point = ({x = window.innerWidth / 2 ,y = window.innerHeight / 2 - 3.6,text}) => {
  return (
    <div>
      
      <Text text={text} fontSize={25} y={y - 30} x={x}/>
      <Rect width={10} height={10} cornerRadius={5} y={y} x={x} fill='rgb(35, 44, 68)'/>
 
    </div>
  )
}

export default Point