import React from "react"

export default function useCanvasSize(){

  const [canvasSize, setCanvasSize] = React.useState([window.innerWidth,window.innerHeight], [])

  React.useEffect(() => {
     
    window.addEventListener('resize', e => {
      
      setCanvasSize(() => [e.target.innerWidth, e.target.innerHeight])
 
    })

  },[])

  return canvasSize
}