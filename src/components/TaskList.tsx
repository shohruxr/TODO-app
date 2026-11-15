interface List{
    children: React.ReactNode
}

const TaskList = ({children}:List)=>{
    return <ul className="todo-list">{children}</ul>;
}
export default TaskList