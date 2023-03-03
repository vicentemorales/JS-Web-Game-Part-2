//Function for generating images
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

// making inventory <div>
let inventory = document.createElement('div')

// details for inventory
function newInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}


// Making a new item by runnin the image function
// Removing item from field and adding to the inventory
function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
        let newInventoryItem = document.createElement('img')
            newInventoryItem.src = url
            inventory.append(newInventoryItem)
    })
}

// Generating inventory
newInventory()

// Move Function 
function move(image){
    image.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

// ~Movable Images~
move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/tree.png', 200, 450))
move(newImage('assets/pillar.png', 350, 250))
move(newImage('assets/pine-tree.png', 450, 350))
move(newImage('assets/crate.png', 150, 350))
move(newImage('assets/well.png', 500, 575))

// ~Movable Items~
move(newItem('assets/sword.png', 500, 555))
move(newItem('assets/shield.png', 165, 335))
move(newItem('assets/staff.png', 600, 250))

