import { useMemo } from "react";
import img4 from './../../assets/images/small/img-4.jpg'
import avatar1 from './../../assets/images/users/user-dummy-img.jpg'
import useUsersMeStore from "../../store/useUserMeStore.js"
import { useShallow } from 'zustand/react/shallow'

const formatISODate = (isoDateString) => {
    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

const UsersMeCard = () => {
    const { users_me } = useUsersMeStore(useShallow((state) =>
    ({
        users_me: state.users_me,
    })
    )
    );

    const lastLogin = useMemo(() => formatISODate(users_me?.last_login), [users_me?.last_login]);
    const userEmail = useMemo(() => users_me?.email || '', [users_me?.email]);
    const userId = useMemo(() => users_me?.id || '', [users_me?.id]);

    return (
        <div>
            <div className="user-profile-img">
                <img src={img4} className="profile-img" style={{ height: "160px" }} alt="" />
                <div className="overlay-content">
                    <div>
                        <div className="user-chat-nav p-2 ps-3">
                            <div className="d-flex w-100 align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="text-white mb-0">My Profile</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                <div className="mb-lg-3 mb-2">
                    <img src={avatar1} className="rounded-circle avatar-lg img-thumbnail" alt="" />
                </div>
                <h5 className="font-size-16 mb-1 text-truncate">{userEmail}</h5>
            </div>
            <div className="p-4 profile-desc" data-simplebar>
                <div>
                    <div className="d-flex py-2">
                        <div className="flex-shrink-0 me-3">
                            <i className="bx bx-user align-middle text-muted"></i>
                        </div>
                        <div className="flex-grow-1">
                            <p className="mb-0">User ID: {userId}</p>
                        </div>
                    </div>

                    <div className="d-flex py-2">
                        <div className="flex-shrink-0 me-3">
                            <i className="bx bx-message-rounded-dots align-middle text-muted"></i>
                        </div>
                        <div className="flex-grow-1">
                            <p className="mb-0">{userEmail}</p>
                        </div>
                    </div>

                    <div className="d-flex py-2">
                        <div className="flex-shrink-0 me-3">
                            <i className="bx bx-location-plus align-middle text-muted"></i>
                        </div>
                        <div className="flex-grow-1">
                            <p className="mb-0">Last login: {lastLogin}</p>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
            </div>
        </div>
    );
};

export { UsersMeCard };