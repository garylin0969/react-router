import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChildrenId from './ChildrenId';
import ChildrenPage from './ChildrenPage';
import ErrorPage from './ErrorPage';
import Fallback from './Fallback';
import Home from './Home';
import OtherPage from './OtherPage';

// 官方建議
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'childrenpage',
                element: <ChildrenPage />,
                children: [
                    {
                        path: ':id',
                        element: <ChildrenId />,
                    },
                ],
            },
        ],
    },
    {
        path: 'otherpage',
        element: <OtherPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </>
    );
}

export default App;
