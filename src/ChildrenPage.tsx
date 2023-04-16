import { Outlet } from 'react-router-dom';

const ChildrenPage = () => {
    return (
        <>
            <h1>ChildrenPage</h1>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default ChildrenPage;
