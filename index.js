import Stopwatch from './classes/Stopwatch.js';
import Controller from './classes/Controller.js';

function main() {
  const stopwatch = new Stopwatch();
  stopwatch.update();

  const stopwatchController = new Controller();

  document.getElementById('startBtn').addEventListener('click', (e) => {
    stopwatchController.start(e);
  });

  document.getElementById('pausedBtn').addEventListener('click', (e) => {
    stopwatchController.paused(e);
  });

  document.getElementById('stopBtn').addEventListener('click', (e) => {
    stopwatchController.stop(e);
  });
}

window.onload = () => {
  main();
};
