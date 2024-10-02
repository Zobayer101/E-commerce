
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const route = require("./server/routers/routes");
const multer = require('multer');
// const path = require("path");
const app = express();


dotenv.config();
const port = process.env.port || 8080;
app.use(express.json());
app.use(cors({ origin: "*" }));



app.use("/route", route);

app.use("/uploads", express.static("uploads"));

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).json("This was an multer error");
        } else {
            
            res.status(500).json(err);
        }
    } else {
        res.status(200).json( 'success !' );
    }
})

app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`);
})

