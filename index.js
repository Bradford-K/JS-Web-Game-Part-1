// Function to add images
function newImage(url, left, bottom){
    let value = document.createElement('img')
    value.src = url
    value.style.position = 'fixed'
    value.style.left = left + 'px'
    value.style.bottom = bottom + 'px'
    document.body.append(value)
}


// Item Function
function newItem(url,left,bottom){
    let value = newImage(url,left,bottom)

    value.addEventListener('dblclick', () => {
        value.remove()
    })
}
// Add Green Character
newImage('assets/green-character.gif',100,100)


// Add Pine Tree
newImage('assets/pine-tree.png',450,200)

// Add Tree
newImage('assets/tree.png',200,300)

// Add Pillar
newImage('assets/pillar.png',350,100)

// Add Crate
newImage('assets/crate.png',150,200)

// Add Well
newImage('assets/well.png',500,425)



// Add Sword Item
newItem('assets/sword.png',500,405)

// Add Shield Item
newItem('assets/sheild.png',165,185)

// Add Staff Item
newItem('assets/staff.png',600,100)

