import React from 'react'

const Menu = ({menu,setMenu, setZoom, setItemSize, itemSize,zoom, image, character, setCharacter,Fposition}) => {


  function sizeHandler(e){
 
    setItemSize([(itemSize[0] * e.target.value) / itemSize[1], Number(e.target.value)])
 
  }
 

  return (
    <div className="info">
     
      {menu ?
      <>
        <label htmlFor="zoom">Увеличение</label>
        <input id='zoom' type="range" max={25} min={6} value={zoom} onChange={e => setZoom(Number(e.target.value))} />

        <label htmlFor="size">Размер персонажа</label>
        <input type="range" id="size" max={350} min={40} value={setItemSize[0]} onChange={e => sizeHandler(e)} />
      
        <h3>{image.isReal ? 'Действительное' : 'Мнимое'}</h3>
        <h3>{image.isReal ? 'Перевернутое' : 'Прямое'}</h3>
        <h3>{Math.abs(Math.ceil(image.imageHeight)) == itemSize[1] ? 'Равное' : Math.abs(image.imageHeight) >= itemSize[1] ? 'Увеличенное' : 'Уменьшенное'}</h3>
        
        <button onClick={() => setMenu(!menu)}>Закрыть</button>
        
      </>

      : <button onClick={() => setMenu(!menu)}>Открыть</button>

    }
     
  </div>
  )
}

export default Menu