document.addEventListener('DOMContentLoaded', function() {
    const mensaje = document.getElementById('mensaje');
    const textoOriginal = 'Holaaaa amigaaaaa espero tengas un maravilloso dia el dia de hoy<br>se que es muydificil para tiii pero pero te deseo lo mejor';
    const textoNuevo = 'Feliz cumpleaños amigotaaaaaaaa!!! <br>Que todos tus deseos se cumplan y tengas un dia increibleeee el dia de hoy y que no te piquen los mosquitos, toma mucha agua ';

    let cambiado = false;
    let timeoutId;

    function iniciarCambio() {
        timeoutId = setTimeout(function() {
            if (!cambiado) {
                mensaje.innerHTML = textoNuevo;
                mensaje.style.color = '#fff9c4';
                mensaje.style.transform = 'scale(1.05)';
                mensaje.style.transition = 'all 0.5s ease';
                cambiado = true;
                lanzarConfeti();
                crearCorazones(15);
                crearGlobos(5);
            }
        }, 5000);
    }

    function revertirCambio() {
        clearTimeout(timeoutId);
        if (cambiado) {
            mensaje.innerHTML = textoOriginal;
            mensaje.style.color = '#fff';
            mensaje.style.transform = 'scale(1)';
            cambiado = false;
        }
    }

    iniciarCambio();

    mensaje.addEventListener('click', function() {
        if (cambiado) {
            revertirCambio();
            iniciarCambio();
        } else {
            clearTimeout(timeoutId);
            mensaje.innerHTML = textoNuevo;
            mensaje.style.color = '#fff9c4';
            mensaje.style.transform = 'scale(1.05)';
            mensaje.style.transition = 'all 0.5s ease';
            cambiado = true;
            lanzarConfeti();
            crearCorazones(20);
            crearGlobos(8);
        }
    });

    document.addEventListener('click', function(e) {
        crearCorazon(e.clientX, e.clientY);
    });

    function crearCorazon(x, y) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.textContent = ['❤️', '💖', '💕', '💗', '💓', '🌸', '✨'][Math.floor(Math.random() * 7)];
        corazon.style.left = x + 'px';
        corazon.style.top = y + 'px';
        corazon.style.fontSize = (Math.random() * 20 + 15) + 'px';
        corazon.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(corazon);
        setTimeout(function() {
            corazon.remove();
        }, 4000);
    }

    function crearCorazones(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            setTimeout(function() {
                const corazon = document.createElement('div');
                corazon.classList.add('corazon');
                corazon.textContent = ['❤️', '💖', '💕', '💗', '💓', '🌸', '✨', '🎈'][Math.floor(Math.random() * 8)];
                corazon.style.left = Math.random() * 100 + 'vw';
                corazon.style.fontSize = (Math.random() * 25 + 15) + 'px';
                corazon.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(corazon);
                setTimeout(function() {
                    corazon.remove();
                }, 6000);
            }, i * 150);
        }
    }

    function crearGlobos(cantidad) {
        const colores = ['🎈', '🎈', '🎈', '🎈', '🎈'];
        for (let i = 0; i < cantidad; i++) {
            setTimeout(function() {
                const globo = document.createElement('div');
                globo.classList.add('globo');
                globo.textContent = '🎈';
                globo.style.left = Math.random() * 100 + 'vw';
                globo.style.fontSize = (Math.random() * 30 + 25) + 'px';
                globo.style.animationDuration = (Math.random() * 4 + 4) + 's';
                document.body.appendChild(globo);
                setTimeout(function() {
                    globo.remove();
                }, 8000);
            }, i * 300);
        }
    }

    function lanzarConfeti() {
        const colores = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6FB5', '#C780FA', '#FFA500'];
        for (let i = 0; i < 60; i++) {
            setTimeout(function() {
                const confeti = document.createElement('div');
                confeti.classList.add('confeti');
                confeti.style.left = Math.random() * 100 + 'vw';
                confeti.style.top = '-20px';
                confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
                confeti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                confeti.style.width = (Math.random() * 8 + 5) + 'px';
                confeti.style.height = (Math.random() * 8 + 5) + 'px';
                confeti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                confeti.style.animationDelay = (Math.random() * 0.5) + 's';
                document.body.appendChild(confeti);
                setTimeout(function() {
                    confeti.remove();
                }, 5000);
            }, i * 30);
        }
    }

    const btnSiguele = document.getElementById('btnSiguele');
    if (btnSiguele) {
        btnSiguele.addEventListener('mouseenter', function() {
            btnSiguele.textContent = '¡Siguele! ';
        });
        btnSiguele.addEventListener('mouseleave', function() {
            btnSiguele.textContent = 'Siguele';
        });
    }

    setInterval(function() {
        crearCorazones(3);
    }, 8000);
});