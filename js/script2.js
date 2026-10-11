document.addEventListener('DOMContentLoaded', function() {
    const mensaje = document.getElementById('mensaje');
    const btnSorpresa = document.getElementById('btnSorpresa');
    const fotos = document.querySelectorAll('.foto');

    const mensajes = [
        'no olvide que el día de hoy es un dia para celebrarte asi que hoy tu vales mucho mucho jsjs, bueno amigua estoy aqui para recordartelo por si se te olvida! ',
        'Este año tienes muchas bocas por cerrar jsjs, cumple todo todo que yo confio que puedes con todo eso y mas que tienes en mente',
        'Tambien quiero agradecerte por estar aqui, cada dia, realmente lo aprecio y si no fuera no estaria aqui, solo deseo lo mejor para ti, la solucion a un problema siempre esta en el mismo problema, a veces no hay que mirar hacia otro lado, sino que debes pensar en que haria alguien mas en tu lugar, somos mejores siendo consejeros hacia otros, si un dia no llego a estar para ti al final de todo este camino, no olvides esto, se que puedes cambiar todo para bien',
        'Quiero que aproveches este dia para abrazar a las personas que amas y sabes que te aman, abrazalos y bueno en mi caso solo abrazo a quienes quiero en momentos especiales, me gustaria no ser asi y hacerlo cada dia',
        'no dañes tu vida, estoy feliz de verte a ti y ver que despues de todo lo que has pasado eres alguien muy gentil, buena persona y respetuosa, no te digo que sigas asi, sino que busques un camino entre quien eres y que recibes diaa a dia, no es que seas mala para todos, simplemente ocupa tu tiempo en lo que importa, a lo que no suma no se le da atencion'
    ];

    let indice = 0;

    btnSorpresa.addEventListener('click', function() {
        indice = (indice + 1) % mensajes.length;
        mensaje.style.opacity = '0';
        mensaje.style.transform = 'translateY(15px)';
        setTimeout(function() {
            mensaje.textContent = mensajes[indice];
            mensaje.style.opacity = '1';
            mensaje.style.transform = 'translateY(0)';
        }, 250);
        lanzarConfeti();
        crearCorazones(12);
        crearGlobos(6);
        crearEstrellas(8);
    });

    fotos.forEach(function(foto) {
        foto.addEventListener('mouseenter', function() {
            const emojis = ['✨', '💖', '🎉', '🌟', '🎈'];
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const rect = foto.getBoundingClientRect();
            crearParticula(rect.left + rect.width / 2, rect.top + rect.height / 2, emoji);
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('.carta')) return;
        crearParticula(e.clientX, e.clientY, ['❤️', '💖', '✨', '🌸', '💫'][Math.floor(Math.random() * 5)]);
    });

    function crearParticula(x, y, contenido) {
        const p = document.createElement('div');
        p.classList.add('corazon');
        p.textContent = contenido;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.fontSize = (Math.random() * 18 + 16) + 'px';
        p.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        document.body.appendChild(p);
        setTimeout(function() { p.remove(); }, 5000);
    }

    function crearCorazones(cantidad) {
        const emojis = ['❤️', '💖', '💕', '💗', '💓', '🌸', '💝'];
        for (let i = 0; i < cantidad; i++) {
            setTimeout(function() {
                const c = document.createElement('div');
                c.classList.add('corazon');
                c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                c.style.left = Math.random() * 100 + 'vw';
                c.style.fontSize = (Math.random() * 22 + 16) + 'px';
                c.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(c);
                setTimeout(function() { c.remove(); }, 6500);
            }, i * 120);
        }
    }

    function crearGlobos(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            setTimeout(function() {
                const g = document.createElement('div');
                g.classList.add('globo');
                g.textContent = '🎈';
                g.style.left = Math.random() * 100 + 'vw';
                g.style.fontSize = (Math.random() * 25 + 28) + 'px';
                g.style.animationDuration = (Math.random() * 4 + 4) + 's';
                document.body.appendChild(g);
                setTimeout(function() { g.remove(); }, 8500);
            }, i * 250);
        }
    }

    function crearEstrellas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            setTimeout(function() {
                const e = document.createElement('div');
                e.classList.add('estrella');
                e.textContent = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
                e.style.left = Math.random() * 100 + 'vw';
                e.style.fontSize = (Math.random() * 18 + 18) + 'px';
                e.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(e);
                setTimeout(function() { e.remove(); }, 6500);
            }, i * 150);
        }
    }

    function lanzarConfeti() {
        const colores = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6FB5', '#C780FA', '#FFA500', '#00D9FF'];
        for (let i = 0; i < 70; i++) {
            setTimeout(function() {
                const cf = document.createElement('div');
                cf.classList.add('confeti');
                cf.style.left = Math.random() * 100 + 'vw';
                cf.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
                cf.style.width = (Math.random() * 8 + 5) + 'px';
                cf.style.height = (Math.random() * 8 + 5) + 'px';
                cf.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                cf.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
                cf.style.animationDelay = (Math.random() * 0.4) + 's';
                document.body.appendChild(cf);
                setTimeout(function() { cf.remove(); }, 5500);
            }, i * 25);
        }
    }

    setInterval(function() {
        crearCorazones(2);
        crearEstrellas(2);
    }, 7000);

    setTimeout(function() {
        lanzarConfeti();
        crearGlobos(8);
    }, 500);
});