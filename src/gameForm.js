
class GameForm {
    
    addForm() {
        const formContainer = document.getElementById("form-container")
        const gameForm = document.createElement('form')
        gameForm.innerHTML = 
                `<input id="name-input" placeholder="title" type="text"/><br>
                <input id="platform-input"  placeholder="platform" type="text"/><br>
                <input id="genre-input1"  placeholder="genre" type="text"/><br>
                <input id="genre-input2"  placeholder="genre" type="text"/><br>
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


}