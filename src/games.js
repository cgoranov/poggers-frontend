class Game {

    constructor({id, name, platform, comments}){
        this.id = id
        this.name = name
        this.platform = platform
        this.comments = comments
    }

    static gameContainer = () => document.querySelector("ul#games-container")

    renderGame(){
        return(
            `<li id="game-${this.id}" data-id=${this.id}>
                <div class="game-title" > Title: ${this.capitalize()}</div>
                <div class="game-platform" > Platform: ${this.platform}</div>
                <div> Comments: </div>
                <ul id="${this.id}-comments-list" class="comments-list-container" ></ul>
                <button class="delete" data-action='delete'><i class="fas fa-trash-alt"></i></button>
            </li>`
                )
    }

    renderComments(){
        const commList = document.getElementById(`${this.id}-comments-list`)
        this.comments.forEach(g => {
            commList.innerHTML += `<li>${g.content}</li>`
        })
    }


    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.renderGame()

        this.renderComments()
        this.listenForDelete()

    }

    listenForDelete(){
    
        debugger
        const deleteButtons = Game.gameContainer().querySelectorAll("li button.delete")
     
        Array.from(deleteButtons).forEach (b => {
            b.addEventListener("click", this.handleDelete)
        }) 
    }

    handleDelete(e, id) {
        e.target.parentElement.parentElement.remove()
        adapter.deleteGame(id)
    }

    capitalize(){
        const updatedName = this.name.split(' ').map( word => {
            const firstLetter = word.charAt(0)
            const upperWord = firstLetter.toUpperCase() + word.slice(1)
            return upperWord
        })
        this.name = updatedName.join(' ')
        return this.name
    }



}