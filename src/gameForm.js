
class GameForm {
    
    addForm() {
        const formContainer = document.getElementById("form-container")
        const gameForm = document.createElement('form')
       
        gameForm.innerHTML = 
                `<input id="name-input" placeholder="name" type="text"/><br>
                <input id="platform-input"  placeholder="platform" type="text"/><br>
                <span id="comment-container">
                    <input class="comment-input"  placeholder="comment" type="text"/>
                </span>
                <button data-action='add-comment'>+</button><br>
                <input id="game-submit" value='add game' type='submit'/>`
        
        formContainer.append(gameForm)

        const addButton = document.querySelector('button')
        
        addButton.addEventListener("click", this.handleAddComment)

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

    handleAddComment(e){
        e.preventDefault()
        console.log("we hit this!")
        const newComment = document.createElement("INPUT")
        newComment.classList.add("comment-input")
        newComment.setAttribute("type", "text")
        newComment.setAttribute("placeholder", "comment")
        

        const commentSpan = document.querySelector('span#comment-container')

        const br = document.createElement("br")
        commentSpan.append(br)
        commentSpan.append(newComment)
    }



}