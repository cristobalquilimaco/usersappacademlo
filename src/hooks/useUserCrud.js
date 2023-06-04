import axios from "axios"
import { useState } from "react"


const useUserCrud = () => {

const [users, setUsers] = useState()

const url = "https://my-crud-academlo.onrender.com/api/v1"

//GET

const getAllUsers = () => {
axios.get(`${url}/users`)

.then(res => setUsers(res.data))
.catch(err => console.log(err))

}


//POST
const createNewUsers = data => {
    axios.post(`${url}/users`, data)
    .then(res => {
    console.log(res.data)
    getAllUsers()
    })
    .catch(err => console.log(err))
}


//DELETE

const deleteUserById = id => {
    const urlDelete = `${url}/users${id}/`
    axios.delete(urlDelete)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

//UPDATE

const updateUserById = (id, data) => {
    const urlUpdate = `${url}/users${id}/`
    axios.patch(urlUpdate, data)
    .then(res => getAllUsers())
    .catch(err => console.log(err))
}




return {

    users, 
    getAllUsers,
    createNewUsers,
    deleteUserById,
    updateUserById
}

}

export default useUserCrud