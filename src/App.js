import React from 'react'
import './App.scss'
import { Stage, Layer, Star, Text,Rect, Shape} from 'react-konva';
import Background from './components/Background';
import Line from './components/Line';
import MainItem from './components/MainItem';
import toBorder from './utils/toBorder';
import FocusLine from './components/FocusLine';
import Character from './components/Character';
import img from './1644165003_1-abrakadabra-fun-p-pein-naruto-v-polnii-rost-1.png'
import Menu from './components/Menu';
import useImage from './hooks/useImage';
import useCanvasSize from './hooks/canvasSize';

export default function App() {

  const [character, setCharacter] = React.useState(null)
  const [itemSize, setItemSize] = React.useState([80,170])
  const defaultPosition = React.useMemo(() => [window.innerWidth / 4,window.innerHeight / 2 - itemSize[0] * 2 - 10], [])
  const [characterInfo, setCharacterInfo] = React.useState({
    defaultPosition,
    x: defaultPosition[0] + itemSize[0] / 2,
    y: defaultPosition[1],
  })
  const [menu,setMenu] = React.useState(true)
  const [zoom, setZoom] = React.useState(8)
  const canvasSize = useCanvasSize()
  const Fposition = React.useMemo(() => ( window.innerWidth / 2 + window.innerWidth / zoom ), [canvasSize,zoom])
  const image = useImage({characterInfo,itemSize,canvasSize,zoom, Fposition, character})
 
  function dragMoveHandler(e){
     
    let x = e.target._lastPos.x + itemSize[0] / 2
    let y = e.target._lastPos.y
 
    if(x + itemSize[0] / 2 > window.innerWidth / 2){
      character.attrs.x = window.innerWidth / 2 - itemSize[0]
      x = window.innerWidth / 2 - itemSize[0] / 2
    }

    setCharacterInfo({...characterInfo, x,y})
  }


  return (
    <>
  
    <Menu menu={menu} Fposition={Fposition} setMenu={setMenu} setZoom={setZoom} setItemSize={setItemSize} itemSize={itemSize} zoom={zoom} image={image} character={characterInfo} setCharacter={setCharacterInfo}/>

    <Stage width={canvasSize[0]} height={canvasSize[1]}  >

      <Layer>

          <Background Fposition={Fposition}/>
        
          <FocusLine x={characterInfo.x} y={characterInfo.y} fill='#BF4343' Fposition={Fposition}/>
          <FocusLine x={characterInfo.x} y={characterInfo.y + itemSize[1]} fill='#5C67FF' Fposition={Fposition}/>

          <Line x={characterInfo.x} y={characterInfo.y} fill='#BF4343'/>
          <Line x={characterInfo.x} y={characterInfo.y + itemSize[1]} fill="#5C67FF"/>
 
          <Character opacity={0.7} src={img} x={image.intersectionX} y={image.isReal ? image.intersectionY1 : image.intersectionY2} rotation={image.isReal ? 180 : 0} width={image.imageWidth} height={image.imageHeight}/>
          <MainItem
            x={character ? character.attrs.character.x - itemSize[0] / 2 : defaultPosition[0]}
            y={character ? character.attrs.character.y : characterInfo.defaultPosition[1]}
            width={itemSize[0]}
            height={itemSize[1]}
            draggable
            onDragMove={dragMoveHandler}
            character={characterInfo}
            setCharacter={setCharacter}
            img={img}
          />
 
      </Layer>
    </Stage>
    </>
  );
};