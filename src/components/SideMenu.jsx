import { useEffect, useCallback, useMemo, memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useShallow } from 'zustand/react/shallow'
import avatar1 from "./../assets/images/users/user-dummy-img.jpg"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    HOME_ROUTE,
    AUTTH_LOGOUT_ROUTE,
    AUTH_CHANGEPASSWORD_ROUTE
} from "./../utils/consts"
import { menuList as menuData } from './../utils/consts';
import useAuthStore from "./../store/useAuthStore.js"
import useThemeStore from "./../store/useThemeStore";

const SideMenu = () => {
    const navigate = useNavigate();
    const { logout, isAuth } = useAuthStore()
    const { toggleTheme, isDarkTheme, setChatTabPaneKey } = useThemeStore(useShallow((state) =>
    ({
        toggleTheme: state.toggleTheme,
        isDarkTheme: state.isDarkTheme,
        setChatTabPaneKey: state.setChatTabPaneKey
    })));

    const handleToggleTheme = useCallback(() => toggleTheme(), [toggleTheme]);
    const handleSetChatTabPaneKey = useCallback((key) => setChatTabPaneKey(key), [setChatTabPaneKey]);
    const handleLogout = useCallback(() => logout(), [logout]);
    const menuList = useMemo(() => menuData, []);


    useEffect(() => {
        if (!isAuth) {
            navigate(AUTTH_LOGOUT_ROUTE)
        }
    }, [isAuth])

    return (
        <>
            <div className="side-menu flex-lg-column">
                { }
                <div className="navbar-brand-box">
                    <Link to={HOME_ROUTE} className="logo">
                        <span className="logo-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z" /></svg>
                        </span>
                    </Link>
                </div>
                <div className="flex-lg-column my-0 sidemenu-navigation">
                    <ul className="nav nav-pills side-menu-nav" role="tablist">
                        {
                            menuList.map((menu, id) => (
                                <li key={id} onClick={() => handleSetChatTabPaneKey('chat')} className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover" data-bs-container=".sidemenu-navigation">
                                    <OverlayTrigger
                                        key={'right'}
                                        placement={'right'}
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                {menu.itemName}
                                            </Tooltip>
                                        }
                                    >
                                        <NavLink to={menu.itemLink} className="nav-link" style={{ cursor: "pointer" }}>
                                            <i className={menu.itemIcon}></i>
                                        </NavLink>
                                    </OverlayTrigger>
                                </li>
                            ))
                        }

                        <li className="nav-item mt-auto" onClick={() => handleToggleTheme()}>
                            <OverlayTrigger
                                key={'right'}
                                placement={'right'}
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                                    </Tooltip>
                                }
                            >
                                <span className="nav-link light-dark" data-bs-html="true" style={{ cursor: "pointer" }}>
                                    <i className='bx bx-moon'></i>
                                </span>
                            </OverlayTrigger>
                        </li>
                        <li className="nav-item dropdown profile-user-dropdown">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle bg-transparent border-0" >
                                    <img src={avatar1} alt="" className="profile-user rounded-circle" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setChatTabPaneKey('chat')} role="button" className="dropdown-item d-flex align-items-center justify-content-between">
                                        Chat
                                        <i className="bx bx-conversation"></i>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => setChatTabPaneKey('profile')} role="button" className="dropdown-item d-flex align-items-center justify-content-between">
                                        Profile
                                        <i className="bx bx-user-circle text-muted ms-1"></i>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => setChatTabPaneKey('settings')} role="button" className="dropdown-item d-flex align-items-center justify-content-between">
                                        Settings
                                        <i className="bx bx-cog text-muted ms-1"></i>
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item href={AUTH_CHANGEPASSWORD_ROUTE} className="dropdown-item d-flex align-items-center justify-content-between">
                                        Change Password
                                        <i className="bx bx-lock-open text-muted ms-1"></i></Dropdown.Item>
                                    <Dropdown.Divider /> */}
                                    <Dropdown.Item onClick={() => handleLogout()} role="button" className="dropdown-item d-flex align-items-center justify-content-between">
                                        Log out
                                        <i className="bx bx-log-out-circle text-muted ms-1"></i>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default memo(SideMenu)