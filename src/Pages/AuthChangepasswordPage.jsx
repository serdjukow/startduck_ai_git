import avatar1 from './../assets/images/users/avatar-1.jpg'
import PasswordCangeForm from './../components/PasswordChangeForm.jsx'
import useUsersMeStore from "./../store/useUserMeStore.js"
import { useShallow } from 'zustand/react/shallow'

const AuthChangepasswordPage = () => {
    const { users_me } = useUsersMeStore(useShallow((state) =>
    ({
        users_me: state.users_me,
    })));

    return (
        <div className="row justify-content-center my-auto">
            <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="py-md-5 py-4">
                    <div className="text-center mb-5">
                        <h3>Change Password</h3>
                    </div>
                    <div className="user-thumb text-center mb-4">
                        <img src={avatar1} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                        <h5 className="font-size-15 mt-3">{users_me?.email || ''} </h5>
                    </div>
                    <PasswordCangeForm />
                </div>
            </div>
        </div>
    )
}

export default AuthChangepasswordPage;