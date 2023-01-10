export const Form = () => {
    const handleAdd = () => {
        console.log("added")
    }
    
    return(
        <form>
            <input type="text" placeholder="add new staff"/>
            <input type="submit" value="send" onClick={() => handleAdd()}/>
        </form>
    )
}