//lupa
document.addEventListener("DOMContentLoaded", function() {
    // Estructura de datos simulada para las canciones
    const songs = [
        { id: 1, title: "La Modelo", image: "La Modelo.jpg", audio: "La Modelo.mp3" },
        { id: 2, title: "Diva Virtual", image: "diva virtual Don omar.jpg", audio: "Diva virtual Don omar.mp3" },
        { id: 3, title: "Manicomio", image: "manicomio Cosculluela.jpg", audio: "Cosculluela Manicomio Video Oficial .mp3" },
        { id: 4, title: "Diles", image: "Diles Bad Bunny Ozuna Farruko Arcangel engo Flow.jpg", audio: "Diles Bad Bunny Ozuna Farruko Arcangel engo Flow.mp3" },
        { id: 5, title: "Candy", image: "Plan B Candy.jpg", audio: "Plan B Candy Official Audio .mp3" },
        { id: 6, title: "Se Preparo", image: "se preparo.jpg", audio: "Ozuna Se Prepar Video Oficial Odisea.mp3" },
        { id: 7, title: "Oye BB", image: "oye bb.jpg", audio: "Omar Montes Nicky Jam Oye BB Official Video .mp3" },
        { id: 8, title: "La Nota", image: "La Nota.jpg", audio: "La Nota MTZ Manuel Turizo x Rauw Alejandro x Myke Towers Video Oficial.mp3" },
        { id: 9, title: "Si No Te Quisiera", image: "Si No Te Quisiera.jpg", audio: "Juan Magan Si No Te Quisiera feat Belinda Lapiz Conciente Audio .mp3" },
        { id: 10, title: "La Curiosidad", image: "La Curiosidad.jpg", audio: "La Curiosidad Jay Wheeler Myke Towers.mp3" },
        { id: 11, title: "Si Tu Novio Te Deja Sola", image: "Si Tu Novio Te Deja Sola.jpg", audio: "Si Tu Novio Te Deja Sola J Balvin Bad Bunny.mp3" },
        { id: 12, title: "Danza Kuduro", image: "Danza Kuduro.jpeg", audio: "Danza Kuduro Don Omar.mp3" },
        { id: 13, title: "La Rompe Corazones", image: "La Rompe Corazones.jpg", audio: "La Rompe Corazones Daddy Yankee Ozuna.mp3" },
        { id: 14, title: "La Despedida", image: "La Despedida.jpg", audio: "Daddy Yankee La Despedida.mp3" },
        { id: 15, title: "PERRO NEGRO", image: "PERRO NEGRO.jpg", audio: "Bad Bunny Feid PERRO NEGRO 8D AUDIO.mp3" },
        { id: 16, title: "Es un secreto", image: "Es un secreto.jpg", audio: "Plan B Es un secreto Official Video.mp3" }
        // Agrega más canciones según sea necesario
    ];   
    document.querySelector(".searchBar button").addEventListener("click", function() {
        const searchTerm = document.querySelector(".searchBar input").value.trim(); // Obtener el término de búsqueda y eliminar los espacios en blanco al principio y al final
        if (searchTerm !== "") {
            // Buscar la canción por nombre o parte del nombre
            const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));
            if (filteredSongs.length > 0) {
                // Mostrar los resultados de la búsqueda
                const modal = document.getElementById("myModal");
                const searchResultDiv = document.getElementById("searchResult");
                searchResultDiv.innerHTML = `<h3>Resultados de búsqueda:</h3>`;
                filteredSongs.forEach(song => {
                    const songDiv = document.createElement("div");
                    songDiv.classList.add("searchedSong");
                    songDiv.innerHTML = `
                        <img src="${song.image}" alt="${song.title}">
                        <h4>${song.title}</h4>
                        <audio controls>
                            <source src="${song.audio}" type="audio/mp3">
                            Your browser does not support the audio element.
                        </audio>
                    `;
                    searchResultDiv.appendChild(songDiv);
                });
                modal.style.display = "block";
    
                // Cerrar el modal al hacer clic en <span> (x)
                const span = document.getElementsByClassName("close")[0];
                span.onclick = function() {
                    modal.style.display = "none";
                }
    
                // Cerrar el modal al hacer clic en cualquier parte fuera del modal
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            } else {
                alert("No se encontró ninguna canción con ese nombre.");
            }
        } else {
            alert("Ingrese un término de búsqueda válido.");
        }
    });
});    

