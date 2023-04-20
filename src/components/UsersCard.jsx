import React from 'react'

const UsersCard = ({ user }) => {
  return (
    <article>
        <h1>{user.first_name} {user.last_name}</h1>

        <ul>
            <li><span>Email: </span><span>{user.email}</span></li>
            <li><span>Birtday </span><span>{user.birthday}</span></li>
        </ul>

    <button><i className='bx bxs-trash'></i></button>
    <button><i className='bx bx-edit-alt'></i></button>
    
    </article>
  )
}

export default UsersCard