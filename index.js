let animation;
let isCircle = false;
const box = document.querySelector('.box');
const container = document.querySelector('.container');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// Obtener posiciones aleatorias dentro del contenedor
function getRandomPositionInContainer() {
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  const maxX = container.clientWidth - boxWidth;
  const maxY = container.clientHeight - boxHeight;

  return {
    x: Math.random() * maxX,
    y: Math.random() * maxY
  };
}

// Función que realiza una sola animación y la repite recursivamente
function animateBox() {
  const pos = getRandomPositionInContainer();
  animation = anime({
    targets: box,
    translateX: pos.x,
    translateY: pos.y,
    backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    duration: 1000,
    easing: 'easeInOutSine',
    complete: animateBox // llama de nuevo para seguir animando en otra dirección
  });
}

// Iniciar animación
function startAnimation() {
  if (animation) animation.pause();
  animateBox();
}

// Detener animación
function stopAnimation() {
  if (animation) animation.pause();
}

// Alternar entre círculo y cuadrado al hacer clic
box.addEventListener('click', () => {
  isCircle = !isCircle;
  box.style.borderRadius = isCircle ? '50%' : '10px';
});

// Botones
startBtn.addEventListener('click', startAnimation);
stopBtn.addEventListener('click', stopAnimation);
