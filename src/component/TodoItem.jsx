

const TodoItem = ({title, description, isCompleted, deleteHandler, changeHandler , id}) => {



  return (
    <div className="todo_item">
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    <div>
        <input type="checkbox" className="check_inp" checked={isCompleted} onChange={()=>changeHandler(id)}/>
        <button className="btn3" onClick={()=>deleteHandler(id)}>Delete</button>
    </div>
    </div>
  )
}
    
export default TodoItem