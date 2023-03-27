import './MyDataWithProps.css';

const MyDataWithProps = ({name, course, university}) => {
    return (
        <div className='MyDataWithProps'>
            <h3>Nome: {name}</h3>
            <h3>Curso: {course}</h3>
            <h3>Universidade: {university}</h3>
        </div>
    );
}

export default MyDataWithProps;