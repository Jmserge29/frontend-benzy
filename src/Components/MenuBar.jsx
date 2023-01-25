import { Link } from 'react-router-dom'

const MenuBar = () => {

    return (<>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                    <li className="nav-item">
                    <Link to='/' className="nav-link">
                            <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>

                    </li>
                <li className="nav-item">
                    <Link to='/courses' className="nav-link">
                        <i className="icon-layout menu-icon"></i>
                        <span className="menu-title">Courses</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/search' className="nav-link">
                        <i className="icon-columns menu-icon"></i>
                        <span className="menu-title">Search</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/admin' className="nav-link">
                            <i className="icon-head menu-icon"></i>
                            <span className="menu-title">Administrator</span>
                        </Link>

                    </li>
                    <li className="nav-item">
                    <Link to='/moderator' className="nav-link">
                            <i className="icon-head menu-icon"></i>
                            <span className="menu-title">Moderator</span>
                        </Link>

                    </li>
                <li className="nav-item">
                    <Link to='/estadistics' className="nav-link">
                        <i className="icon-bar-graph menu-icon"></i>
                        <span className="menu-title">Estadistics</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="icon-grid-2 menu-icon"></i>
                        <span className="menu-title">Tables</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                        <i className="icon-contract menu-icon"></i>
                        <span className="menu-title">Icons</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="icons">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link">
                        <i className="icon-head menu-icon"></i>
                        <span className="menu-title">Admin</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                        <i className="icon-ban menu-icon"></i>
                        <span className="menu-title">Error pages</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="error">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/documentation/documentation.html">
                        <i className="icon-paper menu-icon"></i>
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </nav>
    </>);
}

export default MenuBar;