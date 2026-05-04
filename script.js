const addBtn = document.getElementById("addBtn");
const toggleMode = document.getElementById("toggleMode");
const notesContainer = document.getElementById("notesContainer");

function loadNotes() {
  const data = JSON.parse(localStorage.getItem("notes"));
  if (data) {
    data.forEach(text => createNote(text));
  }
}

function createNote(text = "") {
  const noteBox = document.createElement("div");
  noteBox.classList.add("noteBox");

  const note = document.createElement("textarea");
  note.classList.add("note");
  note.value = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.classList.add("deleteBtn");

  deleteBtn.onclick = () => {
    noteBox.remove();
    saveNotes();
  };

  note.addEventListener("input", saveNotes);

  noteBox.appendChild(note);
  noteBox.appendChild(deleteBtn);
  notesContainer.appendChild(noteBox);
}

function saveNotes() {
  const notes = document.querySelectorAll(".note");
  let data = [];

  notes.forEach(note => data.push(note.value));
  localStorage.setItem("notes", JSON.stringify(data));
}

addBtn.addEventListener("click", () => createNote());

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

loadNotes();