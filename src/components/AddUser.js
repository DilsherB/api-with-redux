import React from 'react'

const AddUser = () => {
  return (
    <div>
      <form className='d-flex w-50 mx-auto flex-column gap-2'>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='age' />
        <input type='text' placeholder='gender' />
        <select>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
        </select>
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default AddUser
