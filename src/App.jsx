import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud,js'

function App() {



const {
  users, 
  getAllUsers,
  createNewUsers,
  deleteUserById,
  updateUserById
} = useUserCrud()


useEffect(() => {
  getAllUsers()
}, [])


  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        {
          users?.map(user => (
              <UsersCard
              key={user.id}
              user={user}

              />
          ))
        }
      </div>
    </div>
  )
}

export default App
