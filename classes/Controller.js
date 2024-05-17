import Stopwatch from './Stopwatch.js';
export default class Controller extends Stopwatch {
  constructor() {
    super();
  }

  toggleBtn(clickedEl) {
    Array.from(document.getElementsByClassName('active')).forEach((el) =>
      el.classList.remove('active')
    );
    clickedEl.classList.add('active');
  }

  start(e) {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = new Date().getTime() - this.elapsedTime;
      this.timeInterval = setInterval(() => {
        this.update();
        this.start();
      }, 1000);

      this.toggleBtn(e.target);
    }
  }

  paused(e) {
    if (this.isRunning) {
      this.isRunning = false;
      this.elapsedTime = new Date().getTime() - this.startTime;
      clearInterval(this.timeInterval);
      this.toggleBtn(e.target);
    }
  }

  stop(e) {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timeInterval);
      this.elapsedTime = 0;
      this.startTime = 0;
      this.toggleBtn(e.target);
    }
    this.timePlacement.textContent = '00:00:00';
  }
}
