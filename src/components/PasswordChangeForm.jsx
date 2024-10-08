import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import useAuthStore from './../store/useAuthStore.js';
import { HOME_ROUTE } from "./../utils/consts"
import { useShallow } from 'zustand/react/shallow'

const PasswordCangeForm = () => {
    const navigate = useNavigate();
    const { changePassword, isLoading } = useAuthStore(
        useShallow((state) =>
        ({
            changePassword: state.changePassword,
            changePassword: state.changePassword
        }))
    );
    const { handleSubmit, control, formState: { errors } } = useForm({ mode: 'onChange' });
    const [isPass, setIsPass] = useState(true);

    const onSubmit = useCallback((data) => {
        changePassword(data);
    }, [changePassword]);

    const handleCancel = useCallback(() => {
        navigate(HOME_ROUTE);
    }, [navigate]);

    const togglePasswordVisibility = useCallback(() => {
        setIsPass((prev) => !prev);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="oldpassword-input" className="form-label">Old Password</label>
                <Controller
                    name="oldPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Old Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long',
                        },
                    }}
                    render={({ field }) => (
                        <>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                    {...field}
                                    id="oldpassword-input"
                                    type={isPass ? 'password' : 'text'}
                                    className="form-control"
                                    placeholder="Enter Old Password"
                                    suggested="current-password"
                                />
                                <button onClick={togglePasswordVisibility}
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                    type="button" id="password-addon">
                                    <i className="ri-eye-fill align-middle"></i>
                                </button>
                            </div>
                            {errors.oldPassword && (
                                <div className="text-danger">{errors.oldPassword.message}</div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="mb-3 position-relative auth-pass-inputgroup">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <Controller
                    name="newPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'New Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long',
                        },
                    }}
                    render={({ field }) => (
                        <>
                            <input
                                {...field}
                                id="newpassword-input"
                                type={isPass ? 'password' : 'text'}
                                className="form-control"
                                placeholder="Enter New Password"
                                suggested="new-password"
                            />
                            {errors.newPassword && (
                                <div className="text-danger">{errors.newPassword.message}</div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmpassword-input" className="form-label">Confirm New Password</label>
                <Controller
                    name="newPasswordConfirm"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Confirm Password is required',
                        validate: (value, context) => value === context.newPasswordConfirm || "Passwords don't match",
                    }}
                    render={({ field }) => (
                        <>
                            <input
                                {...field}
                                id="newPasswordConfirm"
                                type={isPass ? 'password' : 'text'}
                                className="form-control"
                                placeholder="Enter Confirm Password"
                                suggested="confirmp-new-password"
                            />
                            {errors.newPasswordConfirm && (
                                <div className="text-danger">{errors.newPasswordConfirm.message}</div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="text-center mt-4">
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary w-100" type="submit">
                            {isLoading ? 'Loading…' : 'Save'}
                        </button>
                    </div>
                    <div className="col-6">
                        <button onClick={handleCancel} className="btn btn-light w-100" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PasswordCangeForm