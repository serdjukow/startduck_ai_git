import { useState } from 'react'
import { Link } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify"
import {
    AUTH_RECOVERPW_ROUTE,
} from "./../utils/consts"
import useAuthStore from '../store/useAuthStore.js';
import { loginFn } from "./../services/AuthService.js"
import { useUsersQuery } from './../hooks/useUsersQuery.js'
import { useShallow } from 'zustand/react/shallow'


const AuthLoginPage = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });
    const [isPass, setIsPass] = useState(true)
    const { setTokens, setAuth } = useAuthStore(useShallow((state) =>
    ({
        setTokens: state.setTokens,
        setAuth: state.setAuth
    }))

    );
    const { refetch } = useUsersQuery()

    const loginMutation = useMutation({
        mutationFn: async (credentials) => {
            const response = await loginFn(credentials);
            return response.data;
        },
        onSuccess: (data) => {
            refetch()
            setTokens(data);
            setAuth(true)
            toast.success("You successfully logged in!")
        },
        onError: (error) => {
            toast.error(error.message, { position: "top-right" })
            clearTokens()
        },
    });

    const handleLogin = (formData) => loginMutation.mutate(formData)

    return (
        <div className="row justify-content-center my-auto">
            <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="py-md-5 py-4">
                    <div className="text-center mb-5">
                        <h3>Welcome Back !</h3>
                        <p className="text-muted">Sign in to continue to Chat App.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Email required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Please enter a valid email address',
                                    },
                                }}
                                render={({ field }) => (
                                    <>
                                        <input
                                            {...field}
                                            id="email"
                                            type='text'
                                            className="form-control"
                                            placeholder="Enter Email"
                                        />
                                        {errors.email && (
                                            <div className="text-danger">{errors.email.message}</div>
                                        )}
                                    </>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            {/* <div className="float-end">
                                <Link to={AUTH_RECOVERPW_ROUTE} className="text-muted">Forgot password?</Link>
                            </div> */}
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Password required'
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <input
                                                {...field}
                                                id="password"
                                                type={isPass ? 'password' : 'text'}
                                                className="form-control"
                                                placeholder="Enter Password"
                                            />
                                            {errors.oldPassword && (
                                                <div className="text-danger">{errors.oldPassword.message}</div>
                                            )}
                                        </>
                                    )}
                                />
                                <button onClick={() => setIsPass(!isPass)} className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon">
                                    <i className="ri-eye-fill align-middle"></i>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                            >
                                {loginMutation.status === 'pending' ? 'Loading…' : 'Log In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthLoginPage;