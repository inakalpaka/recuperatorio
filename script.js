
function matriz() {
    const alto = document.documentElement.clientHeight;
    const ancho = document.documentElement.clientWidth;
    const colores = ['red', 'blue', 'green', 'black', 'white', 'púrple', 'yellow'];

    for (let i = 0; i < 10; i++) {
        for (let e = 0; e < 10; e++) {
            const cuadrado = document.createElement('div'); //asigna un elemento div a la variable cuadrado
            cuadrado.classList.add('cuadrado'); //añade una propiedad en css para el div cuadrado
            cuadrado.style.width = ancho / 10; //establece 
            cuadrado.style.height = alto / 10;
            cuadrado.style.left = i * ancho / 10;
            cuadrado.style.top = e * alto / 10;
            cuadrado.style.backgroundColor = colores[Math.floor(Math.random() * 7)];
            cuadrado.addEventListener('click', () => {
                if (cuadrado.style.backgroundColor == 'blue') {
                    cuadrado.style.backgroundColor = 'red';
                } else if (cuadrado.style.backgroundColor == 'red') {
                    cuadrado.style.backgroundColor = 'green'
                } else if (cuadrado.style.backgroundColor == 'green') {
                    cuadrado.style.backgroundColor = 'blue'
                }

            });
            document.body.appendChild(cuadrado);
        }
    }

}

matriz();