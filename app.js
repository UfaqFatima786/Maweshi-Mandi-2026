function cows(a, b, c) {
    this.name = a;
    this.price = b;
    this.src = c;
}
var warmDishes = [
    new cows("White Cow", "150,000 PKR", "https://www.bakraonline.pk/images/ads/2020-07/bull/110_1_75295.jpg"),
    new cows("Black Cow", "125,000 PKR", "https://www.bakraonline.pk/images/ads/2020-07/bull/110_1_57225.jpg"),
    new cows("White Brown Cow", "330,000 PKR", "https://images.olx.com.pk/thumbnails/610427666-800x600.webp"),
    new cows("Red Cow", "400,000 PKR", "https://images.olx.com.pk/thumbnails/610300699-800x600.webp"),
];

var dinnerset = [
    new cows("White Bachra", "225,000 PKR", "https://images.olx.com.pk/thumbnails/610427665-800x600.webp"),
    new cows("Black Bachra", "150,000 PKR", "https://images.olx.com.pk/thumbnails/610427667-800x600.webp"),
    new cows("White Cow", "250,000 PKR","https://images.olx.com.pk/thumbnails/610809959-800x600.webp"),
    new cows("Whitish Cow", "300,000 PKR", "https://images.olx.com.pk/thumbnails/610809958-800x600.webp"),

];
var glasssets = [
    new cows("6PCS Crystal Lining Glass Set", "2,950 PKR", "https://images.olx.com.pk/thumbnails/610809962-800x600.webp"),
    new cows("Crystal lining glass set of 6PCS", "2,500 PKR", "https://images.olx.com.pk/thumbnails/613704847-800x600.webp"),
    new cows("Ceramic Printed Cup-Saucer Set", "15,000 PKR", "https://images.olx.com.pk/thumbnails/610809966-800x600.webp"),
    new cows("Ceramic Printed Cup-Saucer Set", "15,000 PKR", "https://images.olx.com.pk/thumbnails/613704844-800x600.webp"),
];
var bowls = [
    new cows(" Small Black Lotus Bowls", "5000 PKR", "https://images.olx.com.pk/thumbnails/614194730-800x600.webp"),
    new cows("Melamine 3 Black Medium Platter", "7000 PKR", "https://images.olx.com.pk/thumbnails/610288784-800x600.webp"),
    new cows("Ceramic 3 Black Medium Platter", "20000 PKR", "https://images.olx.com.pk/thumbnails/610331058-800x600.webp"),
];
var tray = [
    new cows("Melamine Black Serving Tray", "5000 PKR", "https://images.olx.com.pk/thumbnails/610809960-800x600.webp"),
    new cows("Melamine White Medium Bowl", "7000 PKR", "https://images.olx.com.pk/thumbnails/613442117-800x600.webp"),
    new cows("Melamine Black Serving Platter", "6000 PKR", "https://images.olx.com.pk/thumbnails/610809963-800x600.webp"),
];
var spoon = [
    new cows("white Soup Spoon", "200 PKR", "https://images.olx.com.pk/thumbnails/612867201-800x600.webp"),
    new cows("Vlack curry Serving Spoon", "200 PKR", "https://images.olx.com.pk/thumbnails/609333637-800x600.webp"),
    new cows("black spoon", "199 PKR", "https://images.olx.com.pk/thumbnails/609333638-800x600.webp"),
];
var plate = [
    new cows("white Soup Spoon", "300000 PKR", "https://images.olx.com.pk/thumbnails/609333648-800x600.webp"),
new cows("melamine white plate", "900 PKR", "https://images.olx.com.pk/thumbnails/609333637-800x600.webp"),
new cows("melamine black medium plate", "700 PKR", "https://images.olx.com.pk/thumbnails/614194730-800x600.webp"),
];

cows.prototype.renderCard = function () {
    return `

     <div class="col">
    <div class="card h-100">
      <img src="${this.src}" class="card-img-top cows-img" alt="...">
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
var ourItems = document.getElementById("ourcows");
for (var item of warmDishes) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of dinnerset) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of glasssets) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of bowls) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of tray) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of spoon) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of plate) {
    ourItems.innerHTML += item.renderCard();
}
