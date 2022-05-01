import React, {useContext, useEffect} from "react";
import './task.css';
import {GeneralContext} from "../../context/GeneralContext";

export  const TaskCard = ({el}) => {

    const {favouritesList, setFavouritesList, token} = useContext(GeneralContext);

    const handleDelete = async (event) => {

        const wrapper = event.currentTarget.parentNode.parentElement;

        const requestOptions = {
            method: 'DELETE',
            headers: {'Authorization': token}
        };

        const response = await fetch(`http://localhost:8080/api/v1/task/delete/${el.taskId}`, requestOptions);

        if (response.ok) {
            wrapper.style.display = "none";
        }
    };

    const handleAddToFavorites = (event) => {
        event.currentTarget.style.display = 'none';
        event.currentTarget.parentElement.querySelector('i.icon-star-enabled').style.display = 'inline'

        if(!favouritesList) {
            setFavouritesList([]);
        }
        setFavouritesList([...favouritesList, el]);
    }

    const handleRemoveFromFavorites = (event) => {
        event.currentTarget.style.display = 'none';
        event.currentTarget.parentElement.querySelector('i.icon-star-disabled').style.display = 'inline'

        setFavouritesList(favouritesList.filter(({taskId}) => taskId !== el.taskId));
    }

    useEffect(() => {
        favouritesList.forEach(({taskId}) => {
            if(taskId === el.taskId) {
                document.querySelector(`div[data-key="${taskId}"] i.icon-star-enabled`).style.display = 'inline';
                document.querySelector(`div[data-key="${taskId}"] i.icon-star-disabled`).style.display = 'none';
            }
        })
    }, []);

    return (
        <div className="card" style={{width: '18rem'}} data-key={el.taskId}>
            <div className="card-header">
                {el.taskTitle}
                <i className="bi bi-trash icon-delete" onClick={handleDelete}/>
                <i className="bi bi-star icon-star icon-star-disabled" onClick={handleAddToFavorites}/>
                <i className="bi bi-star-fill icon-star icon-star-enabled" onClick={handleRemoveFromFavorites}/>
            </div>
            <div className="card-body">
                {el.taskDescription}
            </div>
        </div>
    );
}
