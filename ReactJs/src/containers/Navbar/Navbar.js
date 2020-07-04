import React, { useState } from 'react';
import {  CDropdownItem,CDropdownToggle,CDropdown,CDropdownMenu,
  CNavbar,CToggler,CNavbarBrand,CCollapse,CNavbarNav,CNavLink,CForm,CInput,CButton
} from '@coreui/react';
import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from '../index'
const Navbar = ()=> {

 const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
      <CNavbar expandable="sm" color="info" >
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
      <CNavbarBrand>
        NavbarBrand
      </CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink>Home</CNavLink>
          <CNavLink>Link</CNavLink>
        </CNavbarNav>
        <CNavbarNav>
          <CDropdown
            inNav
          >
            <CDropdownToggle color="primary">
              Lang
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>EN</CDropdownItem>
              <CDropdownItem>ES</CDropdownItem>
              <CDropdownItem>RU</CDropdownItem>
              <CDropdownItem>FA</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
        <CNavbarNav className="ml-auto">
          <CForm inline>
            <CInput
              className="mr-sm-2"
              placeholder="Search"
              size="sm"
            />
            <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
          </CForm>

        </CNavbarNav>
      </CCollapse>
    </CNavbar>
      </div>
    );
}

export default Navbar;
