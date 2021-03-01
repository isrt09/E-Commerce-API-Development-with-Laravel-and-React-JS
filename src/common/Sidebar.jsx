import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>                
                 <aside class="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" class="brand-link">
                        <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" />
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    <div class="sidebar">
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                            <img src="assets/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div class="info">
                            <a href="#" class="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                    </div>
                    <nav class="mt-2">                    
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item has-treeview menu-open">
                                <a href="#" class="nav-link active"><i class="nav-icon fas fa-tachometer-alt"></i>                            
                                    <p>Dashboard</p>                                                                                            
                                </a>
                            </li>                                                                                
                            <li class="nav-item has-treeview">                                
                                <a href="#" class="nav-link"><i class="nav-icon fas fa-copy"></i>
                                    <p>Person<i class="right fas fa-angle-left"></i></p>                            
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/charts/chartjs.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Add Person</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/charts/flot.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Edit Person</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                    <a href="pages/charts/inline.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>View Person</p>
                                    </a>
                                </li>
                                </ul>
                            </li>                            
                            <li class="nav-header">ADMIN</li>
                            <li class="nav-item">
                                <a href="pages/calendar.html" class="nav-link">                                
                                    <i class="nav-icon far fa-circle text-danger"></i><p>Log Out</p>                                                                   
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/calendar.html" class="nav-link">                                
                                <i class="nav-icon far fa-circle text-warning"></i><p>CHange Password</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/calendar.html" class="nav-link">                                
                                <i class="nav-icon far fa-circle text-success"></i><p>Settings</p>                                                                   
                                </a>
                            </li>
                        </ul>
                    </nav>
                 </aside>
                
            </div>
        );
    }
}

export default Sidebar;