document.addEventListener("DOMContentLoaded", function() {
    // Datos simulados de cantantes más escuchados
    const topArtists = ["Artista 1", "Artista 2", "Artista 3"];

    // Obtener el contenedor de cantantes más escuchados
    const topArtistsContainer = document.querySelector(".topArtists ul");

    // Crear elementos de lista para cada cantante más escuchado y agregarlos al contenedor
    topArtists.forEach(function(artist) {
        const listItem = document.createElement("li");
        listItem.textContent = artist;
        topArtistsContainer.appendChild(listItem);
    });

    // Agregar event listeners para los elementos de la lista de cantantes más escuchados
    const topArtistsListItems = document.querySelectorAll(".topArtists ul li");
    topArtistsListItems.forEach(function(artist) {
        artist.addEventListener("click", function() {
            // Mostrar una alerta con el nombre del cantante seleccionado
            alert("Cantante seleccionado: " + artist.textContent);
        });
    });

    // Datos simulados de cantantes recomendados
    const recommendedArtists = ["Artista Recomendado 1", "Artista Recomendado 2", "Artista Recomendado 3"];

    // Obtener el contenedor de cantantes recomendados
    const recommendedArtistsContainer = document.querySelector(".recommendedArtists ul");

    // Crear elementos de lista para cada cantante recomendado y agregarlos al contenedor
    recommendedArtists.forEach(function(artist) {
        const listItem = document.createElement("li");
        listItem.textContent = artist;
        recommendedArtistsContainer.appendChild(listItem);
    });

    // Agregar event listeners para los elementos de la lista de cantantes recomendados
    const recommendedArtistsListItems = document.querySelectorAll(".recommendedArtists ul li");
    recommendedArtistsListItems.forEach(function(artist) {
        artist.addEventListener("click", function() {
            // Mostrar una alerta con el nombre del cantante recomendado seleccionado
            alert("Cantante recomendado seleccionado: " + artist.textContent);
        });
    });

    // Agregar event listeners para los elementos de la sección "Playlists recomendadas"
    const recommendedPlaylistsItems = document.querySelectorAll(".recommendedGrid .playlistItem");
    recommendedPlaylistsItems.forEach(function(playlist) {
        playlist.addEventListener("click", function() {
            // Mostrar una alerta con el nombre de la playlist recomendada seleccionada
            alert("Playlist recomendada seleccionada: " + playlist.querySelector("h3").textContent);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const playlists = [
            { id: 1, title: "La Modelo", image: "La Modelo.jpg", audio: "La Modelo.mp3" },
            { id: 2, title: "Diva Virtual", image: "diva virtual Don omar.jpg", audio: "Diva virtual Don omar.mp3" },
            { id: 3, title: "Manicomio", image: "manicomio Cosculluela.jpg", audio: "Cosculluela Manicomio Video Oficial .mp3" },
            { id: 4, title: "Diles", image: "Diles Bad Bunny Ozuna Farruko Arcangel engo Flow.jpg", audio: "Diles Bad Bunny Ozuna Farruko Arcangel engo Flow.mp3" },
            { id: 5, title: "Candy", image: "Plan B Candy.jpg", audio: "Plan B Candy Official Audio .mp3" },
            { id: 6, title: "Se Preparo", image: "se preparo.jpg", audio: "Ozuna Se Prepar Video Oficial Odisea.mp3" },
            { id: 7, title: "Oye BB", image: "oye bb.jpg", audio: "Omar Montes Nicky Jam Oye BB Official Video .mp3" },
            { id: 8, title: "La Nota", image: "La Nota.jpg", audio: "La Nota MTZ Manuel Turizo x Rauw Alejandro x Myke Towers Video Oficial.mp3" },
            { id: 9, title: "Si No Te Quisiera", image: "Si No Te Quisiera.jpg", audio: "Juan Magan Si No Te Quisiera feat Belinda Lapiz Conciente Audio .mp3" },
            { id: 10, title: "La Curiosidad", image: "La Curiosidad.jpg", audio: "La Curiosidad Jay Wheeler Myke Towers.mp3" },
            { id: 11, title: "Si Tu Novio Te Deja Sola", image: "Si Tu Novio Te Deja Sola.jpg", audio: "Si Tu Novio Te Deja Sola J Balvin Bad Bunny.mp3" },
            { id: 12, title: "Danza Kuduro", image: "Danza Kuduro.jpeg", audio: "Danza Kuduro Don Omar.mp3" },
            { id: 13, title: "La Rompe Corazones", image: "La Rompe Corazones.jpg", audio: "La Rompe Corazones Daddy Yankee Ozuna.mp3" },
            { id: 14, title: "La Despedida", image: "La Despedida.jpg", audio: "Daddy Yankee La Despedida.mp3" },
            { id: 15, title: "PERRO NEGRO", image: "PERRO NEGRO.jpg", audio: "Bad Bunny Feid PERRO NEGRO 8D AUDIO.mp3" },
            { id: 16, title: "Es un secreto", image: "Es un secreto.jpg", audio: "Plan B Es un secreto Official Video.mp3" }
            // Puedes seguir agregando más canciones aquí
        ];

    const recommendedPlaylistsContainer = document.getElementById("recommendedPlaylists");

    playlists.forEach(function(playlist) {
        const playlistItem = document.createElement("div");
        playlistItem.classList.add("playlistItem");

        const img = document.createElement("img");
        img.src = playlist.image;
        img.alt = playlist.name;

        const h3 = document.createElement("h3");
        h3.textContent = playlist.name;

        const audioPlayer = document.createElement("audio");
        audioPlayer.controls = true;

        const source = document.createElement("source");
        source.src = playlist.audioFile;
        source.type = "audio/mpeg";

        audioPlayer.appendChild(source);

        playlistItem.appendChild(img);
        playlistItem.appendChild(h3);
        playlistItem.appendChild(audioPlayer);

        recommendedPlaylistsContainer.appendChild(playlistItem);
    });
});

//premium
document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar la selección de plan
    function handlePlanSelection(planId) {
        const selectedPlan = document.getElementById(planId);

        // Simplemente cambia el texto del plan actual
        document.querySelector(".planActual").innerHTML = `<h2>Plan Actual</h2>
                                                            <p>Has seleccionado el plan: ${selectedPlan.querySelector("h3").textContent}</p>`;
    }

    // Obtener todos los cuadros de planes
    const planBoxes = document.querySelectorAll(".planBox");

    // Agregar event listener para cada cuadro de plan
    planBoxes.forEach(function(planBox) {
        planBox.addEventListener("click", function() {
            handlePlanSelection(planBox.id);
        });
    });
});

//restaura
document.addEventListener("DOMContentLoaded", function() {
    // Agregar event listener para el formulario de restauración de contraseña
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener el valor del correo electrónico introducido por el usuario
        const email = document.getElementById("email").value;

        // Validar el correo electrónico (puedes añadir tu propia lógica de validación aquí)
        if (isValidEmail(email)) {
            // Si el correo electrónico es válido, puedes realizar las acciones necesarias, como enviar una solicitud al servidor para restaurar la contraseña
            alert("Se ha enviado una solicitud para restaurar la contraseña al correo electrónico: " + email);
        } else {
            // Si el correo electrónico no es válido, mostrar un mensaje de error
            alert("Por favor, introduzca una dirección de correo electrónico válida.");
        }
    });
});

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


