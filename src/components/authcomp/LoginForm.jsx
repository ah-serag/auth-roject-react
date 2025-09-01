import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSigninMutation } from '../../Feutures/auths/authApiSlice'
import Cookie from 'js-cookie'
import { useDispatch } from 'react-redux'
import { SetInfoUser } from '../../slices/userInfoSlice'

const LoginForm = () => {
  const [signin, { isError, error, isLoading, isSuccess }] = useSigninMutation()
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // on submit
  const onsubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await signin(formValues)

      const accessToken = data.accessToken
      if (accessToken) {
        Cookie.set('accessToken', accessToken)
        setFormValues({ email: '', password: '' })
        dispatch(SetInfoUser({ name: data.name, email: data.email }))
        navigate('/Dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={(e) => onsubmit(e)}
      className="w-[360px] bg-gray-900 rounded-2xl shadow-2xl px-6 py-6 flex flex-col gap-5 border border-gray-800"
    >
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300">
        Welcome Back
      </h1>
      {error && !isLoading && (
        <p className="text-red-500">
          {error?.data?.message || 'Something went wrong'}
        </p>
      )}

      {/* Email */}
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="email" className="text-gray-200 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formValues.email}
          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Enter a valid email address (e.g. user@example.com)"
          className="w-full p-2.5 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="Enter your email"
        />
      </fieldset>

      {/* Password */}
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="password" className="text-gray-200 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formValues.password}
          onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
          minLength={8}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must be at least 8 characters and include letters and numbers"
          className="w-full p-2.5 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="Enter your password"
        />
      </fieldset>

      <button
        type="submit"
        className="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 hover:shadow-lg transition duration-200"
      >
        Login
      </button>

      <p className="text-xs text-gray-400 text-center mt-2">
        Don't have an account?{' '}
        <Link
          to="/auth/register"
          className="text-indigo-400 font-medium hover:underline"
        >
          Create
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
