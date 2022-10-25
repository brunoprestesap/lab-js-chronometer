class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {

      this.currentTime++;

      if(printTimeCallback) {
        printTimeCallback();
      }
      
    }, 1000);
  }

  getMinutes() {
    const totalMinutes = Math.floor(this.currentTime / 60);
    return totalMinutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let number = String(value);

    if(number.length === 1) {
      number = `0${String(value)}`;
    }

    return number;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutos = this.computeTwoDigitNumber(this.getMinutes());
    const segundos = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutos}:${segundos}`;
  }
}

const relogio = new Chronometer();
relogio.computeTwoDigitNumber(9);