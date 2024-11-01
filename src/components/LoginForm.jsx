import React from 'react'

const LoginForm = ({ action, user, setUser, handleClick, loading }) => {

    return (
        <div className='flex justify-center mb-20'>
            <form onSubmit={action} className='flex flex-col space-y-5 text-lg w-80 shadow-2xl p-5 rounded-md'>
                <div className='flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} className='text-lg border border-forestGreen rounded-md p-2' type="email" name="" id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} className='text-lg border border-forestGreen rounded-md p-2' type="password" name="" id="" />
                </div>
                <input type="submit" className='p-2 px-8 rounded-lg bg-forestGreen text-light md:p-2 md:px-5 md:rounded-lg sm:text-sm hover:bg-[white] hover:text-forestGreen' value="Login" />
            </form>
        </div>
    )
}

export default LoginForm
