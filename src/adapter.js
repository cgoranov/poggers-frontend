class Adapter {

    constructor(url) {
        this.url = `${url}/api/v1/games`
    }

    getGames(){
        fetch(this.url) 
        .then(r => r.json())
        .then(games => {
            games.forEach(game => {
                const g = new Game(game)
                g.addToDom()
            })
        })
    }

    createGames(formInputs){
        const commentsArray = []
        for (const k in formInputs) {
            if (k.includes("comment")) {
               commentsArray.push({"content" : formInputs[k]})
            }
        }

        fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                game: {    
                    name: formInputs["name-input"],
                    platform: formInputs["platform-input"],
                    comment_attributes: commentsArray
                    
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {  
            if (data.status === 201){
                const g = new Game(data.game);
                g.addToDom();
                
                const form = document.querySelector('form')
                const spanContainer = document.querySelector('form span')
                Array.from(form).forEach ( n => {
                    if (n.type === "text" ) {
                        n.value = ""
                    }
                })
                spanContainer.innerHTML = '<input class="comment-input"  placeholder="comment" type="text"/>'

            } else {
                alert(data.errors)
            }
            
        })
        .catch(err => console.error('Error', err))
    }

    listenForDelete(){
      
        const deleteButtons = document.querySelectorAll("ul#games-container li button") 

        debugger
     
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

    deleteGame(li){
        fetch(`${this.url}/${li.dataset.id}`, { method: "DELETE"})
        .then(r => r.json())
        .then(data => {
            if (data.message === "Successfully deleted"){
                li.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }

}