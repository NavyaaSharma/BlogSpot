import React, { useState } from 'react';
import {APP_NAME} from '../config'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import {signout,isAuth} from '../actions/auth'
import '../static/css/style.css'
import Search from './blog/Search';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

Router.onRouteChangeStart=url=>NProgress.start()
Router.onRouteChangeComplete=url=>NProgress.done()
Router.onRouteChangeError=url=>NProgress.done()

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="mainNav" expand="md">
        <Link href="/">
            <NavLink style={{cursor:'pointer'}} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >

          <React.Fragment >
              <NavItem>
                <Link href="/blogs" >
                  <NavLink style={{cursor:'pointer'}} className="itemNav">Blogs</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <NavLink style={{cursor:'pointer'}}>Contact</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            
            {!isAuth() && <React.Fragment>
              <NavItem>
                <Link href="/signup">
                <NavLink style={{cursor:'pointer'}} >Signup</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/signin">
                <NavLink style={{cursor:'pointer'}} >Signin</NavLink>
                </Link>
            </NavItem>

        </React.Fragment>}

            {isAuth() && isAuth().role==0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{cursor:'pointer'}}>{isAuth().name}'s Dashboard</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role==1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{cursor:'pointer'}}>{isAuth().name}'s Dashboard</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
              <NavLink style={{cursor:'pointer'}} onClick={()=>signout(()=>{Router.replace('/signin')})}>Signout</NavLink>
              </NavItem>
            )}
             <NavItem>
                <a href="/user/crud/blog" className="btn btn-primary text-light">Write a blog</a>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Header;