import { useState } from "react";
// import { IMG } from "../../src/Icon/content/Bag (1).png";

const Dashbord = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    catagori: "",
    exprice: "৳",
    quantity: "",
    image: "",
  });
  const [img, setImg] = useState();
  const SubmmitData = async() => {
    const formData = new FormData();
    formData.append("text", data.name);
    formData.append("price", data.price);
    formData.append("catagori", data.catagori);
    formData.append("exprice", data.exprice);
    formData.append("quantity", data.quantity);
    formData.append("image", data.image);
    
    const url = "http://localhost:3300/route/api/product/new";
    const requst = await fetch(url,{method:"POST",body:formData});
    const result = await requst.json();
    if (result.text) {
      alert("data uplod successfuly ")
      setData({
        name: "",
        price: "",
        catagori: "",
        exprice: "৳",
        quantity: "",
        image: "",
      });
    } else {
      alert('uplod faild !');
    }
    

  };
  const HandelChange = (propaty, value) => {
    setData((pre) => ({
      ...pre,
      [propaty]: value,
    }));
  };
  if (data.image) {
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result)
    }
    reader.readAsDataURL(data.image);
  }
 
  return (
    <>
      <div className="dashBord">
        <h1>Admin DashBord</h1>
        <div className="ProductIMg">
          <div className="imgs">
            <img
              src={img || "../../src/Icon/content/Bag (1).png"}
              alt=""
            />
            <input
              type="file"
              name="product"
              onChange={(e) => HandelChange("image", e.target.files[0])}
              accept="image/*"
            />
          </div>
          <p>Choose Product Image</p>
        </div>
        <div className="productDitials">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => HandelChange("name", e.target.value)}
            placeholder="Product ditials"
          />
          <input
            type="text"
            name="price"
            value={data.price}
            onChange={(e) => HandelChange("price", e.target.value)}
            placeholder="Price"
          />
          <select
            value={data.catagori}
            onChange={(e) => HandelChange("catagori", e.target.value)}
          >
            <option value={""}>Choos Catagori</option>
            <option value={"summer"}>Summer Collection</option>
            <option value={"flash"}>Flash Sales</option>
            <option value={"popular"}>Popular</option>
            <option value={"food"}>Food</option>
            <option value={"cleaning"}>Cleaning Supplies</option>
            <option value={"personal"}>Personal Care</option>
            <option value={"health"}>Health & Wellness</option>
            <option value={"baby"}>Baby Care</option>
            <option value={"kitchen"}>Home & Kitchen </option>
            <option value={"stationery"}>Stationery & Office</option>
            <option value={"pet"}>Pet Care</option>
            <option value={"toys"}>Toys & Sports</option>
            <option value={"beauty"}>Beauty & MakeUp</option>
            <option value={"fashion"}>Fashion & Lifestyle</option>
            <option value={"vehicle"}>Vehicle Essentials</option>
          </select>
          {/* <input type="text" name="catagori" placeholder="Catagori" /> */}
          <input
            type="text"
            name="exprice"
            value={data.exprice}
            onChange={(e) => HandelChange("exprice", e.target.value)}
            placeholder="ex-Price"
          />
          <input
            type="text"
            name="quantity"
            value={data.quantity}
            onChange={(e) => HandelChange("quantity", e.target.value)}
            placeholder="Quantity"
          />
        </div>
        <div className="btn">
          <button onClick={SubmmitData}>submit</button>
        </div>
      </div>
    </>
  );
};
export default Dashbord;
