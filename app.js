function cows(a, b, c) {
    this.name = a;
    this.price = b;
    this.src = c;
}
var mix = [
    new cows("White Cow", "150,000 PKR", "https://www.bakraonline.pk/images/ads/2020-07/bull/110_1_75295.jpg"),
    new cows("Black Cow", "125,000 PKR", "https://www.bakraonline.pk/images/ads/2020-07/bull/110_1_57225.jpg"),
    new cows("White Brown Cow", "330,000 PKR", "https://images.olx.com.pk/thumbnails/610427666-800x600.webp"),
    new cows("Red Cow", "400,000 PKR", "https://images.olx.com.pk/thumbnails/610300699-800x600.webp"),
];

var goldCategory = [
    new cows("White Bachra", "225,000 PKR", "https://images.olx.com.pk/thumbnails/610427665-800x600.webp"),
    new cows("Black Bachra", "150,000 PKR", "https://images.olx.com.pk/thumbnails/610427667-800x600.webp"),
    new cows("White Cow", "250,000 PKR","https://images.olx.com.pk/thumbnails/610809959-800x600.webp"),
    new cows("Whitish Cow", "300,000 PKR", "https://images.olx.com.pk/thumbnails/610809958-800x600.webp"),

];
var silverQuality = [
    new cows("Black cow", "150,000 PKR", "https://images.olx.com.pk/thumbnails/610809962-800x600.webp"),
    new cows("Whitis cow", "225,000 PKR", "https://images.olx.com.pk/thumbnails/613704847-800x600.webp"),
    new cows("full white cow", "300,000 PKR", "https://images.olx.com.pk/thumbnails/610809966-800x600.webp"),
    new cows("full black cow", "150,000 PKR", "https://images.olx.com.pk/thumbnails/613704844-800x600.webp"),
];
var achiQuality = [
    new cows(" full brown cow", "300,000 PKR", "https://images.olx.com.pk/thumbnails/614194730-800x600.webp"),
    new cows("whitish cow", "200,000 PKR", "https://images.olx.com.pk/thumbnails/610288784-800x600.webp"),
    new cows("brown spots cow", "300,000 PKR", "https://images.olx.com.pk/thumbnails/610331058-800x600.webp"),
];
var achiCows = [
    new cows("full white cow", "500,000PKR", "https://images.olx.com.pk/thumbnails/610809960-800x600.webp"),
    new cows("blackish cow", "150,000 PKR", "https://images.olx.com.pk/thumbnails/613442117-800x600.webp"),
    new cows("white black cow", "500,000 PKR", "https://images.olx.com.pk/thumbnails/610809963-800x600.webp"),
];
var normalCows = [
    new cows("white black cow", "200,000 PKR", "https://images.olx.com.pk/thumbnails/612867201-800x600.webp"),
    new cows("black spots cow", "175,000 PKR", "https://images.olx.com.pk/thumbnails/609333637-800x600.webp"),
    new cows("full white cow", "200,000 PKR", "https://images.olx.com.pk/thumbnails/609333638-800x600.webp"),
];
var heavyCows = [
    new cows("black white cow", "300,000 PKR", "https://images.olx.com.pk/thumbnails/609333648-800x600.webp"),
new cows("black spots cow", "500,000 PKR", "https://images.olx.com.pk/thumbnails/609333637-800x600.webp"),
new cows("brown cow", "600,000 PKR", "https://images.olx.com.pk/thumbnails/614194730-800x600.webp"),
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
var ourItems = document.getElementById("ourcows");
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
