const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        showButtons: false
      }
    case 'TOGGLE_TODO':
    console.log(action.id);
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'TOGGLE_BUTTONS':
    if (state.id !== action.id) {
      return state
    }
    return Object.assign({}, state, {
      showButtons: !state.showButtons
    })
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
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE':
      return state.filter((el,idx)=>{
        if(action.id !== el.id){
          return el
        }
      })
    case 'TOGGLE_BUTTONS':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
