import {LocalDB} from 'https://cdn.skypack.dev/peadb'
import shortid from 'https://cdn.skypack.dev/shortid'

const db = new LocalDB('groceryplist-db')
const groceries = db.getAll || []

const groceryList = document.getElementById('groceryList')
const newGroceryInput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const createGrocryElement = groceryName => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery.value
    groceryElement.classList.add('groceryItem')
    return groceryElement
}

const addGrocery = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}



addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    
    if(value) {
        const key = shortid.generate()
        addGrocery({key, value})
        db.set(key, value)
        newGroceryInput.value = null
    }
})

groceries.map(grocery=>addGrocery(grocery))