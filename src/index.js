
const gameForm = new GameForm
const adapter = new Adapter(`http://localhost:3000`)

document.addEventListener("DOMContentLoaded", () => {
    gameForm.addForm();
    adapter.getGames();
    gameForm.listenForDelete();
})