import { Link } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form';
import {
    AUTTH_LOGIN_ROUTE
} from "./../utils/consts"
import useAuthStore from './../store/useAuthStore.js';
import { useShallow } from 'zustand/react/shallow'

const AuthRecoverpwPage = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });
    const { passwordReset, isLoading } = useAuthStore(useShallow((state) =>
    ({
        passwordReset: state.passwordReset,
        isLoading: state.isLoading
    })));

    return (
        <div className="row justify-content-center my-auto">
            <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="py-md-5 py-4">
                    <div className="text-center mb-5">
                        <h3>Reset Password</h3>
                        <p className="text-muted">Reset Password with Startduck AI.</p>
                    </div>
                    <div className="alert alert-info text-center my-4" role="alert">
                        Enter your Email and instructions will be sent to you!
                    </div>
                    <form onSubmit={handleSubmit(passwordReset)}>
                        <div className="mb-4">
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
                                    }
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

                        <div className="text-center mt-4">
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                            >
                                {isLoading ? 'Loading…' : 'Reset'}
                            </button>
                        </div>
                    </form>
                    <div className="mt-5 text-center text-muted">
                        <p>Remember It ? <Link to={AUTTH_LOGIN_ROUTE} className="fw-medium text-decoration-underline"> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthRecoverpwPage;