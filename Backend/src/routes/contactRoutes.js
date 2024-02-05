const express = require("express");
const Contact  = require("../models/contactModels.js");
const bodyParser = require("body-parser");

const contact_router = express();
contact_router.use(bodyParser.urlencoded({ extended: false }));

contact_router.post("/api/contact", async (req, res) => {
    const { first, last, avatarUrl, notes, twitter } = req.body;

    const contact = new Contact({
        first: first,
        last: last,
        avatarUrl: avatarUrl,
        notes: notes,
        twitter: twitter,
    });

    try {
        await contact.save().then((contact) => {
            return res.status(200).json({
                success: true,
                message: "Contact saved successfully !",
            });
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = contact_router;