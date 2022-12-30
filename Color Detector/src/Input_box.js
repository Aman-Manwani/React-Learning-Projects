import colornames from 'colornames';

const Input_box= ( {colorvalue,setcolorvalue,sethexvalue })=>{
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <label></label>
            <input
             autoFocus
             type="text" 
             placeholder="Add Color Value"
             required
             value={colorvalue} 
             onChange={(e)=>{
                    setcolorvalue(e.target.value);
                    sethexvalue(colornames(e.target.value));
                }
             }
            />
        </form>
    )
}

export default Input_box;