//biblioteca
document.addEventListener("DOMContentLoaded", function() {
    let playlists = ["Alexis", "Kimberly"];
  
    // Función para mostrar las playlists en la página
    function showPlaylists() {
        const playlistList = document.getElementById("playlistList");
        playlistList.innerHTML = ""; // Limpiar la lista antes de mostrar
  
        playlists.forEach((playlist, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = playlist;
  
            // Crear un botón de eliminar
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", function() {
                deletePlaylist(index); // Llama a la función para eliminar la playlist
            });
  
            // Agregar el botón de eliminar al elemento de la lista
            listItem.appendChild(document.createElement("br")); // Agrega un salto de línea
            listItem.appendChild(deleteButton); // Agregar el botón de eliminar al elemento de la lista
  
            playlistList.appendChild(listItem);
        });
    }
  
    // Función para eliminar una playlist
    function deletePlaylist(index) {
        playlists.splice(index, 1); // Elimina la playlist del arreglo
        showPlaylists(); // Vuelve a mostrar la lista actualizada
    }
  
    // Mostrar las playlists al cargar la página
    showPlaylists();
  
    // Agregar evento al formulario para crear una nueva playlist
    document.getElementById("createPlaylistForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario
  
        const playlistName = document.getElementById("playlistName").value;
        if (playlistName) {
            playlists.push(playlistName); // Agregar la nueva playlist al arreglo
            showPlaylists(); // Volver a mostrar la lista actualizada
            document.getElementById("playlistName").value = ""; // Limpiar el campo de entrada
        }
  
        return false; // Evitar que el formulario se envíe y recargue la página
    });
  });
  
