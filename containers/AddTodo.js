import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const styles = {
  submit:{
    position: 'absolute',
    top: '80',
    left: '80'
    // marginTop: "-300px",
  },
  input: {
    width: '230px',
    height: '30px'
  }
}

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={styles.submit}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }}  style={styles.input}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
