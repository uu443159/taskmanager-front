import React, {useContext, useEffect, useState} from "react";
import './task.css';
import {GeneralContext} from "../../context/GeneralContext";
import {TaskCard} from "./TaskCard";

export const TasksGrid = () => {

    const context = useContext(GeneralContext);

    const [cards, setCards] = useState();

    useEffect(() => {

        const fetchData = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': context.token}
            };

            const response = await fetch('http://localhost:8080/api/v1/task/all', requestOptions);

            if (response.ok) {
                const data = await response.json();
                setCards(data);
            }
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
                cards.map((card) => {
                    return (
                        <TaskCard el={card}/>
                    );
                })
            }
        </div>
    );
};

export default TasksGrid;
