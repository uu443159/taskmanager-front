import React, {useContext} from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink, useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";
import {GeneralContext} from "../../context/GeneralContext";

export const Sidebar = () => {

    const { setToken } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        setToken("");
        navigate("/");
    }

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', paddingTop: '5vh'}}>
            <CDBSidebar textColor="black" backgroundColor="lightgray">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        taskManager
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact="true" to="/start" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="home">HOME PAGE</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/today" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="star">TODAY</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/projects" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="clipboard">PROJECTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/settings" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="cog">
                                SETTINGS
                            </CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <Button onClick={handleSignOut} variant="danger">Sign out</Button>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;

