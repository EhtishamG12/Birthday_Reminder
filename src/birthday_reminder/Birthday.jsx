import React, { useContext, useState } from "react";
import SingleBirthday from "./SingleBirthday";
import { bdays } from "./bdays";
import { AppContext } from "../context/context";

const Birthday = () => {
  const [data, setData] = useState(bdays);
  const value = useContext(AppContext);

  const removePerson = (id) => {
    const newPeople = data.filter((item, index) => {
      return item.id !== id;
    });

    setData(newPeople);
  };

  return (
    <>
      <div
        className="container-fluid bg-info d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="col-lg-5 mx-auto p-5 card shadow ">
            <h1 className="display-6 text-center mb-4">
              {data.length} Birthdays today
            </h1>
            {data.map((item, index) => {
              return (
                <>
                  <SingleBirthday
                    key={item.id}
                    {...item}
                    remove={removePerson}
                  />
                </>
              );
            })}

            <button
              onClick={
                data.length > 0 ? () => setData([]) : () => setData(bdays)
              }
              className={`btn ${
                data.length > 0 ? "btn-danger" : "btn-success"
              } my-2`}
            >
              {data.length > 0 ? "Remove All" : "Refresh All"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Birthday;