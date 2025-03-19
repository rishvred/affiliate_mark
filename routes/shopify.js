router.post("/order-created", async (req, res) => {
    const { ref } = req.body;
    const affiliate = await Affiliate.findOne({ referralCode: ref });

    if (affiliate) {
        affiliate.sales += 1;
        affiliate.commission += 10;
        await affiliate.save();
    }

    res.status(200).send("Order tracked");
});
