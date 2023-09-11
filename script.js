function loadNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const noteList = document.getElementById("note-list");

        noteList.innerHTML = "";

        notes.forEach((note, index) => {
          const noteDiv = document.createElement("div");
          noteDiv.classList.add("note");
          noteDiv.innerHTML = `
                      <div>${note}</div>
                      <button class="delete-button" onclick="deleteNote(${index})">Delete</button>
                  `;
          noteList.appendChild(noteDiv);
        });
      }

      // Save a new note to local storage
      function saveNote() {
        const noteText = document.getElementById("note-text").value;
        if (noteText.trim() === "") return;

        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notes));

        loadNotes();
        document.getElementById("note-text").value = "";
      }

      // Delete a note from local storage
      function deleteNote(index) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
      }

      // Initial load of notes
      loadNotes();