// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me he preguntado", time: 6 },
  { text: "Dónde le puedo encontrar", time: 9 },
  { text: "Atento aguardo", time: 21 },
  { text: "Buscando alguna señal", time: 25 },
  { text: "Alguna señal", time: 27 },
  { text: "Mi sufrimiento ha acabado", time: 36 },
  { text: "Desde que veo tu mirar", time: 41 },
  { text: "Tanto que anduve penando", time: 42 },
  { text: "Y hoy me calma la ansiedad", time: 48 },
  { text: "Cómo me alegra tu tacto", time: 50 },
  { text: "Abrázame, abrázame fuerte", time: 56 },
  { text: "No me dejes, por favor", time: 60 },
  { text: "No me dejes, por favor", time: 63 },
  { text: "Corazón pardo", time: 70 },
  { text: "Por arriesgar y fallar", time: 73 },
  { text: "Sigue soñando", time: 83 },
  { text: "Que algo bueno llegará", time: 87 },
  { text: "Inténtalo ya", time: 89 },
  { text: "Mi sufrimiento ha acabado", time: 98 },
  { text: "Desde que veo tu mirar", time: 102 },
  { text: "Tanto que anduve penando", time: 105 },
  { text: "Y hoy me calma la ansiedad", time: 110 },
  { text: "Cómo me alegra tu tacto", time: 113 },
  { text: "Abrázame, abrázame fuerte", time: 119 },
  { text: "No me dejes, por favor", time: 122 },
  { text: "No me dejes, por favor", time: 126 },
  { text: "Abrázame, no me dejes", time: 130 },
  { text: "No me dejes, por favor", time: 135 },
  { text: "Abrázame, abrázame fuerte", time: 139 },
  { text: "Mi sufrimiento ha acabado", time: 142 },
  { text: "Tanto que anduve penando", time: 149 },
  { text: "Y hoy me calma la ansiedad", time: 154 },
  { text: "Cómo me alegra tu tacto", time: 158 },
  { text: "Abrázame, abrázame fuerte", time: 162 },
  { text: "No me dejes, por favor (abrázame)", time: 166 },
  { text: "No me dejes, por favor (abrázame)", time: 169 },
  { text: "No me dejes, por favor", time: 172 },
  { text: "No me dejes, por favor", time: 173 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);