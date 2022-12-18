//info of all products
let products =
    [

        {
            "sku": "p1",

            "name": "Ben & Jerry's Half Baked Ice Cream 458ml",

            "price": 9.00,

            "img": "pics/1.jpg"
        },




        {
            "sku": "p2",

            "name": "Griffins Marvels Golden Gaytime Popcorn 100g",

            "price": 4.00,

            "img": "pics/2.jpg"
        },




        {
            "sku": "p3",

            "name": "Maltesers Milk Chocolate Snack 140g",

            "price": 4.00,

            "img": "pics/3.jpg"
        },




        {
            "sku": "p4",

            "name": "Cheetos Flaming Hot Puffs Snack 150g",

            "price": 3.50,

            "img": "pics/4.jpg"
        },




        {
            "sku": "p5",

            "name": "Coca-cola No Sugar Soft Drink Bottle 600ml",

            "price": 3.75,

            "img": "pics/5.jpg"
        },




        {
            "sku": "p6",

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
        <input id="quantity-${products[i].sku}" type="number" class="quantity" name="quantity-${products[i].sku}" min="1" max="99" value="1">
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
        <th scope="row" class="cart-img" style="background-image: url(${products[i].img});"></th>
        <td>${products[i].name}</td>
        <td>
        <label for="quantity-adjust-${products[i].sku}"></label>
        <input id="quantity-adjust-${products[i].sku}" type="number" class="adjust" name="quantity-adjust-${products[i].sku}" min="1" max="99" value="${quantity}">
        </td>
        <td>$${products[i].price}</td>
        <td>$<span id="subtotal-price-${products[i].sku}" class="subtotal">${itemSubtotalPrice[i]}</span></td>
        <td><button class="btn btn-border-light" id="del-btn-${products[i].sku}" >&#9940;</button></td>
        </tr>`

        //avoid duplicate item entry in cart
        if (document.getElementById(`UID${products[i].sku}`) !== null) {
            alert(`${products[i].name} is already in your cart.`)
        }
        else {
            document.getElementById("table-body").innerHTML = document.getElementById("table-body").innerHTML + cartHTML
            //calculate cart total
            let cartTotal = 0
            cartTotal += itemSubtotalPrice[i]
            document.getElementById("cart-total").innerHTML = parseFloat(document.getElementById("cart-total").innerHTML) + cartTotal
            adjustAndDeleteItem(products)
        }
    });
}

//delete item from cart/adjust quantity in cart
function adjustAndDeleteItem(products) {
    for (let i = 0, length = products.length; i < length; i++) {
        if (document.getElementById(`del-btn-${products[i].sku}`) !== null) {
            document.getElementById(`del-btn-${products[i].sku}`).addEventListener("click", () => {
                let element = document.getElementById(`UID${products[i].sku}`)
                //adjust cart total price after deletion
                document.getElementById("cart-total").innerHTML = parseFloat(document.getElementById("cart-total").innerHTML) - parseFloat(document.getElementById(`subtotal-price-${products[i].sku}`).innerHTML)
                //remove element
                element.parentNode.removeChild(element)
            })
        }
        //listen to change in quantity in cart
        if (document.getElementById(`quantity-adjust-${products[i].sku}`) !== null) {
            document.getElementById(`quantity-adjust-${products[i].sku}`).addEventListener('change', () => {
                //calculate new subtotal
                let newSubTotal = parseFloat(document.getElementById(`quantity-adjust-${products[i].sku}`).value) * products[i].price
                document.getElementById(`subtotal-price-${products[i].sku}`).innerHTML = newSubTotal
                //calculate new cart total
                const sum = [];
                for (let i = 0, length = products.length; i < length; i++) {
                    const innerSum = Array.from(
                        document.getElementsByClassName(`subtotal`)
                    ).reduce(
                        (acc, el) => acc + parseFloat(el.innerText),
                        0
                    );
                    sum.push(innerSum);
                    document.getElementById("cart-total").innerHTML = sum[0]
                }
            })
        }
    }
}











