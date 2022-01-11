
class GameForm {
    
    addForm() {
        const formContainer = document.getElementById("form-container")
        const gameForm = document.createElement('form')
        gameForm.innerHTML = 
                `<input id="name-input" placeholder="name" type="text"/><br>
                <input id="platform-input"  placeholder="platform" type="text"/><br>
                <input id="comment-input1"  placeholder="comment" type="text"/><br>
                <input id="comment-input2"  placeholder="comment" type="text"/><br>
                <input id="game-submit" value='add game' type='submit'/>`
        formContainer.append(gameForm)

        gameForm.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit(e) {
        e.preventDefault()
        
        const formInputs = {}

        Array.from(e.target.children).forEach(c => { 
            if (c.nodeName === "INPUT") {
                formInputs[c.id] = c.value
            }
        })

        adapter.createGames(formInputs)

    }

    listenForDelete(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.addEventListener("click", this.handleDelete)
    }

    handleDelete(e) {
        const li = e.target.parentElement 
        adapter.deleteGame(li)
    }



}