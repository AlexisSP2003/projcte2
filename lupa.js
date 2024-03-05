document.addEventListener("DOMContentLoaded", function() {
    // Agregar event listener para el botón de búsqueda
    document.querySelector(".searchBar button").addEventListener("click", function() {
        const searchTerm = document.querySelector(".searchBar input").value;
        if (searchTerm.trim() !== "") {
            // Simplemente muestra una alerta con el término de búsqueda
            alert("Buscando: " + searchTerm);
        } else {
            alert("Ingrese un término de búsqueda válido.");
        }
    });

    // Agregar event listeners para los elementos de la sección "Cantantes más escuchados"
    const topArtistsListItems = document.querySelectorAll(".topArtists ul li");
    topArtistsListItems.forEach(function(artist) {
        artist.addEventListener("click", function() {
            // Simplemente muestra una alerta con el nombre del cantante seleccionado
            alert("Cantante seleccionado: " + artist.textContent);
        });
    });

    // Agregar event listeners para los elementos de la sección "Cantantes recomendados"
    const recommendedArtistsListItems = document.querySelectorAll(".recommendedArtists ul li");
    recommendedArtistsListItems.forEach(function(artist) {
        artist.addEventListener("click", function() {
            // Simplemente muestra una alerta con el nombre del cantante recomendado seleccionado
            alert("Cantante recomendado seleccionado: " + artist.textContent);
        });
    });

    // Agregar event listeners para los elementos de la sección "Playlists recomendadas"
    const recommendedPlaylistsItems = document.querySelectorAll(".recommendedGrid .playlistItem");
    recommendedPlaylistsItems.forEach(function(playlist) {
        playlist.addEventListener("click", function() {
            // Simplemente muestra una alerta con el nombre de la playlist recomendada seleccionada
            alert("Playlist recomendada seleccionada: " + playlist.querySelector("h3").textContent);
        });
    });
});
