var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	quantity: {type: Number, default: 26},
	// price: Number,
	description: String,
	imgUrl: String,
	created_at: {type: Date, default: Date.now()}
});

ProductSchema.statics.isQuantityAvailable = function(productId, quantityRequested, callback) {
  this.findById(productId, function(err, product){
    if (err) { return callback(err); }
    var result = (product.quantity >= quantityRequested);
    return callback(result, product);
  })
};

ProductSchema.methods.decrementQuantity = function(quantity, callback) {
  this.quantity -= quantity;
  this.save(function(err){
    callback(err);
  });
};
module.exports = mongoose.model('Product', ProductSchema);
