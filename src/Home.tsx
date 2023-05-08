import { Outlet } from 'react-router-dom';

const Home = () => {
    const arr = [1, 2, 3];
    const brr = [1, 2, 3];
    console.log(new Array(6).fill(5, 2, 4));

    return (
        <>
            <h1>Home</h1>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Home;