//inici

document.addEventListener("DOMContentLoaded", function() {
    console.log("El DOM ha sido cargado"); // Verifica si el evento DOMContentLoaded se está disparando correctamente

    const audio = document.getElementById('audio');
    console.log("Elemento de audio:", audio); // Verifica si el elemento de audio se está seleccionando correctamente

    const playPauseButton = document.getElementById('playPause');
    console.log("Botón de reproducción/pausa:", playPauseButton); // Verifica si el botón de reproducción/pausa se está seleccionando correctamente

    const prevButton = document.getElementById('prevSong');
    console.log("Botón de canción anterior:", prevButton); // Verifica si el botón de canción anterior se está seleccionando correctamente

    const nextButton = document.getElementById('nextSong');
    console.log("Botón de siguiente canción:", nextButton); // Verifica si el botón de siguiente canción se está seleccionando correctamente

    // Estructura de datos simulada para las canciones
    const songs = [
        { id: 1, title: "La Modelo", image: "La Modelo.jpg", audio: "La Modelo.mp3" },
        { id: 2, title: "Diva Virtual", image: "diva virtual Don omar.jpg", audio: "Diva virtual Don omar.mp3" },
        { id: 3, title: "Manicomio", image: "manicomio Cosculluela.jpg", audio: "Cosculluela Manicomio Video Oficial .mp3" },
        { id: 4, title: "Diles", image: "Diles Bad Bunny Ozuna Farruko Arcangel engo Flow.jpg", audio: "Diles Bad Bunny Ozuna Farruko Arcangel engo Flow.mp3" },
        { id: 5, title: "Candy", image: "Plan B Candy.jpg", audio: "Plan B Candy Official Audio .mp3" },
        { id: 6, title: "Se Preparo", image: "se preparo.jpg", audio: "Ozuna Se Prepar Video Oficial Odisea.mp3" },
        { id: 7, title: "Oye BB", image: "oye bb.jpg", audio: "Omar Montes Nicky Jam Oye BB Official Video .mp3" },
        { id: 8, title: "La Nota", image: "La Nota.jpg", audio: "La Nota MTZ Manuel Turizo x Rauw Alejandro x Myke Towers Video Oficial.mp3" },
        { id: 9, title: "Si No Te Quisiera", image: "Si No Te Quisiera.jpg", audio: "Juan Magan Si No Te Quisiera feat Belinda Lapiz Conciente Audio .mp3" },
        { id: 10, title: "La Curiosidad", image: "La Curiosidad.jpg", audio: "La Curiosidad Jay Wheeler Myke Towers.mp3" },
        { id: 11, title: "Si Tu Novio Te Deja Sola", image: "Si Tu Novio Te Deja Sola.jpg", audio: "Si Tu Novio Te Deja Sola J Balvin Bad Bunny.mp3" },
        { id: 12, title: "Danza Kuduro", image: "Danza Kuduro.jpeg", audio: "Danza Kuduro Don Omar.mp3" },
        { id: 13, title: "La Rompe Corazones", image: "La Rompe Corazones.jpg", audio: "La Rompe Corazones Daddy Yankee Ozuna.mp3" },
        { id: 14, title: "La Despedida", image: "La Despedida.jpg", audio: "Daddy Yankee La Despedida.mp3" },
        { id: 15, title: "PERRO NEGRO", image: "PERRO NEGRO.jpg", audio: "Bad Bunny Feid PERRO NEGRO 8D AUDIO.mp3" },
        { id: 16, title: "Es un secreto", image: "Es un secreto.jpg", audio: "Plan B Es un secreto Official Video.mp3" }
        // Puedes seguir agregando más canciones aquí
    ];
    

    // Verifica si la estructura de datos de las canciones se está inicializando correctamente
    console.log("Canciones:", songs);

    let currentSongIndex = 0; // Índice de la canción actual

    // Función para cargar la canción actual
    function loadCurrentSong() {
        const currentSong = songs[currentSongIndex];
        console.log("Canción actual:", currentSong); // Verifica si la canción actual se está cargando correctamente
        audio.src = currentSong.audio;
        // Aquí podrías también mostrar la imagen de la canción en algún lugar de la interfaz
    }

    // Cargar la primera canción al cargar la página
    loadCurrentSong();

    // Función para reproducir o pausar la canción
    function togglePlayPause() {
        if (audio.paused || audio.ended) {
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);

    prevButton.addEventListener('click', function() {
        // Retroceder a la canción anterior
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadCurrentSong();
        togglePlayPause(); // Comenzar a reproducir la nueva canción automáticamente
    });

    nextButton.addEventListener('click', function() {
        // Avanzar a la siguiente canción
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadCurrentSong();
        togglePlayPause(); // Comenzar a reproducir la nueva canción automáticamente
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar las playlists en el encabezado
    function showPlaylists() {
        const playlistList = document.getElementById("topPlaylists");
        playlistList.innerHTML = ""; // Limpiar la lista antes de mostrar
        const playlists = ["Alexis", "Kimberly"]; // Array de playlists (puedes obtenerlo dinámicamente de donde lo necesites)
        playlists.forEach((playlist) => {
            const listItem = document.createElement("li");
            listItem.textContent = playlist;
            playlistList.appendChild(listItem);
        });
    }

    // Mostrar las playlists al cargar la página
    showPlaylists();
});
document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const audioPlayer = document.querySelector('.audio-player');

    colorPicker.addEventListener('change', function () {
        const color = colorPicker.value;
        audioPlayer.style.backgroundColor = color;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos de la lista de reproducción recomendada
    const playlistItems = document.querySelectorAll(".playlistItem");

    // Agregar un evento de clic a cada elemento de la lista de reproducción recomendada
    playlistItems.forEach(function(item) {
        // Obtener el elemento de audio dentro del elemento de la lista de reproducción
        const audio = item.querySelector("audio");

        // Agregar un evento de clic al elemento de la lista de reproducción
        item.addEventListener("click", function() {
            // Verificar si el audio está pausado o detenido
            if (audio.paused || audio.ended) {
                // Reproducir la canción
                audio.play();
            } else {
                // Pausar la canción si ya está en reproducción
                audio.pause();
            }
        });
    });
});