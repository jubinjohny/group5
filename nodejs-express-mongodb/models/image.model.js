module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        imageId: Number,
        productId: Number,
        imageUrl: String,
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Image = mongoose.model("images", schema, "image");
    return Image;
  };