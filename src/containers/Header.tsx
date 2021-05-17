import React from "react";
import Menu from "../components/Menu";
import MenuService from "../service/MenuService";
import { MenuType } from "../types";

type Props = {};
type State = {
    menuItems:MenuType[];
};

class Header extends React.Component<Props, State> {
    state: State = { menuItems: []};

    async componentDidMount() {
        try {
            const { data } = await MenuService.getMenuData();
            this.setState({ menuItems: data });
        } catch (e) {
            console.log("error", e);
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        ArshadShops
                    </a>
                    <button
                        className="navbar-toggler" 
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>  
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportContent">
                        <Menu menuData={this.state.menuItems}/>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                        {this.props.children}
                    </div>
                </div>
            </nav>
        )
    }
};

export default Header;