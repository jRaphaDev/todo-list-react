import React from 'react'
import PropTypes from 'prop-types'

export default Todo = ({ onClick, completed, text }) => (
    <li onClick = {onClick} style = {{ textDecoration: completed ? 'line-througth' : 'none' }}> 
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}