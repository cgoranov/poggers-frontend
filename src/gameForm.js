
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
            } else if (c.nodeName === "SPAN") {
                let i = 1
                Array.from(c.children).forEach( n => {              
                    if (n.nodeName === "INPUT") {
                        formInputs[n.className + `${i ++ }`] = n.value
                    }
                })
            }
        })

        adapter.createGames(formInputs)

    }

    handleAddComment(e){
        e.preventDefault()
    
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