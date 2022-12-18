import React from "react"

export default function useImage({characterInfo,itemSize, canvasSize, zoom, Fposition, character}){

  return React.useMemo(() => {

    if(window.innerWidth / 2 - itemSize[0] / 2 < characterInfo.x) character.attrs.character.x = window.innerWidth / 2 - itemSize[0] / 2
 

    const centerX = window.innerWidth / 2 - characterInfo.x
    const centerY = characterInfo.x + itemSize[0] / 2 > window.innerWidth / 2 ? window.innerHeight / 2 - characterInfo.y : window.innerHeight / 2 - characterInfo.y
    const intersectionX = ((Fposition - window.innerWidth / 2) * centerX)/(centerX - (Fposition - window.innerWidth / 2)) + window.innerWidth / 2 + itemSize[0] / 2
    const intersectionY1 = (centerY) * ( (Fposition - window.innerWidth / 2) / (centerX -  (Fposition - window.innerWidth / 2))) + window.innerHeight / 2
    const intersectionY2 = (centerY - itemSize[1]) * ( (Fposition - window.innerWidth / 2) / (centerX -  (Fposition - window.innerWidth / 2))) + window.innerHeight / 2
    const isReal = (intersectionX - window.innerWidth /2) > 0
    const imageHeight = intersectionY1 - intersectionY2
    const imageWidth = (itemSize[0] * imageHeight) / itemSize[1]
 
    return {
      centerX,
      centerY,
      intersectionY1,
      intersectionY2,
      intersectionX,
      isReal,
      imageWidth,
      imageHeight
    }

  },[characterInfo,itemSize, canvasSize, zoom])
 
}