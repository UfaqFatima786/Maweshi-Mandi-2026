function cows(a, b, c) {
    this.name = a;
    this.price = b;
    this.src = c;
}
var warmDishes = [
    new cows("White Cow", "150,000 PKR", "https://www.bakraonline.pk/images/ads/2020-07/bull/110_1_75295.jpg"),
    new cows("Food Warmer with Glass Dish", "30000 PKR", "https://www.bakraonline.pk/images/ads/2020-07/bull/110_1_57225.jpg"),
    new cows("Elegant Buffet Chafting Dish", "35000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/11/Elegant-Buffet-Chafing-Dish-Set-2.jpg?resize=247%2C247&ssl=1"),
    new cows("New White and Golden Food Warmer Dishes", "40000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/11/Elegant-Buffet-Chafing-Dishes-Buffet-Warmer-White-1.jpg?resize=247%2C247&ssl=1"),
];

var dinnerset = [
    new cows("Winsor England Heritage Black Porcelain Dinner Set", "125000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England-Heritage-Black-Porcelain-Dinner-Set-1.jpg?resize=400%2C400&ssl=1"),
    new cows("Winsor England Heritage Black Porcelain Dinner Set", "125000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England%E2%84%A2-Fine-Porcelain-Dinner-Set-Venice-Collection-White.jpg?resize=247%2C247&ssl=1"),
    new cows("Winsor England Venice White Porcelain Dinner Set", "125000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England%E2%84%A2-Fine-Porcelain-Dinner-Set-Venice-Collection-White.jpg?resize=247%2C247&ssl=1"),
    new cows("24PCS Ceramic Breakfast Dinner Set", "27,950 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/02/24Pcs-Ceramic-Breakfast-Dinner-Set.jpg?resize=400%2C400&ssl=1"),

];
var glasssets = [
    new cows("6PCS Crystal Lining Glass Set", "2,950 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Lining-Glass-Set-of-6-Golden-Line-1.jpg?resize=400%2C400&ssl=1t"),
    new cows("Crystal lining glass set of 6PCS", "2,500 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Lining-Glass-Set-of-6-Golden-Line.jpg?resize=400%2C400&ssl=1"),
    new cows("Crystal Wine Glass Set of 6PCS", "2,150 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Wine-Glass-Set-of-6-Golden-Line-1.jpg?resize=400%2C400&ssl=1"),
    new cows("Ceramic Printed Cup-Saucer Set", "15,000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Ceramic-Printed-Cup-Saucer-Set-of-6-Gift-Box.jpg?resize=400%2C400&ssl=1"),
];
var bowls = [
    new cows(" Small Black Lotus Bowls", "5000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772527734_ccccccccccccccccccc_(1).jpg"),
    new cows("Melamine 3 Black Medium Platter", "7000 PKR", "https://www.idealancy.pk/images/product_gallery/1772271434_ccccccccccccccccccc_(29).jpg"),
    new cows("Ceramic 3 Black Medium Platter", "20000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772271130_ccccccccccccccccccc_(25).jpg"),
];
var tray = [
    new cows("Melamine Black Serving Tray", "5000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772038789_ccccccccccccccccccc_(2).jpg"),
    new cows("Melamine White Medium Bowl", "7000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1770111721_y1.jpg"),
    new cows("Melamine Black Serving Platter", "6000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1770722191_ccccccccccccccccccc_(33).jpg"),
];
var spoon = [
    new cows("white Soup Spoon", "200 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772270630_ccccccccccccccccccc_(21).jpg"),
    new cows("Vlack curry Serving Spoon", "200 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772270059_ccccccccccccccccccc_(12).jpg"),
    new cows("black spoon", "199 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772270776_ccccccccccccccccccc_(19).jpg"),
];
var plate = [
    new cows("white Soup Spoon", "900 PKR", "https://www.idealancy.pk/images/product_gallery/md_1771407813_ccccccccccccccccccc_(6).jpg"),
new cows("melamine white plate", "900 PKR", "https://www.idealancy.pk/images/product_gallery/md_1771407624_ccccccccccccccccccc_(7).jpg"),
new cows("melamine black medium plate", "700 PKR", "https://www.idealancy.pk/images/product_gallery/md_1771407440_ccccccccccccccccccc_(8).jpg"),
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
        <small class="text-body-secondary">Price:${this.price}</small>
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
