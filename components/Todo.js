import React, { PropTypes } from 'react'

const styles={
  item:{


  }
}

const Todo = ({ deleteTodo, markCompleted, completed, text }) => (
  <li>

    <div style={{textDecoration: completed ? 'line-through' : 'none', marginBottom: '9px', maxWidth: '250px', minWidth: '250px'}} onMouseOver={()=> console.log("hovering")}>
        <button style={{'margin': '5px'}} onClick={deleteTodo}>
          Delete
        </button>
        <button style={{'margin': '5px'}} onClick={markCompleted}>
          Mark Completed
        </button>
    {text}
  </div>

  </li>
)

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
