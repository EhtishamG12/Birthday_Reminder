import React, {useState} from "react";
import SingleTodo from "./SingleTodo";
import toast from "react-hot-toast";

const Todo = () => {
  const [todo,setTodo] =useState("");
  const [error,setError] = useState(false);

  const [data,setData] = useState([]);

  const handletodo = (e) => {
 e.preventDefault()


  }


};