var mongoose = require('mongoose'),
		Schema =  mongoose.Schema;

var OrderSchema = new Schema({
	quantity: Number,
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	_product: {type: Schema.Types.ObjectId, ref: 'Product'},
	created_at: {type: Date, default: Date.now()}
});

OrderSchema.statics.removeOrdersByCustomerId = function(customerId, callback) {
  // Still need to add pending quantities back to orders...
  this.remove({ _customer: customerId}, function(err){
    return callback(err);
  })
};

OrderSchema.statics.removeOrdersByProductId = function(productId, callback) {
  // Still need to add pending quantities back to orders...
  this.remove({ _product: productId}, function(err){
    return callback(err);
  })
};

module.exports = mongoose.model('Order', OrderSchema);
