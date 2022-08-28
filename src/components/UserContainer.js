import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";


const UserContainer = () => {
    const userData = useSelector((state) => state.user);
    const { users, error, loading} = userData;
    const dispatch = useDispatch();
    console.log(users)

    useEffect (()=> {
        dispatch(fetchUsers())
    }, []);

    const  renderUser = () => {
        if(loading) return <p>Loading ...</p>
        if(!loading && error) <p>{error}</p>
        if(!loading && !error && userData && users.length) 
            return(
                <div>
                    <h2>Users List : </h2>
                    {users.map((user) => (
                        <p key={user.id}>{user.name}</p>
                    ))}
                </div>
            )
    }
    return ( 
        // <div>
        //     {loading ? (
        //         <p>loading ...</p>
        //     ) : error ? (
        //         <p>{error}</p>
        //     ) : (
        //         userData && users && users.length && (
        //         <div>
        //            <h2>userList</h2> 
        //            {users.map((user) => (
        //             <p key={user.id}>{user.name}</p>
        //            ))}
        //         </div>
        //         )
        //     )
        //     } 
        // </div>
        <div>
            uses ...r
            {renderUser()}
        </div>
     );
}
 
export default UserContainer;