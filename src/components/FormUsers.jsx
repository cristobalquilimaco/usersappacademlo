import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import "./styles/formUsers.css";
import swal from 'sweetalert';



const FormUsers = ({createNewUsers, updateInfo, updateUserById, setUpdateInfo, setisClose, isClose}) => {

const {register, handleSubmit, reset} = useForm()

useEffect(() => {
reset(updateInfo)
}, [updateInfo])



const submit = data => {
  //update
  if(updateInfo){
    updateUserById(updateInfo.id, data)
    setUpdateInfo()
  
  } else {
    //create
    createNewUsers(data)
    reset(defaultValues)
    swal({
          title:"User created Successfully",
          icon:"success",
          button: "Aceptar",
        });

  }
}

const handleExit = () => {
  setisClose(true)
  reset(defaultValues)

  
}

  return (

    <div className={`form_container  ${isClose && 'form_container_close'}`}>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <h3 className='tittle__user'>{updateInfo ? 'Update Info' : 'Create new users'}</h3>
        <span onClick={handleExit} className='form__exit'>x</span>
      <div className='form__item'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='input__name'{...register('email')} type="email" required id="email" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='input__name'{...register('password')} type="password" required id="password" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='input__name'{...register('first_name')} type="text" required id="first_name" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='input__name'{...register('last_name')} type="text" required id="last_name" />
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor="birthday">Birthdat</label>
        <input className='input__name'{...register('birthday')} type="date" required id="birthday" />
      </div>
      <button onClick={handleExit} className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
    </div>

  )
}

export default FormUsers