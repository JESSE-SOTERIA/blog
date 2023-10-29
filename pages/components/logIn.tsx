import React, {useState, ChangeEvent} from 'react'

interface FormProps{
  handleLogin: ()=> void;
  isLoggedIn: boolean
}

const Form: React.FC<FormProps> = (props) =>{
  
  const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
  })
  
function handleChange(event: ChangeEvent<HTMLInputElement>){
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
  console.log(formData);
}

interface checkAdmin{
  name: string,
  phone: string,
  email: string
}

const admin: checkAdmin = {
  name: 'Jesse Soteria',
  phone: '0111931212',
  email: 'soteria@gmail.com'
} 

  function handleLogin(event:React.FormEvent<HTMLFormElement>){
      event.preventDefault()
      if (
        formData.name === admin.name &&
        formData.phone === admin.phone &&
        formData.email === admin.email
      ){
      props.handleLogin()
      }else{
        alert("only admins are allowed at this point")
      }    
  }
  
  return(


      <div className="flex flex-col">
        <form action="" className = " bg-custom-dark grid grid-cols-6 grid-rows-5 gap-4 max-w-md h-1/3 p-5" onSubmit={handleLogin}>
        <h1 className='col-start-5 text-center text-custom-beige '>JOIN</h1>
        <label htmlFor=""className='justify-self-end col-span-3 text-custom-beige'>name:</label>
        <input type="text" name = "name" className='focus:outline-none focus:border-custom-pink focus:ring-1  focus:ring-custom-pink bg-custom-beige text-custom-dark h-7 p-2 rounded-sm  col-span-3' onChange={handleChange} />
        <label htmlFor=""className='justify-self-end col-span-3 text-custom-beige'>phone:</label>
        <input type="text" name = "phone" className="col-span-3 p-2 text-custom-dark focus:outline-none focus:border-custom-pink focus:ring-1 focus:ring-custom-pink h-7 rounded-sm bg-custom-beige" onChange={handleChange} />
        <label htmlFor=""className='justify-self-end col-span-3 text-custom-beige'>e-mail:</label>
        <input type="e-mail" name = "email" className=" h-7 p-2 focus:ring-1 focus:outline-none focus:ring-custom-pink bg-custom-beige text-custom-dark col-span-3 rounded-sm" onChange={handleChange} />
        <button  type = 'submit' className = ' bg bg-custom-pink rounded-md text-custom-dark col-start-5 h-5 text-sm'>Join</button>
      </form>
      
      </div>
    )
}
export default Form