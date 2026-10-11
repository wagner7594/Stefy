document.addEventListener('DOMContentLoaded', function() {
    const IMAGENES_IZQ = [
        '../img/e16e244fd9bd10495947e05d6da81ce7.jpg',
        '../img/c5ae39987b1a70d8f7c17d8b8a8790cc.jpg',
        '../img/a1d43881a1056c73f6f2477d96cd8dd5.jpg'
    ];

    const IMAGENES_DER = [
        '../img/dcc40f2769102328eed4abac83770555.jpg',
        '../img/ceabf5b9ab58eb3f82b07da28ae8e7e3.jpg',
        '../img/33bb76f5502d45cd7104f155bbca87e7.jpg'
    ];

    const FOTO_VOLADORA = [
        '../img/e3df3b6caf9cc0882893ddadf64a6f3c.jpg',
        '../img/d38d38871c6e0914ea6e0b0d597f318f.jpg',
        '../img/dcc40f2769102328eed4abac83770555.jpg'
    ];

    const MENSAJES = [
        'Feliz cumpleaños amigotaaaaaaaa<br>Hoy quiero desearte un día lleno felicidad, muchotes abrazos y todo lo bonito que mereces. Que este nuevo año de vida venga cargado de bendiciones y animos y todo lo bueno, sueños cumplidos, gracias por existir y ser la felicidad de muchos de los dias de tantas personas',
        'Sé que has pasado por cosas difíciles, la mitad o la mayoria, quiza un 95% no tiene solucion en tus manos, porque nunca fue tu problema, te han pasado muchas cosas y no te he conocido, nunca se conoce a alguien jamas en la vida, pero se que las decisiones que has tomado en toda tu vida puede que te causen muchas emociones, buenas o malas y es cuando la gente llega a hablar que piensas que lo que dicen tiene sentido, alguien dice cualquier cosa y el daño te lo haces tu, si alguien llega a decirte algo que es una ofensa pero no llega a tener sentido porque es ridiculo pues no le das esa importancia que le das a alguien que dice una ofensa pero tu le das el peso de una experiencia pasada, a veces es mejor dejar de escuchar al mundo, nadie te conoce. eres perfecta siendo tú ',
        'Ahora es tiempo de mirar hacia adelante, es dificil pero acercate a lo que es mejor para ti, vas a sentir que te alejas de personas con las que frecuentas y talvez sea asi pero cuando estes es ese lugar y momento debes pensar siempre vas a salir, saldras de ahi y un dia desearas haberlo hecho antes, te deseo lo mas bonito mi querida amiguaa, Felicidadessssssssssss'
    ];

    const imgVoladora = document.getElementById('imgVoladora');
    const fotoIzq = document.getElementById('fotoIzq');
    const fotoDer = document.getElementById('fotoDer');
    const ladoIzq = document.querySelector('.lado-izq');
    const ladoDer = document.querySelector('.lado-der');
    const mensaje = document.getElementById('mensaje');
    const btnContinuar = document.getElementById('btnContinuar');
    const btnRegresar = document.getElementById('btnRegresar');

    let indice = 0;
    let animando = false;

    function iniciarAnimacion() {
        if (animando) return;
        animando = true;

        imgVoladora.src = FOTO_VOLADORA[indice];
        imgVoladora.classList.remove('volar');
        void imgVoladora.offsetWidth;
        imgVoladora.classList.add('volar');

        ladoIzq.classList.remove('visible');
        ladoDer.classList.remove('visible');

        setTimeout(function() {
            fotoIzq.src = IMAGENES_IZQ[indice];
            fotoDer.src = IMAGENES_DER[indice];
            ladoIzq.classList.add('visible');
            ladoDer.classList.add('visible');

            imgVoladora.style.opacity = '0';
            setTimeout(function() {
                imgVoladora.classList.remove('volar');
                imgVoladora.style.right = '-250px';
                imgVoladora.style.opacity = '0';
                animando = false;
            }, 400);
        }, 2100);
    }

    function cambiarContenido(nuevoIndice) {
        if (animando) return;

        mensaje.classList.add('saliendo');

        setTimeout(function() {
            indice = nuevoIndice;
            mensaje.innerHTML = MENSAJES[indice];
            actualizarBotones();

            mensaje.classList.remove('saliendo');
            mensaje.classList.add('entrando');

            setTimeout(function() {
                mensaje.classList.remove('entrando');
            }, 50);

            fotoIzq.style.opacity = '0';
            fotoDer.style.opacity = '0';

            setTimeout(function() {
                fotoIzq.src = IMAGENES_IZQ[indice];
                fotoDer.src = IMAGENES_DER[indice];
                fotoIzq.style.opacity = '1';
                fotoDer.style.opacity = '1';
                lanzarConfeti();
                crearCorazones(8);
            }, 300);

        }, 400);
    }

    function actualizarBotones() {
        btnRegresar.disabled = indice === 0;
        btnContinuar.disabled = indice === MENSAJES.length - 1;
    }

    btnContinuar.addEventListener('click', function() {
        if (indice < MENSAJES.length - 1) {
            cambiarContenido(indice + 1);
        }
    });

    btnRegresar.addEventListener('click', function() {
        if (indice > 0) {
            cambiarContenido(indice - 1);
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('.cuadro-central')) return;
        crearCorazon(e.clientX, e.clientY);
    });

    function crearCorazon(x, y) {
        const c = document.createElement('div');
        c.classList.add('corazon');
        c.textContent = ['❤️', '💖', '✨', '🌸', '💫', '💕'][Math.floor(Math.random() * 6)];
        c.style.left = x + 'px';
        c.style.top = y + 'px';
        c.style.fontSize = (Math.random() * 18 + 16) + 'px';
        c.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        document.body.appendChild(c);
        setTimeout(function() { c.remove(); }, 5000);
    }

    function crearCorazones(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            setTimeout(function() {
                const c = document.createElement('div');
                c.classList.add('corazon');
                c.textContent = ['❤️', '💖', '💕', '🌸', '✨'][Math.floor(Math.random() * 5)];
                c.style.left = Math.random() * 100 + 'vw';
                c.style.fontSize = (Math.random() * 20 + 16) + 'px';
                c.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(c);
                setTimeout(function() { c.remove(); }, 6500);
            }, i * 120);
        }
    }

    function lanzarConfeti() {
        const colores = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6FB5', '#C780FA', '#FFA500'];
        for (let i = 0; i < 50; i++) {
            setTimeout(function() {
                const cf = document.createElement('div');
                cf.classList.add('confeti');
                cf.style.left = Math.random() * 100 + 'vw';
                cf.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
                cf.style.width = (Math.random() * 8 + 5) + 'px';
                cf.style.height = (Math.random() * 8 + 5) + 'px';
                cf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                cf.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
                document.body.appendChild(cf);
                setTimeout(function() { cf.remove(); }, 5500);
            }, i * 30);
        }
    }

    mensaje.innerHTML = MENSAJES[0];
    actualizarBotones();
    iniciarAnimacion();
});