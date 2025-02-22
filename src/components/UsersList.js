import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import User from './User'

function UsersList (props) {
  const list = Object.values(props.users).sort(function (a, b) {
    return (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)
  })
  return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
        {list.map((user, index) => {
          return (
                <User id={user.id} key={user.id} index={index} />
          )
        })}
        </Grid>
  )
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(UsersList)
