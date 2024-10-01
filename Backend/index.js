
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const route = require("./server/routers/routes");
const app = express();


dotenv.config();
const port = process.env.port || 8080;
app.use(express.json());
app.use(cors({ origin: "*" }));



app.use("/route", route);



app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({msg:err})
    } else {
        res.status(500).json({ msg: 'server side error' });
    }
})

app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`);
})

