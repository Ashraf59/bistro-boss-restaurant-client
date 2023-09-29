import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const {data: users = [],} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
       
        <div>
            <h2>This All Users page</h2>
            {users.length}
        </div>
    );
};

export default AllUsers;