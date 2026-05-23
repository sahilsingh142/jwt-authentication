import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
      
      <div className='w-[90%] md:w-[35%] bg-neutral-900 rounded-2xl shadow shadow-white p-8 text-white'>

        <h1 className='text-3xl font-bold text-center mb-8'>Login</h1>

        <div className='flex flex-col gap-5'>

          <div className='flex flex-col gap-2'>
            <label>Email</label>

            <input
              type='email'
              placeholder='sahil@gmail.com'
              className='w-full px-4 py-3 rounded-xl bg-neutral-300 text-black border-none outline-none focus:outline-none focus:ring-0'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Password</label>

            <input
              type='password'
              placeholder='********'
              className='w-full px-4 py-3 rounded-xl bg-neutral-300 text-black border-none outline-none focus:outline-none focus:ring-0'
            />
          </div>

          <button className='w-full bg-indigo-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-neutral-300 duration-300'>
            Login
          </button>

          <p className='text-center'>Don't have an account?{' '}
            <Link to='/' className='text-blue-400 hover:underline'>Signup</Link>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login
