import React, { PropTypes } from 'react'
import Todo from './Todo'

const styles= {
    list: {
      position: 'absolute',
      top: '113px',
      left: '60px',
    }
}


const TodoList = ({ deleteTodo, toggleButtons, todos, onTodoClick }) => (
  <ul style={styles.list}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggle={todo.showButtons}
        markCompleted={() => onTodoClick(todo.id)}
        deleteTodo={()=> deleteTodo(todo.id)}
        toggleButtons={()=> toggleButtons(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
