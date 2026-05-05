function cows(a, b, c) {
    this.name = a;
    this.price = b;
    this.src = c;
}
var mix = [
    new cows("GREY GOAT", "100,000 PKR", "https://plus.unsplash.com/premium_photo-1667099521475-fcd0e941b4ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D"),
    new cows("white brown Goat", "125,000 PKR", "https://images.unsplash.com/photo-1506076177893-89d54794ef41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D"),
    new cows("full black Goat", "330,000 PKR", "https://plus.unsplash.com/premium_photo-1691030658378-acdaab929bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdvYXR8ZW58MHx8MHx8fDA%3D"),
    new cows("full brown Goat", "100,000 PKR", "https://images.unsplash.com/photo-1631990206190-8b20560a8d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvYXR8ZW58MHx8MHx8fDA%3D"),
];

var goldCategory = [
    new cows("White goat", "150,000 PKR", "https://images.unsplash.com/photo-1524609864400-829f6a124032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvYXR8ZW58MHx8MHx8fDA%3D"),
    new cows("greish goat", "150,000 PKR", "https://media.istockphoto.com/id/2264262975/photo/goat-in-the-pasture-eating-grass-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=BzFqpQGLS6C2XOjTOGow3m1Dfc5x9L0jL4IffSIkWok="),
    new cows("stylish goat", "250,000 PKR", "https://media.istockphoto.com/id/2217537641/photo/grazing-goat-with-affectionate-human-interaction.jpg?s=612x612&w=0&k=20&c=4eZ4DyvWD3OcPezjYg9wGCPIE1SwyOwdzmcn9bWAAq0="),
    new cows("Whitish Goat", "300,000 PKR", "https://media.istockphoto.com/id/564575900/photo/milk-goats-feeding-on-a-pasture.jpg?s=612x612&w=0&k=20&c=pJPthuKQmssVZyMEXErnrL3hH3oyoQr4sPVV5SXL-XU="),

];
var silverQuality = [
    new cows("white goat", "200,000 PKR", "https://media.istockphoto.com/id/1003598272/photo/white-goat-up-close.jpg?s=612x612&w=0&k=20&c=BESLO8jxNHQX5EmkoX8JbSJEWWpgK1majcxYJqL_rzg="),
    new cows("full black goat", "100,000 PKR", "https://media.istockphoto.com/id/2268645976/photo/black-goat-with-a-bell-stands-in-a-lush-green-pasture.jpg?s=612x612&w=0&k=20&c=52ZmtLxFE7i8m8F8zthphtZpFa7f_1CKSUa5uM5CpOE="),
    new cows("brownish goat", "300,000 PKR", "https://media.istockphoto.com/id/2212574950/photo/goat-walking-through-meadow-at-sunset-agritourism.jpg?s=612x612&w=0&k=20&c=jegm9ZOQDBA-EAxyOR8IT63ctNhwOLb1k_tU1cuyxEA="),
    new cows("white goat", "150,000 PKR", "https://media.istockphoto.com/id/2223760461/photo/funny-goat-with-beard-and-horns-sitting-in-grass-farm-livestock-in-natural-pasture.jpg?s=612x612&w=0&k=20&c=OW-DLheW4nKjGZ2GsgpmMUhSw1-C-XfG0V5J7gHB6yw="),
];
var achiQuality = [
    new cows("brown spots goat", "250,000 PKR", "https://images.pexels.com/photos/35679351/pexels-photo-35679351.jpeg"),
    new cows("whitish goat", "200,000 PKR", "https://images.pexels.com/photos/37175681/pexels-photo-37175681.jpeg"),
    new cows("black goat", "100,000 PKR", "https://images.pexels.com/photos/37197921/pexels-photo-37197921.jpeg"),
];
var achiCows = [
    new cows("whitish goat", "250,000 PKR", "https://images.pexels.com/photos/7604190/pexels-photo-7604190.jpeg"),
    new cows("whitish goat", "200,000 PKR", "https://images.pexels.com/photos/37112353/pexels-photo-37112353.jpeg"),
    new cows("full brown goat", "5250,000 PKR", "https://images.pexels.com/photos/30375919/pexels-photo-30375919.jpeg"),
];
var normalCows = [
    new cows("white goat", "200,000 PKR", "https://images.pexels.com/photos/30196606/pexels-photo-30196606.jpeg"),
    new cows("greish goat", "175,000 PKR", "https://images.pexels.com/photos/32655847/pexels-photo-32655847.jpeg"),
    new cows("fbrownish goat", "200,000 PKR", "https://images.pexels.com/photos/33761127/pexels-photo-33761127.jpeg"),
];
var heavyCows = [
    new cows("brown white goat", "200,000 PKR", "https://images.pexels.com/photos/13065725/pexels-photo-13065725.jpeg"),
    new cows("full brown goat", "150,000 PKR", "https://images.pexels.com/photos/29548175/pexels-photo-29548175.jpeg"),
    new cows("white goat", "200,000 PKR", "https://images.pexels.com/photos/26842308/pexels-photo-26842308.jpeg"),
];

cows.prototype.renderCard = function () {
    return `

     <div class="col">
        <div class="card h-100">
      <img src="${this.src}" class="cows-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name.toUpperCase()}</h5>
      </div>
      <div class="card-footer">
        <small class="price">Price:${this.price}</small>
          <button onclick='addToCart(${JSON.stringify(this)})'
        class="bg-black text-white px-2 py-2 rounded border-0">
        Add to Cart
        </button>
      </div>
          </div>
    </div>
          `
};
var ourItems = document.getElementById("ourgoats");
for (var item of mix) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of goldCategory) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of silverQuality) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of achiQuality) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of achiCows) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of normalCows) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of heavyCows) {
    ourItems.innerHTML += item.renderCard();
}



var cart = [];

function addToCart(product) {

    cart.push(product);

    showCart();
}

function showCart() {

    var cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    for (var item of cart) {

        cartItems.innerHTML += `
        <div class="d-flex align-items-center gap-2 border p-2 mb-2">

        <img src="${item.src}" width="50">

        <div>
        <div>${item.name}</div>
        <div>${item.price}</div>
        </div>

        </div>
        `;
    }
}




function addToCart(product) {

    cart.push(product);

    // hide carousel if exists
    var carousel = document.getElementById("carouselExampleSlidesOnly");
    if (carousel) {
        carousel.style.display = "none";
    }

    // hide product grid
    var productsSection = document.getElementById("ourgoats");
    if (productsSection) {
        productsSection.style.display = "none";
    }

    // show success card screen
    var mainContent = document.querySelector(".container") || document.body;

    mainContent.innerHTML = `
    
        <h1 class="text-center productname mt-4">
        Product Added Successfully!
        </h1>
        <div class="card mt-4 p-4 shadow-lg mx-auto"
        style="max-width: 500px;
        border-radius: 15px;
        background: #ffbcbc;">

            <img src="${product.src}"
            class="card-img-top mx-auto"
            style="max-width: 350px;
            border-radius: 10px;">

            <div class="card-body text-center">

                <h3 class="card-title fw-bold mt-2">
                ${product.name.toUpperCase()}
                </h3>

                <div class="mt-3">
                    <h4 class="text-success fw-bold m-0 p-3"
                    style="background: #e8f5e9;
                    border-radius: 10px;">
                    Price: ${product.price}
                    </h4>
                </div>
                <button onclick="location.reload()" class="btn btn-warning btn-lg mt-4 w-100 fw-bold"> Continue Shopping </button>

            </div>

        </div>
    `;
}