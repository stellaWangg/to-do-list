import React from "react";
import { AiOutlineClear } from "react-icons/ai";
const List = ({ list, deleteItem }) => {
  return (
    <div className="list-main">
      {list.map((item) => {
        const { id, title } = item;

        return (
          <div className="list-item" key={id}>
            <div className="text">
              <input type="checkbox" />

              <span>{title}</span>
            </div>
            <button
              className="delete-btn"
              type="button"
              onClick={() => deleteItem(id)}
            >
              <AiOutlineClear />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
