import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud.js'
import UsersCard from './components/UsersCard'
import FormUsers from './components/FormUsers'
import defaultValues from './utils/defaultValues'


function App() {

const [updateInfo, setUpdateInfo] = useState()
const [isClose, setisClose] = useState(true)


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

const handleOpenform = () =>{
  setisClose(false)
  reset(defaultValues)
  
  
}

  return (
    <div className="App">
      <header className='app_header'>
      <h1 className='app__title'>Users</h1>
      <button onClick={handleOpenform} className='app__Btn__create'>Create New User</button>
      </header>
      
      <FormUsers
        createNewUsers={createNewUsers}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setisClose={setisClose}
        isClose={isClose}


        />
      <div className='user__container'>
        {
          users?.map(user => (
              <UsersCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setisClose={setisClose}
              isClose={isClose}

              />
          ))
        }
      </div>
    </div>
  )
}

export default App
