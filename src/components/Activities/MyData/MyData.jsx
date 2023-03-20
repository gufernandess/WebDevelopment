import React from 'react';
import './MyData.css';

const MyData = () => {
    return (
        <div className='MyData'>
            <h1>Gustavo Fernandes</h1>
            <h1>Ciência da Computação</h1>
            <h1>Universidade Federal do Ceará (UFC)</h1>
        </div>
    );
}

function MyDataWithFunction() {
    return (
        <div className='MyDataWithFunction'>
            <h1>Gustavo Fernandes</h1>
            <h1>Ciência da Computação</h1>
            <h1>Universidade Federal do Ceará</h1>
        </div>
    );
}

class MyDataWithClass extends React.Component {
    render() {
        return (
    <div className='MyDataWithCLass'>
        <h1>Gustavo Fernandes</h1>
        <h1>Ciência da Computação</h1>
        <h1>Universidade Federal do Ceará</h1>
    </div>
        );
    }
}

const MyDataWithoutReturn = () => 
    <div className='MyDataWithoutReturn'>
        <h1>Gustavo Fernandes</h1>
        <h1>Ciência da Computação</h1>
        <h1>Universidade Federal do Ceará</h1>
    </div>

export {
    MyData,
    MyDataWithFunction,
    MyDataWithClass,
    MyDataWithoutReturn
}