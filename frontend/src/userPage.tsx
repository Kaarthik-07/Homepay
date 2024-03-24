import { useNavigate } from "react-router-dom";

interface login{
    isLoggedIn : boolean
}
function UserPage({ isLoggedIn }: login) {
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate('/user');
    }

    return (
        <div>
            <h2 className='text-red-500'>Welcome to User Page!</h2>
        </div>
    );
}

export default UserPage;
