function setup(){
  createCanvas(400,400)
  angleMode(DEGREES)
  clock = new Clock()
}

function draw(){
  background(40)
  translate(width/2 ,height/2)
  rotate(-90)
  clock.updateTime()
  clock.updateText()
  clock.getAngles()
  clock.drawHourArc()
  clock.drawMinuteArc()
  clock.drawSecondArc()
  clock.drawText()
}