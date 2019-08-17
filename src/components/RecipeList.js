import React from 'react'
import RecipeCard from './RecipeCard'
const RecipeList =(props)=>{
return(
    <div className="content">
    {props.data.map((recipe)=>{return(<RecipeCard {...recipe}/>)})}
    </div>
)
}
export default RecipeList