import React from 'react'
import { Stage, Layer, Star, Text,Rect, Shape} from 'react-konva';
import toBorder from '../utils/toBorder';
  
const Line = ({x, y,fill,stroke,strokeWidth = 1}) => {
  return (
    <>
      <Shape
            sceneFunc={(context, shape) => {

              const x1 = x
              const y1 = y
              const x2 = window.innerWidth / 2
              const y2 = window.innerHeight / 2
              const left = 0
              const top = 0
              const right = window.innerWidth
              const bottom = window.innerHeight


              context.beginPath();
              context.moveTo(x1,y1);
               
              context.lineTo(window.innerWidth / 2, window.innerHeight / 2);
              context.strokeStyle={fill};
              context.stroke();

               
              const pos = toBorder(x1,y1,x2,y2,left,top,right,bottom)
 
              context.moveTo(x2,y2)
              context.lineTo(pos.x,pos.y)
              context.strokeStyle={fill};
              context.stroke();
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            stroke={fill}
            strokeWidth={strokeWidth}
            
          />    
    </>
  )
}

export default Line