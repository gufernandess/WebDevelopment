const SaveData = () => {
    const saveData = () => {
        const student = {
            id: "000000",
            name: "John Doe",
            course: "Computer Science",
        }
        // sessionStorage.setItem(student.id, JSON.stringify(student));
        localStorage.setItem(student.id, JSON.stringify(student));
    }

    return(
        <>
            <h1 className="">Salvando dados</h1>
            {saveData()}
        </>
    );
}

const LoadingData = () => {
    const loadingData = () => {
        const student = JSON.parse(localStorage.getItem("000000"));

        return(
            <>
                <h1 className="">Carregando dados</h1>
                <h3 className="">Name: {student.name}</h3>
                <h3 className="">Course: {student.course}</h3>
            </>
        );
    }

    return(
        <>
            <h1 className="">Carregando dados...</h1>
            {loadingData()}
        </>
    );
}

export { SaveData, LoadingData };