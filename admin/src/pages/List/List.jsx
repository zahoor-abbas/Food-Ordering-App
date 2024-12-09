import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      setList(response.data.data);
    } catch (error) {
      console.error("Error fetching list:", error);
    }
  };

  const removeFood = async (foodId) =>{
     await axios.post(`${url}/api/food/remove`, {id:foodId})
     .then((response)=>{
      toast.success(response.data.message)
     })
     .catch (error =>{
      toast.error(response.data.message)
      console.log(error)
    })
    await fetchList();
  


  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className="list-cross" onClick={()=>removeFood(item._id)}>X</p>

            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
