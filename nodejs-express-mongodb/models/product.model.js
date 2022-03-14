module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        productId: Number,
        productName: String,
        productPrice: Number,
        productDescription: String,
        
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Product = mongoose.model("products", schema, "product");
    return Product;
  };