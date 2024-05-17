export default class Stopwatch {
  constructor() {
    this.isRunning = false;

    this.timePlacement = document.getElementsByClassName('stopwatch__time')[0];
    this.timeInterval = null;
    this.startTime = 0;
    this.elapsedTime = 0;
  }

  update() {
    const pad = (unit) => (('0' + unit).length > 2 ? unit : '0' + unit);

    this.elapsedTime = new Date().getTime() - this.startTime;

    let seconds = pad(Math.floor((this.elapsedTime / 1000) % 60));
    let minutes = pad(Math.floor((this.elapsedTime / (1000 * 60)) % 60));
    let hours = pad(Math.floor((this.elapsedTime / (1000 * 60 * 60)) % 60));

    if (this.startTime > 0)
      this.timePlacement.textContent = `${hours}:${minutes}:${seconds}`;
  }
}
