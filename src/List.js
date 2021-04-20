import React from "react";

const List = ({ habits }) => {
  return (
    <>
      {habits.map((habit) => {
        const { id, name, description, image } = habit;
        return (
          <article key={id} className="habit">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
