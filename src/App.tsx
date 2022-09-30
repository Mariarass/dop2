import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todus, setTodos] = useState<PropsType[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])
    const onClickHandler = () => {
        setTodos([])
    }
    return (
        <div className="App">
            <button onClick={onClickHandler}>
                new post
            </button>
            <ul>


                {todus.map((el: PropsType) => {
                    return (
                        <li>
                            <span>{el.id} - </span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>

        </div>
    );
}

export default App;
