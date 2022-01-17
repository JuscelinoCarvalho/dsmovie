import FormCard from 'components/FormCard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useParams } from 'react-router-dom';


function Form() {

    const params = useParams();

    return(
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form;