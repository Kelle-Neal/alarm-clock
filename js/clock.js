class Clock{
    constructor(timeDiv, alarmDiv, alarmTime) {
    this.timeDiv = timeDiv
    this.alarmDiv = alarmDiv
    this.alarmTime = alarmTime
    this.alarmAlert = querySelector(this.alarmDiv + (' #alarm_Alert'))

    let tim = document.querySelector(this.timeDiv)
    let t = new Date()
    let time = t.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    tim.innerHTML = time

    this.setAlarm()

    setInterval(this.updateTime.bind(this), 1000)
    }

updateTime(){
    let tim = document.querySelector(this.timeDiv)
    let t = new Date()
    let time = t.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    tim.innerHTML = time  
    
    if(time == this.alarmTime) {
        this.alertAlarm()
    }

    setAlarm();
        const alarm = document.querySelector(this.alarmDiv + 'span')
        alarm.innerText = 'Alarm (${this.alarmTime})'
        

    alertAlarm();
        this.alarmAlert.currentTime = 0;
        document.querySelector(this.alarmDiv + 'button').style.display = 'block'
        document.querySelector(this.alarmDiv + 'button').addEventListener('click', () => this.turnOffAlarm(this.alarmAlert))
        

    turnOffAlarm(alarmAlert);
        this.alarmAlert.currentTime = 0
        document.querySelector(this.alarmDiv + 'button').style.display = 'none'
        
}}

new Clock( '#time', '#alarm', '06:13:00 PM')