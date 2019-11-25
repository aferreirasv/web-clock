class Clock{
    constructor(hr,mn,sc){
      this.hour = {
        time: hour(),
        angle: null,
        diameter: 150,
        text: null,
        color: [
          random(255),
          random(255),
          random(255)
        ]
      }
      this.minute = {
        time: minute(),
        angle: null,
        diameter: 175,
        text: null,
        color: [
          random(255),
          random(255),
          random(255)
        ]
      }
      this.second = {
        time: second(),
        angle: null,
        diameter: 200,
        text: null,
        color: [
          random(255),
          random(255),
          random(255)
        ]
      }
    }

    getAngles(){
      this.hour.angle = map(this.hour.time % 12, 0, 12, 0, 360)
      this.minute.angle = map(this.minute.time, 0, 60, 0 ,360)
      this.second.angle = map(this.second.time, 0, 60, 0, 360)
    }

    drawHourArc(){
      stroke(this.hour.color[0],this.hour.color[1],this.hour.color[2])
      strokeWeight(4)
      noFill()
      arc(0,0,this.hour.diameter, this.hour.diameter, 0, this.hour.angle)
    }

    drawMinuteArc(){
      stroke(this.minute.color[0],this.minute.color[1],this.minute.color[2])
      strokeWeight(4)
      noFill()
      arc(0,0,this.minute.diameter, this.minute.diameter, 0, this.minute.angle)
    }

    drawSecondArc(){
      stroke(this.second.color[0],this.second.color[1],this.second.color[2])
      strokeWeight(4)
      noFill()
      arc(0,0,this.second.diameter, this.second.diameter, 0, this.second.angle)
    }

    drawText(){
      stroke(255)
      strokeWeight(1)
      rotate(90)
      text(`${this.hour.text}:${this.minute.text}:${this.second.text}`, -20,5)  
    }

    updateTime(){
      this.hour.time = hour()
      this.minute.time = minute()
      this.second.time = second()
    }
    
    updateText(){
      this.hour.text = this.hour.time.toString().match(/^\d{1}$/) ? `0${this.hour.time}`: this.hour.time
      this.minute.text = this.minute.time.toString().match(/^\d{1}$/) ? `0${this.minute.time}`: this.minute.time
      this.second.text = this.second.time.toString().match(/^\d{1}$/) ? `0${this.second.time}`: this.second.time
    }
  }