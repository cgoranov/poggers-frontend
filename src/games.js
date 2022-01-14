class Game {

    constructor({id, name, platform, comments}){
        this.id = id
        this.name = name
        this.platform = platform
        this.comments = comments
    }

    renderGame(){
        return(
            `<li id="game-${this.id}" data-id=${this.id}>
                <div class="game-title" > Title: ${this.capitalize()}</div>
                <div class="game-platform" > Platform: ${this.platform}</div>
                <div> Comments: </div>
                <ul id="${this.id}-comments-list"></ul>
                <button data-action='delete'>X</button>
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

    capitalize(){
        const updatedName = this.name.split(' ').map( word => {
            const firstLetter = word.charAt(0)
            const upperWord = firstLetter.toUpperCase() + word.slice(1)
            return upperWord
        })
        this.name = updatedName.join(' ')
        return this.name
    }

    listenForDelete(){
     
        const deleteButtons = document.querySelectorAll("ul#games-container li button")
     
        Array.from(deleteButtons).forEach (b => {
            if (b.dataset.action === "delete") { 
                b.addEventListener("click", this.handleDelete)
            }
        }) 
    }

    handleDelete(e) {
        const li = e.target.parentElement 
        adapter.deleteGame(li)
    }

}