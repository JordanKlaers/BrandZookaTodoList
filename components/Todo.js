import React, { PropTypes } from 'react'

const styles={
  item:{


  }
}




const Todo = ({ deleteTodo, toggleButtons, markCompleted, completed, text, toggle }) => {
  console.log(toggle);
  if(toggle){
    return  (
        <li>

          <div style={{textDecoration: completed ? 'line-through' : 'none', marginBottom: '9px', maxWidth: '250px', minWidth: '250px'}} onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
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
  }
  else if (!toggle) {
    return  (
      <li>

        <div style={{textDecoration: completed ? 'line-through' : 'none', marginBottom: '9px', maxWidth: '250px', minWidth: '250px'}} onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
          <button style={{'margin': '5px', display: 'none'}} onClick={deleteTodo}>
            Delete
          </button>
          <button style={{'margin': '5px', display: 'none'}} onClick={markCompleted}>
            Mark Completed
          </button>
          {text}
        </div>

      </li>
    )
  }
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
