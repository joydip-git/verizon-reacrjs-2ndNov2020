export class product {
    constructor(productId = 0, productName = null, productCode = null, releaseDate = null, description = null, price = 0, starRating = 0, imageUrl = null) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.productCode = productCode;
        this.imageUrl = imageUrl;
        this.price = price;
        this.starRating = starRating;
        this.releaseDate = releaseDate;
    }
}