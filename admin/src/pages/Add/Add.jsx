import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets} from "../../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"salad"
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }


  const submitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    await axios.post(`${url}/api/food/add`, formData)
    .then((response)=>{
      toast.success(response.data.message)

    })
    
    .catch (error =>{
      toast.error(response.data.message)
      console.log(error)
    })
    
  }
  return (
    <div className="add">
      <form onSubmit={submitHandler} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" onChange={onChangeHandler} value={data.name} name="name" placeholder="Type here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description}
            name="description"
            placeholder="Write Content Here"
            rows="6"
            id=""
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-product-category flex-col">
            <p>Product Category</p>
            <select name="category" id="" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles </option>
            </select>
          </div>
          <div className="add-product-price flex-col" onChange={onChangeHandler} value={data.price}>
            <p>Product Price</p>
            <input type="number" name="price" placeholder="$20" id="" />
          </div>
        </div>
        <button type="submit" className="addbtn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
