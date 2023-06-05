import axios from "axios"
import { useState } from "react"
import { URL_API } from "../../url"


const useUserCrud = () => {

const [users, setUsers] = useState()

const url = URL_API.url

//GET

const getAllUsers = () => {
axios.get(`${url}/users`)

.then(res => setUsers(res.data))
.catch(err => console.log(err))

}


//POST
const createNewUsers = (data) => {
    axios.post(`${url}/users`, data)
    .then(res => {
    console.log(res.data)
    getAllUsers()
    })
    .catch(err => console.log(err))
}


//DELETE

const deleteUserById = id => {
    const urlDelete = `${url}/users/${id}/`;
    axios.delete(urlDelete)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

//UPDATE

const updateUserById = (id, data) => {
    const urlUpdate = `${url}/users/${id}/`;
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