const mongoose = require("mongoose");

const AffiliateSchema = new mongoose.Schema({
    email: String,
    referralCode: String,
    clicks: { type: Number, default: 0 },
    sales: { type: Number, default: 0 },
    commission: { type: Number, default: 0 }
});

module.exports = mongoose.model("Affiliate", AffiliateSchema);

