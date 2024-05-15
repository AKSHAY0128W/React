import React, { useState } from 'react'

function FormHandling() {

   const handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      const fieldValue = type === 'checkbox' ? checked : value;


      setFormData({
         ...formData,
         [name]: fieldValue
      })
   }

   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      isSubscribe: '',
      role: ''
   })

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log('FormData:', formData)
   }
   return (
      <>
         <h1>Form Handling in React.</h1>

         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="username">UserName:</label>
               <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Enter your username'
                  value={formData.username}
                  onChange={handleChange}
               />
            </div>
            <div>
               <label htmlFor="email">Email:</label>
               <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
               />
            </div>
            <div>
               <label htmlFor="password">Password:</label>
               <input
                  type='text'
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={handleChange}
               />
            </div>
            <div>
               <label htmlFor="isSubscribe">Subscribe:</label>
               <input
                  type='checkbox'
                  id='isSubscribe'
                  name='isSubscribe'
                  value={formData.isSubscribe}
                  onChange={handleChange}
               />
            </div>
            <div>
               <label htmlFor="role">Role:</label>
               <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
               >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="guest">Guest</option>
               </select>

               <button type='submit'>Submit</button>
            </div>
         </form>
      </>
   )
}

export default FormHandling
