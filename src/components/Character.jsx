import React from "react";
import { Stage, Layer, Star, Text,Rect, Shape, Image} from 'react-konva';
export default class Character extends React.Component {

  state = {
    image: null,
  };

  constructor(props){
    super(props)
    
  }

  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
     
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    this.setState({
      image: this.image,
    });
  };
  render() {
     
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        rotation={this.props.rotation}
        image={this.state.image}
        ref={(node) => {
          if(this.props.setCharacter) this.props.setCharacter(node)
          this.imageNode = node;
        }}
        width={this.props.width}
        height={this.props.height}
        draggable={this.props.draggable}
        onDragMove={this.props.onDragMove}
        opacity={this.props.opacity}
        {...this.props}
      />
    );
  }
}
