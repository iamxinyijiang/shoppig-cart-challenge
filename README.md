# shopping-cart-challenge for GA JWD 

## Setup instructions
This shopping cart page is deployed via GitHub Pages. 
Please click this link to visit and test it out!
https://iamxinyijiang.github.io/shoppig-cart-challenge/

## Technologies used
- HTML
- CSS
- Vanilla Javascript
- A tiny bit of Bootstrap

##Requirements met
- #### minimum requirements:
1. Have a pre-populated (hard coded) array of objects as products. (check)

2. Your product display should have (not limited to) product image, product name, product price. (check)

3. All products should be displayed when the page loads. (check)

4. Using an ‘add to cart’ button, the user should be able to add the products to a shopping cart list. (check)

5. The shopping cart lists all products and displays a the total price. (check)

- #### Stretch Goals:
6. The user should also be able to delete the products from the cart, thus modifying the total price of the cart. (check)

7. The user should be able to enter a quantity for each product. (check)

## Issues
- Issues are mainly with stretch goals.
- Cart total price works majority of the time but still requires more testing to rule out bugs.
- I don not fully understand how parseFloat() rounds decimals up but don't want to just stick to integer prices.

## Additional Features that can be added in the future
- -Persisting data in localstorage so users don't lose their cart if page reloads.

- Let users edit quantity in cart instead of having to delete item and re-add.

- A separate inventory management js file.

- Rewrite as a React app.
