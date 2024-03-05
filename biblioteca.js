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
