import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
const desk = require("file-loader!../images/desk.png");
const notepad = require("file-loader!../images/notepad.png")
const styles = {
  background:{
    margin: -8,
    position: 'relative'
  },
  image: {
    // position: 'relative',
    zIndex: '-5',
    minWidth: '830px',
    minHeight: '560px',
    width: '100%',
    height: '100vh',
    marginBottom: '-12px'
  },
  notepad: {
    position: 'absolute',
    zIndex: '0',
    width: '400px',
    height: '500px',
    top: '50px'

  }
}

const App = () => (
  <div style={styles.background}>
    <img src={desk} style={styles.image} />
    <div>
      <img src={notepad} style={styles.notepad}/>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

export default App
