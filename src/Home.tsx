import { Outlet } from 'react-router-dom';

const Home = () => {
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
