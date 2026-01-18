const express = require("express");
const path = require("path")

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/check", (req, res) => {

    const { product, store } = req.query;

    const dbStocks = {
        milan: 1234,
        brazil: 4567,
        india: 567
    };

    const stockValue = dbStocks[store];

    if (!stockValue) {
        return res.status(404).json({ msg: "Stock not found" });
    }

    res.send(`${stockValue} units`);
});

app.get("/admin", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "inddex.html")
    );

});

app.listen(8000, "127.0.0.1" ,() => {
    console.log("Server running on port 8000");
});
