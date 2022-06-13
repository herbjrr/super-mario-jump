const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    // setTimeout (função, tempo): tempo em que a função será executada
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    const loop = setInterval (() => {
        // deslocamento para esquerda
        const pipePosition = pipe.offsetLeft;
        // irá computar o pulo do Mario
        // o "+window" transforma o valor string de jump em number
        const marioPosition= +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {
            // a animação pára se o Mario encostar no tubo
            pipe.style.animation = 'none';
            // o tubo para na posição onde encostou
            pipe.style.left = `${pipePosition}px`;

            // a animação pára se o Mario encostar no tubo
            mario.style.animation = 'none';
            // o Mario para na posição onde encostou
            mario.style.bottom = `${marioPosition}px`;

            // altera a imagem quando o Mario encosta no tubo
            mario.src = './img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px'

            clearInterval(loop);
        }
    }, 10);
};


document.addEventListener('keydown', jump);