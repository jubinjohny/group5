module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        reviewId: Number,
        email: String,
        productId: Number,
        rating: Number,
        text: String,
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Review = mongoose.model("reviews", schema, "review");
    return Review;
  };