const { Schema, model } = require('mongoose');

const shopSchema = Schema(
    {
        name: String,
		domain: String,
		scopes: String,
		data: String,
		token: String,
        email: String,
		url: String,
		description: String,
		id: String,
		contactEmail: String,
		currencyCode: String,
    },
    { timestamps: true }
);

module.exports.Shop = model('Shop', shopSchema);