let newProductInput = document.getElementById('new-product')
let buttonAdd = document.querySelector('.button-add')
let buttonEdit = document.querySelector('.button-edit')
let buttonCancelEdit = document.querySelector('.button-cancel-edit')
let productAmount = document.querySelector('.product-amount')
let bodyBoxProduct = document.querySelector('.body-box')
let products = ['Sony Xperia', 'Samsung Galaxy']

function insertProduct(){
    let productList = ''
    for (i = 0; i < products.length; i++){
        productList += '<li class="product-item">' + '<div class="product-title">' + products[i] + '</div>'
        + '<div class="edit-button">' + '<button class="btn" onclick="editProduct(' + (`${i}`) + ')">Edit</button></div>'
        + '<div class="delete-button">' + '<button class="btn" onclick="deleteProduct(' + (`${i}`) + ')">Delete</button></div>'  + '</li>'
    }
    bodyBoxProduct.innerHTML = productList
}

insertProduct()

function insertProductAmount(){
    productAmount.innerHTML = products.length + ' products'
}

insertProductAmount()

function addProduct(){
    if (newProductInput.value != ''){
        if (confirm('Do you want add "' + newProductInput.value + '" to product list')){
            products.push(newProductInput.value)
            insertProduct()
            insertProductAmount()
            alert('Add "' +  newProductInput.value + '" successfully!')
            newProductInput.value = ''
        } else {
            alert('You cancelled')
            newProductInput.value = ''
            newProductInput.focus()
        }
    }
}

function addProductByButton(){
    buttonAdd.addEventListener('click', addProduct)
}

addProductByButton()

function deleteProduct(item){
    if (confirm('Do you want delete "' + products[item] + '" ?')){
        alert('Delete "' + products[item] + '" successfully!')
        products.splice(item, 1)
        insertProduct()
        insertProductAmount()
    } else {
        alert('You cancelled')
    }
}

function removeHide(){
    buttonEdit.classList.remove('hide')
    buttonCancelEdit.classList.remove('hide')
    buttonAdd.classList.add('hide')
}

function addHide(){
    buttonEdit.classList.add('hide')
    buttonCancelEdit.classList.add('hide')
    buttonAdd.classList.remove('hide')
}

function editProduct(item){
    newProductInput.focus()
    removeHide()
    newProductInput.value = products[item]
    buttonEdit.setAttribute('onclick', 'editProductConfirm(' + `${item}` + ')');  
}

function editProductConfirm(item){
    if(confirm('Do you want edit "' + products[item] + '" ?')){
        let currentProductName = products[item]
        products.splice(item, 1, newProductInput.value)
        insertProduct()
        insertProductAmount()
        addHide()
        alert('Edit "' +  currentProductName + '" to "' + newProductInput.value + '" successfully!')
        newProductInput.value = ''
    } else {
        alert('You cancelled')
    }
}

function cancelEdit(){
    buttonCancelEdit.addEventListener('click', function(){
        newProductInput.value = ''
        newProductInput.focus()
        addHide()
    })
}

cancelEdit()