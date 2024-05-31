const product = [
{
    id: 1,
    images: 'images/produc1.jpg',
    title: 'T Shirt',
    price: '₱500',
},
{
    id: 2,
    images: 'images/produc2.jpg',
    title: 'T Shirt',
    price: '₱550',
},
{
    id: 3,
    images: 'images/produc3.jpg',
    title: 'T Shirt',
    price: '₱600',
},
{
    id: 4,
    images: 'images/produc4.jpg',
    title: 'T Shirt',
    price: '₱499',
},
{
    id: 5,
    images: 'images/pants.jpg',
    title: 'Pants',
    price: '₱320',
},
{
    id: 6,
    images: 'images/pants1.jpg',
    title: 'Pants',
    price: '₱300',
},
{
    id: 7,
    images: 'images/jacket.jpg',
    title: 'Jacket',
    price: '₱300',
},
{
    id: 8,
    images: 'images/jacket1.jpg',
    title: 'Jacket',
    price: '₱300',
},
{
    id: 9,
    images: 'images/jacket2.jpg',
    title: 'Jacket',
    price: '₱300',
},
] 
const categories = [...new Set(product.map((item)=>
{return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>
{
    var {images, title, price} = item;
    return(
        `<div class="box">
        <div class="img-box">
            <img src=${images}></img>
            </div>
            <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add to Cart </button>
            </div>
            </div>`
    )
}).join('')


