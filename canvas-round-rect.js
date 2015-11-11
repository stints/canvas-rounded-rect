function roundRect(ctx, x,y,width,height,radius, fill) {
  ctx.beginPath();
  ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI+Math.PI/2);
  ctx.lineTo(x + width - radius, y);
  ctx.arc(x + width - radius, y + radius, radius, Math.PI + Math.PI/2, 0);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI/2)
  ctx.lineTo(x + radius, y + height)
  ctx.arc(x + radius, y + height - radius, radius, Math.PI/2, Math.PI)
  ctx.lineTo(x , y + radius)

  if(fill) {
    ctx.fill()
  }

  ctx.stroke();
}
