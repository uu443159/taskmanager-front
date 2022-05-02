import './settings-page.css';
import {GeneralContext} from "../../context/GeneralContext";
import {Container} from "react-bootstrap";
import React, {useContext} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {Header} from "../../components/header/Header";

export const SettingsPage = () => {

    const context = useContext(GeneralContext);

    return (

        <Container fluid>
            <Header/>
            <Sidebar/>
            <div className="position-fixed-center">
                <i className="bi bi-gear-wide-connected fa-3x"/>
                <p>Settings page</p>
            </div>
        </Container>
    );
}
