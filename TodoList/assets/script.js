
let getItemName = () => {

    return document.getElementById('taskName').value
}

let getListElement = (itemName) => {
    return `<li> <input type="checkbox"></input> <label>${itemName}</label> </li>`
}

let addItem = () => {
    
    if(getItemName() == null || getItemName() == "") {
        alert(`You need to write something in "Type a task" box `)
    }else {
        document.getElementById('listItems').innerHTML += getListElement(getItemName())
    }


    console.log(getItemName())
}

