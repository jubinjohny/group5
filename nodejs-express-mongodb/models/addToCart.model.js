module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        productId: Number,
        cartItemQty: Number,
        email: String,
        price: Number,
        totalPrice: Number,
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Cart = mongoose.model("carts", schema, "cart");
    return Cart;
  };