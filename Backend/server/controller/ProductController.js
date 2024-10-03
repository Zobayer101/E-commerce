
const db = require("../database/database");

exports.PostProduct = (req, res) => {
  try {
    const { text, price, catagori, exprice, quantity } = req.body;
    // console.log(text,price,catagori,quantity);
    // console.log(req.file.filename);
      let sql = `INSERT INTO product 
    (counter,text,price,Catagori,exPrice,quantity,Image) 
      VALUES("",'${text}','${price}',
      '${catagori}','${exprice}',
      '${quantity}','${req.file.filename}')`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result) res.status(200).json(req.body);
    });
  //  res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};



exports.APIcontroler = (req, res,pageName) => {
  try {
    let sql = `SELECT * FROM product WHERE catagori='${pageName}'`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      if (result) res.status(200).json(result);
    })
  } catch (error) {
    res.status(500).json(error);
  }
}
