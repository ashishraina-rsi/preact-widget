import habitat from 'preact-habitat';
import Widget from './components/widget';

function init() {
  let counter = habitat(Widget);
  counter.render({
    inline: true,
    clean: false
  });
}

init();
