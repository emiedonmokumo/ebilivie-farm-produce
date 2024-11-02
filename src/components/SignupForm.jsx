import React from 'react'

const SignupForm = ({ newUser, setNewUser, action }) => {
    
    return (
        <div className='flex justify-center mb-20'>
            <form onSubmit={action} className='flex flex-col space-y-5 text-lg w-80 shadow-2xl p-5 rounded-md'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[gray]'>Email</label>
                    <input onChange={(e)=> setNewUser({...newUser, email: e.target.value })} value={newUser.email} className='border border-[[#c4c4c4]] rounded-md p-1 text-[16px]' type="email" set name="" id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[gray]'>Password</label>
                    <input onChange={(e)=> setNewUser({...newUser, password: e.target.value })} value={newUser.password} className='border border-[[#c4c4c4]] rounded-md p-1 text-[16px]' type="password" name="" id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[gray]'>Confirm Password</label>
                    <input onChange={(e)=> setNewUser({...newUser, confirmPassword: e.target.value })} value={newUser.confirmPassword} className='border border-[[#c4c4c4]] rounded-md p-1 text-[16px]' type="password" name="" id="" />
                </div>
                <input type="submit" className='p-2 px-8 rounded-lg bg-[#008000] text-white md:p-2 md:px-5 md:rounded-lg sm:text-sm hover:bg-[white] hover:text-[#008000]' value="Sign up" />
            </form>
        </div>
    )
}

export default SignupForm
