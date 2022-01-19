
const gameForm = new GameForm
const adapter = new Adapter(`http://localhost:3000`)

// only var is not block scoped, let and const are

function init() {
    gameForm.addForm();
    adapter.getGames();
    gameForm.attachSearchHandler();
}

document.addEventListener("DOMContentLoaded", init)