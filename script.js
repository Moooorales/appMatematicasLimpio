function verificarRespuesta(opcion, correcta) {
    const resultado = document.getElementById('resultado');
    if (opcion === correcta) {
        resultado.textContent = "¡Muy bien! 🎉";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "¡Inténtalo de nuevo! 😅";
        resultado.style.color = "red";
    }
}

function mostrarJuego(tipo) {
    const juegos = {
        suma: [
            { pregunta: "2 + 3", respuesta: 5 },
            { pregunta: "1 + 4", respuesta: 5 },
            { pregunta: "3 + 3", respuesta: 6 }
        ],
        resta: [
            { pregunta: "5 - 2", respuesta: 3 },
            { pregunta: "7 - 4", respuesta: 3 },
            { pregunta: "9 - 3", respuesta: 6 }
        ],
        multiplicacion: [
            { pregunta: "2 × 3", respuesta: 6 },
            { pregunta: "4 × 1", respuesta: 4 },
            { pregunta: "3 × 3", respuesta: 9 }
        ],
        division: [
            { pregunta: "6 ÷ 2", respuesta: 3 },
            { pregunta: "8 ÷ 2", respuesta: 4 },
            { pregunta: "9 ÷ 3", respuesta: 3 }
        ]
    };

    const contenedor = document.getElementById("juego");
    contenedor.innerHTML = "<h2>" + tipo.charAt(0).toUpperCase() + tipo.slice(1) + "</h2>";
    juegos[tipo].forEach(j => {
        let opciones = [j.respuesta, j.respuesta + 1, j.respuesta - 1];
        opciones = [...new Set(opciones)].slice(0, 3);
        contenedor.innerHTML += `
            <div class="juego">
                <p><strong>${j.pregunta} = ?</strong></p>
                ${opciones.map(o => `<button onclick="verificarRespuesta(${o}, ${j.respuesta})">${o}</button>`).join("")}
                <div class="respuesta" id="resultado"></div>
            </div>
        `;
    });
}
