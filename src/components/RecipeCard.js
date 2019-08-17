import React from "react";

const RecipeCard = ({ href, chips, thumbnail, title }) => {
  return (
    <div className="card">
      <div className="card-main">
        <div className="card-title">{title}</div>
        <img src={thumbnail} alt="" className="card-image" />
      </div>
      <div className="container">
          <hr/>
        <p>INGREDIENTS</p>
        <div className="ingredients">
          {chips == null ? null :chips.map(el => {
            return (
              <>
                <div className="md-chip">
                  <span>{el}</span>
                  <button type="button" className="md-chip-remove" />
                </div>
              </>
            );
          } )}
        </div>
        <div className="suggestions" >
        {suggestions.split(",").map(el => {
            return (
              <>
                <div className="md-chip1">
                  <span>{el}</span>
                  <button type="button" className ="md-chip-add" />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <br/>
      <div className="anchor">
        <a href={href}>VIEW RECIPE</a>
      </div>
    </div>
  );
};
export default RecipeCard;
const suggestions= "olive oil, onions"
