import React, { PropTypes } from 'react'

const Todo = ({ markCompleted, completed, text }) => (
  <li>

    <div
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      >
        <button style={{'margin': '5px'}}>
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
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
