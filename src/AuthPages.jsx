import { Outlet, Link } from 'react-router-dom'
import authImg from './assets/images/auth-img.png'


const AuthPages = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="auth-bg">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-xl-3 col-lg-4">
                        <div className="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                            <div className="text-white-50">
                                <h3><Link to="/" className="text-white"><i className="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"></i> Startduck AI</Link></h3>
                                {/* <p className="font-size-16">Startduck AI - Chat App</p> */}
                            </div>
                            <div className="mt-auto">
                                <img src={authImg} alt="" className="auth-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="authentication-page-content">
                            <div className="d-flex flex-column h-100 px-4 pt-4">
                                <Outlet />
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="text-center text-muted p-4">
                                            <p className="mb-0">&copy; {currentYear} Startduck AI <i className="mdi mdi-heart text-danger"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthPages;