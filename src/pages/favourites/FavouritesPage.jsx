import React, {useContext} from "react";
import {GeneralContext} from "../../context/GeneralContext";
import {TaskCard} from "../../components/task/TaskCard";
import {Container} from "react-bootstrap";
import {Header} from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const FavouritesPage = () => {

    const {favouritesList, userName} = useContext(GeneralContext);


    const isData = favouritesList.length > 0;

    return (
        <Container fluid>
            <Header/>
            <Sidebar/>
            <div className="content">
                {
                    isData ? (
                        favouritesList
                            .filter((item) => item.userName === userName)
                            .map((card) => {
                            return (
                                <TaskCard el={card} toggleStar={"off"} key={card.taskId}/>
                            );
                        })) : (
                        <div className="position-fixed-center">
                            <i className="bi bi-clipboard2-x fa-3x"/>
                            <p>There are no tasks</p>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default FavouritesPage;
