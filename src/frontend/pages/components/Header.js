function Header() {
    return (
        <header className="header">
            <div className="header-inner page-container--wide">
                <nav>
                    <div className="column--one">
                        <ul>
                            <li className="header-link">
                                <a href="/login">Explore</a>
                            </li>
                            <li className="header-link" >
                                <a href="/learn">Learn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column--two">
                        <a href="/" className="header-logo-link">
                            <img
                                className="header-logo"
                                src="marsRoverLogo.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="column--three">
                        <ul>
                            <li className="header-link">
                                <a  href="/login">Login</a>
                            </li>
                            <li>
                                <a className="btn btn-cta--emphasis" href="/register">
                                    Get Started
                                    <i className="fas fa-user-astronaut"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
