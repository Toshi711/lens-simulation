import React from 'react'
import { Stage, Layer, Star, Text,Rect, Shape} from 'react-konva';
import toBorder from '../utils/toBorder';
const FocusLine = ({x, y,fill,stroke,strokeWidth = 1, Fposition}) => {
  return (
    <div>
      
      <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(x, y);
              context.lineTo(window.innerWidth / 2, y);
 
              context.strokeStyle={fill};
              context.stroke();
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="white"
            stroke={fill}
            strokeWidth={1}
            
          />    


      
          <Shape
            sceneFunc={(context, shape) => {

              const x1 = window.innerWidth / 2
              const y1 = y +2
              const x2 = Fposition 
              const y2 = window.innerHeight / 2 
              const left = 0
              const top = 0
              const right = window.innerWidth
              const bottom = window.innerHeight



              context.beginPath();
              context.moveTo(window.innerWidth / 2,y);
              context.lineTo(Fposition , window.innerHeight / 2 );
              context.strokeStyle={fill}
       
              
              const pos = toBorder(x1,y1,x2,y2,left,top,right,bottom)
 
              context.moveTo(x2,y2)
              context.lineTo(pos.x,pos.y)
              context.strokeStyle={fill};
              context.stroke();
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="white"
            stroke={fill}
            strokeWidth={1}
          />      
    </div>
  )
}

export default FocusLine