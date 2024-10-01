
const db = require("../database/database");

exports.PostProduct = (req, res) => {
  try {
    console.log(req.body);
    
    console.log(req.file);
    //   let sql = `INSERT INTO product 
    // (counter,text,price,Catagori,exPrice,quantity,Image) 
    //   VALUES("",'${req.body.text}','${req.body.price}',
    //   '${req.body.Catagori}','${req.body.exPrice}',
    //   '${req.body.exPrice}','${req.body.Image}')`;

    // db.query(sql, (err, result) => {
    //     if (err) throw err;
    //     if (result) res.status(200).json(req.body);
    // });
   res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};
