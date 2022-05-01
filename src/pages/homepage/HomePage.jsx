import React from "react";
import {Container} from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import './home-page.css';
import {Header} from "../../components/header/Header";
import TasksGrid from "../../components/task/TasksGrid";

export const HomePage = () => {
    return (

        <Container fluid>
            <Header/>
            <Sidebar/>
            <TasksGrid/>
        </Container>
    );
}
