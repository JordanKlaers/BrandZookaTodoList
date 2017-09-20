import React from 'react'
import FilterLink from '../containers/FilterLink'

const styles ={
  footer:{
    position: "absolute",
    top: '500px',
    marginLeft: '100px'
  }
}


const Footer = () => (
  <p style={styles.footer}>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
