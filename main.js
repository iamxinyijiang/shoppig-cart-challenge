//info of all products
let products =
    [

        {
            "sku": 1,

            "name": "Ben & Jerry's Half Baked Ice Cream 458ml",

            "price": 9.00,

            "img": "pics/1.jpg"
        },




        {
            "sku": 2,

            "name": "Griffins Marvels Golden Gaytime Popcorn 100g",

            "price": 4.00,

            "img": "pics/2.jpg"
        },




        {
            "sku": 3,

            "name": "Maltesers Milk Chocolate Snack 140g",

            "price": 4.00,

            "img": "pics/3.jpg"
        },




        {
            "sku": 4,

            "name": "Cheetos Flaming Hot Puffs Snack 150g",

            "price": 3.50,

            "img": "pics/4.jpg"
        },




        {
            "sku": 5,

            "name": "Coca-cola No Sugar Soft Drink Bottle 600ml",

            "price": 3.75,

            "img": "pics/5.jpg"
        },




        {
            "sku": 6,

            "name": "Mount Franklin Spring Water Bottle 600ml",

            "price": 2.00,

            "img": "pics/6.jpg"
        }

    ]

//generate product listings
function createTaskHTML(products) {
    for (let i = 0; i < products.length; i++) {
        let productInnerHTML =
            `<div class="col-12 col-md-4 merchandise" id="sku-${products[i].sku}">
        <div class="row" >
        <div class="col-12" style="max-width:300px;">
        <img class="product-img" src=${products[i].img} />
        </div>
        <div class="col-12" style="max-width:350px;">
        <p class="product-name">${products[i].name}</p>
        <p class="product-price">Price: $${products[i].price} each</p>
        <label for="quantity-${products[i].sku}">Quantity:</label>
        <input id="quantity-${products[i].sku}" type="number" id="quantity" name="quantity" min="1" max="99" value="1">
        <button class="add-btn"id="btn-${products[i].sku}">Add to cart</button>
        </div>
        <div/>
        </div>`
        document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + productInnerHTML
    }
}
createTaskHTML(products)

//add to cart
let addButtons = document.getElementsByClassName('add-btn');
for (let i = 0, length = addButtons.length; i < length; i++) {
    addButtons[i].addEventListener("click", () => {
        //create cart html
        let quantity = document.getElementById(`quantity-${products[i].sku}`).value
        let itemSubtotalPrice = []
        itemSubtotalPrice[i] = products[i].price * quantity
        let cartHTML =
            `<tr id="UID${products[i].sku}">
        <th scope="row">${products[i].name}</th>
        <td>${quantity}</td>
        <td>$${products[i].price}</td>
        <td>$<span id="subtotal-price-${products[i].sku}">${itemSubtotalPrice[i]}</span></td>
        <td><button class="btn btn-border-light" id="del-btn-${products[i].sku}" >&#9940;</button></td>
        </tr>`
        //calculate cart total
        let cartTotal = 0
        cartTotal += itemSubtotalPrice[i]
        document.getElementById("cart-total").innerHTML = parseFloat(document.getElementById("cart-total").innerHTML) + cartTotal
        //avoid duplicate item entry in cart
        if (document.getElementById(`UID${products[i].sku}`) !== null) {
            alert(`${products[i].name} is already in your cart.`)
        }
        else {
            document.getElementById("table-body").innerHTML = document.getElementById("table-body").innerHTML + cartHTML
            deleteItem(products)
        }
    });

}

//delete item from cart
function deleteItem(products) {
    for (let i = 0, length = products.length; i < length; i++) {
        if (document.getElementById(`del-btn-${products[i].sku}`) !== null) {
            document.getElementById(`del-btn-${products[i].sku}`).addEventListener("click", () => {
                let element = document.getElementById(`UID${products[i].sku}`)
                //adjust cart total
                document.getElementById("cart-total").innerHTML = parseFloat(document.getElementById("cart-total").innerHTML) - parseFloat(document.getElementById(`subtotal-price-${products[i].sku}`).innerHTML)
                element.parentNode.removeChild(element)
            })
        }
    }
}











