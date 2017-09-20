import React from 'react'
import Footer from './Footer'
import FacebookShare from './FacebookShare'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <FacebookShare />
  </div>
)

export default App
