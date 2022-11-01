import './styles/index.scss';
import five from './js/helper';
import img from './images/img';
import sound from './sounds/sound.mp3';

console.log(five);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const body = document.querySelector('body');
body.appendChild(wrapper);

const imgBox = document.createElement('div');
imgBox.classList.add('imgBox');
imgBox.style.background = `url(${img.cafe})`;
imgBox.style.backgroundPosition = 'center';
imgBox.style.backgroundRepeat = 'no-repeat';
imgBox.style.backgroundSize = 'contain';
wrapper.appendChild(imgBox);

const text = document.createElement('div');
text.classList.add('text');
text.textContent = 'Hello World';
wrapper.appendChild(text);

const audio = new Audio(sound); // создает обьект музыки
audio.controls = 'true';
wrapper.appendChild(audio);

