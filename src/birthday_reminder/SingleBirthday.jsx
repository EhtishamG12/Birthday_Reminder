import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const SingleBirthday = ({ id, name, image, age, remove }) => {
  return (
    <>
      <div className="d-flex justify-content-between shadow p-2 my-1">
        <div className="d-flex gap-3 align-items-center">
          <img
            width={80}
            height={80}
            src={image}
            alt=""
            className="rounded-circle border border-info"
            style={{ objectFit: "contain" }}
          />
          <div className="d-flex flex-column">
            <h5> {name} </h5>
            <p className="text-info">{age} years</p>
          </div>
        </div>
        <button onClick={() => remove(id)} className="btn  align-self-center">
          <FaTrashAlt color="red" size={30} />
        </button>
      </div>
    </>
  );
};

export default SingleBirthday;