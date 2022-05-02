import React, {useContext, useEffect, useState} from "react";
import './task.css';
import {GeneralContext} from "../../context/GeneralContext";
import {TaskCard} from "./TaskCard";

const TasksGrid = () => {

    const {token, userName} = useContext(GeneralContext);

    const [cards, setCards] = useState();

    useEffect(() => {

        const fetchData = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': token}
            };

            const response = await fetch(`http://localhost:8080/api/v1/task/${userName}/all`, requestOptions);

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


    const isData = cards.length > 0;
    return (
        <div className="content">
            {
                isData ? (
                    cards.map((card) => {
                        return (
                            <TaskCard el={card}/>
                        );
                    })) : (
                    <div className="position-fixed-center">
                        <i className="bi bi-clipboard2-x fa-3x"/>
                        <p>There are no tasks</p>
                    </div>
                )
            }
        </div>
    );
};

export default TasksGrid;
