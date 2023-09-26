import { GithubUser } from "./GithubUser.js"

export class Favorites {
    constructor(root){
       this.root = document.querySelector(root) 
       this.load()
    }

    load () {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
        this.clearInputSearch()

    }

    async add(username) {
        try{
            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists) {
                this.clearInputSearch()
                throw new Error('Usuário ja cadastrado!')
            }

            const user = await GithubUser.search(username)
            if(user.login === undefined) {
                this.clearInputSearch()
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        } catch(error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries
        .filter(entry=> entry.login !== user.login)
          
        this.entries = filteredEntries
        this.update()
    } 
}

export class FavoritesView extends Favorites{
    constructor(root) {
        super(root) 

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.addUser()
        this.BotaoEnter()
        
        
    }

    addUser() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input')
            this.add(value)
        }
    }
    
    BotaoEnter() {
        const inputSearch = this.root.querySelector('.search input')

        const searchButton = this.root.querySelector('.search button')

        inputSearch.addEventListener('keydown', function(event) {
            if(event.key === 'Enter') {
                searchButton.click()
            }
        })
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
            row.querySelector('.user img').src=`https://github.com/${user.login}.png`

            row.querySelector('.user img').alt = ` imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector( '.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const sureDelete = confirm('Deseja realmente deletar essa linha?')

                if(sureDelete) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
    } )
}

    createRow() {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/ludielen.png" alt="imagem de ludielen">

                <a href="https://github.com/ludielen" target="_blank">
                    <p>Ludi Hernandes</p>
                    <span>ludielen</span>
                </a>

            </td>

            <td class="repositories">
                76
            </td>

            <td class="followers">
                9598
            </td>

            <td>
                <button class="remove">Remover</button>
            </td>
        
        `
        return tr
    }


    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        });
    }

    clearInputSearch(){
        const input = document.querySelector('#input-search')
        input.value = ''
    }
}