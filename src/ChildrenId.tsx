import { useLoaderData, useParams } from 'react-router-dom';

const ChildrenId = () => {
    const params = useParams();
    const childrenData = useLoaderData() as string;
    console.log(params.id);
    return (
        <>
            <p>id: {params.id}</p>
        </>
    );
};

export default ChildrenId;
