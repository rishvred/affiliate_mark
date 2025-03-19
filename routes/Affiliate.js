const express = require("express");
const router = express.Router();
const Affiliate = require("../models/Affiliate");

// Track referral clicks
router.get("/click/:referralCode", async (req, res) => {
    const { referralCode } = req.params;
    const affiliate = await Affiliate.findOne({ referralCode });

    if (affiliate) {
        affiliate.clicks += 1;
        await affiliate.save();
    }

    res.redirect("https://your-shopify-store.com");
});

module.exports = router;
