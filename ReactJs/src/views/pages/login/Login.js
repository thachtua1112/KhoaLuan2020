import React, { useState } from 'react'
import { Link,Redirect } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Axios from 'axios'
import qs from 'qs'
const Login = () => {
  const [name,setname]=useState("");
  const [pass,setPass]=useState("");
  const [isRedirect,setisRedirect]=useState(false);
  const [err,setErr]=useState("");
  const [hidden,setHidden]=useState(true);
  const up_Name = (e) =>
  {
    setname(e.target.value)
  }
  const up_Pass = (e) =>
  {
    setPass(e.target.value)
  }

  const toggleShow = ()=>{
    setHidden(!hidden);
  }
  const On_Login =() =>{
    Axios
    .post("http://localhost:8797/login",qs.stringify( {
     username:name,
     password:pass
    }),{
     headers : {
       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
   }
    })
    .then((res) =>{
      if ("success" === res.data.login) {
        console.log("DANG_NHAP_THANH_CONG");
        localStorage.setItem("token",res.data.accessToken);
        localStorage.setItem("RefreshToken",res.data.refreshToken);
        setisRedirect(true);
        setErr("Đăng nhập thành công");
      }
      else
      {
        setErr(res.data.err);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    if (isRedirect) {
    return <Redirect to='/Dashboard' />
    }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={up_Name} type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={up_Pass} value={pass} type={hidden ? "password" : "text"} placeholder="Password" autoComplete="current-password" />
                      <div className="c-avatar">
                      <CImg onClick={toggleShow}
                        src={'avatars/Eye-512.jpg'}
                        className="c-avatar-img"
                        alt="admin@bootstrapmaster.com"
                      />
                    </div>
                      </CInputGroup>

                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" onClick={On_Login} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      {err}
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
