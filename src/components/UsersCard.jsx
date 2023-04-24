import swal from "sweetalert";
import defaultValues from "../utils/defaultValues";
import "./styles/userCard.css";


const UsersCard = ({ user, deleteUserById, setUpdateInfo, setisClose}) => {

const handleDelete = () =>{
    deleteUserById(user.id)
    swal({
      title:"User delete Successfully",
      icon:"error",
      button: "Aceptar",
    });
}

const handleUpdate = () => {
  setUpdateInfo(user)
  setisClose(false)
  


}




  return (
    <article className='user'>
        <h1 className='user__name'>{user.first_name} {user.last_name}</h1>

        <ul className='user__list'>
            <li className='user__item' ><span className='user__label'>Email: </span><span className='user__valiu'>{user.email}</span></li>
            <li className='user__item'><span className='user__label'>Birtday </span><span className='user__valiu'>{user.birthday}</span></li>
        </ul>
<footer className="userFooter">
<button className='user__btn user__delete user__icon' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
    <button className='user__btn user__update user__icon' onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
</footer>

    
    </article>
  )
}

export default UsersCard