import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams
} from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    console.log(id);
    return <div>test</div>;
};

export default Edit;
