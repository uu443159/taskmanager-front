import React, {useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import './task-card.css';
import {GeneralContext} from "../../context/GeneralContext";

export const TaskCards = () => {

    const context = useContext(GeneralContext);

    const [cards, setCards] = useState();

    useEffect( () => {

        const fetchData = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': context.token}
            };
            const response = await fetch('http://localhost:8080/api/v1/task/all', requestOptions);
            const data = await response.json();
            setCards(data);
        };

        fetchData()
            .catch(console.error);
    }, []);

    if (cards === undefined) {
        return <>Still loading...</>;
    }

    return (
        <div className="content">
            {
                cards.map((el) => {
                    return (
                        <div className="card" style={{width: '18rem'}} key={el}>
                            <div className="card-header">
                                {el.taskTitle}
                            </div>
                            <div className="card-body">
                                {el.taskDescription}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default TaskCards;
