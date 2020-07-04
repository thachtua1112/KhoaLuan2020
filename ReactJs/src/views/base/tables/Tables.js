import React, {useState, useEffect} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CSelect,
  CInputGroup,CInputGroupPrepend,CInputGroupText,CInput, CButton,CCollapse

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useHistory} from 'react-router-dom'

import axios from 'axios';
import usersData from '../../users/UsersData';
//import showUser from '../../users/UserModels'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}


//state/
/*const [seacrch, reSeatch]=useState("");
const updateSearch =(e)=>{
  reSeatch()
}*/



const fields = [
  { key: 'name', _style: { width: '40%'} },
  'registered',
  { key: 'role', _style: { width: '20%'} },
  { key: 'status', _style: { width: '20%'} },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]
//--------------component function
const Tables = () => {
  const [name1,setName]=useState("");
  const [role,setRole]=useState("");
  const [select,setSelect]=useState(5);
  const [user,setUser]=useState([]);
  const [details,setDetails]=useState("");//show details

  const history = useHistory()

  useEffect ( ()=>{
    axios
    .get("http://localhost:8797/user/getpeo",{
     headers : {
       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
       'access-token':localStorage.getItem("token")
   }
    })
    .then((res)=>{


         setUser(res.data)  ;


    })
    .catch( (error) => {
      console.log(error);
    })
  })
  const up_Name = (e) =>{
      setName(e.target.value);
    }
  const up_Role = (e) =>{
    setRole(e.target.value);
  }
  const up_Select = (e) =>{
    setSelect(e.target.value);
  }


  let filter = usersData.filter(
        (contact)=>{
          return contact.name.toLowerCase().indexOf(name1.toLowerCase()) !== -1;
        }
      );

  let filter2 = filter.filter(
    (contact)=>{
      return contact.role.toLowerCase().indexOf(role.toLowerCase()) !== -1;
    }
  );
//show detail


const toggleDetails = (index) => {
  const position = details.indexOf(index)
  let newDetails = details.slice()
  if (position !== -1) {
    newDetails.splice(position, 1)
  } else {
    newDetails = [...details, index]
  }
  setDetails(newDetails)
}



  return (
    <>
      <CRow>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Simple Table
            </CCardHeader>
            <CCardBody>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput  onChange={up_Name} type="search" placeholder="Username" autoComplete="username" />

                      <CSelect onChange={up_Role} custom name="select" id="select">
                      <option value="">None</option>
                      <option value="Guest">Guest</option>
                      <option value="Member">Member</option>
                      <option value="Staff">Staff</option>
                      <option value="Admin">Admin</option>
                      <option value="Alien">Alien</option>
                    </CSelect>

                      <CSelect onChange={up_Select} custom name="select" id="select">
                      <option value={5}>5</option>{select}
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                    </CSelect>
                    </CInputGroup>

            <CDataTable
              items={filter2}
              fields={fields}
      columnFilter
      tableFilter
      footer
              itemsPerPageSelect
              itemsPerPage={5}
      hover
      sorter
      onRowClick={(item) => history.push(`/users/${item.id}`)}
              pagination
              scopedSlots = {{
                'status':
                  (item,index)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'show_details':
              (item, index)=>{
                return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index)}}
                >
                {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
             },

        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.username}
                  </h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
                )
              }
            }
          }
            />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Striped Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={user}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
              Combined All Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All dark Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              dark
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
