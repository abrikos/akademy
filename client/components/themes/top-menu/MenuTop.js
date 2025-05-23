import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown,
} from "reactstrap";
import {A, navigate, usePath} from "hookrouter";
import "client/components/themes/top-menu/navbar.sass"
import logo from "client/images/logo-text.svg"
import YouTube from "client/images/youtube.svg"
import Instagram from "client/images/instagram.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function MenuTop(props) {
    const [menuPulled, pullMenu] = useState(false);
    const currentPath = usePath();

    function isActive(path) {
        return path === currentPath;
    }

    return <div>

        <Navbar light expand="xl" className="top-menu">
            <NavbarBrand href='#' onClick={e => navigate('/')} className='mr-auto site-logo'>
                <img src={logo} alt="logo" className="top-logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={e => pullMenu(!menuPulled)} className="dark"/>
            <Collapse isOpen={menuPulled} navbar>
                <Nav className="m-auto" navbar>
                    {props.items.map((item, i) => {
                        if (item.hidden) return <span key={i}></span>;
                        return item.items ? <UncontrolledDropdown nav inNavbar key={i}>
                                <DropdownToggle nav caret>
                                    {item.label}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {item.items.map((itemSub, i) => {
                                        const ps = itemSub.path ? {href: itemSub.path} : itemSub.onClick ? {href: '#', onClick: itemSub.onClick} : null
                                        return <DropdownItem key={i} disabled={!ps}>
                                            {ps ? <A {...ps} className={itemSub.className}>{itemSub.label}</A> : itemSub.label}
                                        </DropdownItem>
                                    })}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            :
                            <NavItem key={i} active={isActive(item.path)}>
                                <A href={item.path || '#'} onClick={item.onClick} className={'nav-link'}>{item.label}</A>
                            </NavItem>
                    })}


                    {/*<UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {t('Language')}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => langSwitch('ru')}>
                                    RU
                                </DropdownItem>
                                <DropdownItem onClick={() => langSwitch('en')}>
                                    EN
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>*/}

                </Nav>
                <Nav className="right-menu">
                    <NavItem >
                        <A href="/search" className={'nav-link'}><span role="img" aria-label="Search"><FontAwesomeIcon icon={faSearch}/></span></A>
                    </NavItem>
                    <NavItem className="d-flex align-items-center">
                        <span id="google_translate_element"></span>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
}

MenuTop.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string
};
