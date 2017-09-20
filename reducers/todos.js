const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      console.log("todo - toggle");
      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'DELETE':
      console.log("delete action from reducer", );
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
    console.log("todos - toggle");
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
