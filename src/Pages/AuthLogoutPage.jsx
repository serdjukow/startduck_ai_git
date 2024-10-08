import { Link } from "react-router-dom"
import { AUTTH_LOGIN_ROUTE } from "./../utils/consts"

const AuthLogoutPage = () => {

    return (
        <div className="row justify-content-center my-auto">
            <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="py-md-5 py-4 text-center">
                    <div className="avatar-xl mx-auto">
                        <div className="avatar-title bg-primary-subtle text-primary h1 rounded-circle">
                            <i className="bx bxs-user"></i>
                        </div>
                    </div>
                    
                    <div className="mt-4 pt-2">
                        <h5>You are Logged Out</h5>
                        <p className="text-muted font-size-15">Thank you for using <span className="fw-semibold text-reset">Startduck AI - Chat App</span></p>
                        <div className="mt-4">
                            <Link to={AUTTH_LOGIN_ROUTE} className="btn btn-primary w-100 waves-effect waves-light">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLogoutPage;