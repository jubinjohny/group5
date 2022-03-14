module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        orderId: Number,
        email: String,
        orderTotal: Number,
        
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Order = mongoose.model("orders", schema, "order");
    return Order;
  };