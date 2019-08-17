import React,{useState} from 'react'

const RecipeSearchBar =(props)=>{
    const [inputText,setInputText] = useState('');
    const fetchRecipeData =  (event)=>{
        event.preventDefault();
        props.updateChips(props.chips,inputText);
    }
return(
    <div>
        <form action="" onSubmit={fetchRecipeData}>
            <div className="form-wrapper">
            <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} />
            <button className="lg-button">SEARCH</button>
            <button className="small-button"></button>
            </div>
        </form>
    </div>
)
}
export default RecipeSearchBar