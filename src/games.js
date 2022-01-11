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
                <div class="game-title" > Title: ${this.capitalizeName()}</div>
                <div class="game-platform" > Platform: ${this.platform}</div>
                <div> Comments: </div>
                <button data-action='delete'>X</button>
            </li>`
                )
    }

    renderComments(){
        const gamesLi = document.getElementById(`game-${this.id}`)
        this.comments.forEach(g => {
            gamesLi.innerHTML += `<div class="game-comment">${g.content}</div>`
        })
    }


    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.renderGame()
        this.renderComments()
    }

    capitalizeName(){
        const updatedName = this.name.split(' ').map( word => {
            const firstLetter = word.charAt(0)
            const upperWord = firstLetter.toUpperCase() + word.slice(1)
            return upperWord
        })
        this.name = updatedName.join(' ')
        return this.name
    }

}