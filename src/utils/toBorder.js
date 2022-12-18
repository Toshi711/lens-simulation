
  function toBorder(x1, y1, x2, y2, left, top, right, bottom){
    var dx, dy, py, vx, vy;
    vx = x2 - x1;
    vy = y2 - y1;
    dx = vx < 0 ? left : right;
    dy = py = vy < 0 ? top : bottom;
    if(vx === 0){
        dx = x1;
    }else if(vy === 0){
        dy = y1;
    }else{
        dy = y1 + (vy / vx) * (dx - x1);
        if(dy < top || dy > bottom){
            dx = x1 + (vx / vy) * (py - y1);
            dy = py;
        }
    }
    return {x : dx, y : dy}
}

export default toBorder