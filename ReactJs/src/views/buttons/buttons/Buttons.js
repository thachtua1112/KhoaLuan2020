import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,CDataTable,CBadge,CCardHeader
} from '@coreui/react'
import usersData from '../../users/UsersData';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = [
  { key: 'name', _style: { width: '40%'} },
  'registered',
  { key: 'role', _style: { width: '20%'} },
  { key: 'status', _style: { width: '20%'} },

]

const Buttons = () => {
  const [show,setShow]=useState(true)
  const click =({match})=>{
    setShow(true)
   // usersData.find( user => user.id.toString() === match.params.id)

  }/*
  const userDetails = usersData ? Object.entries(usersData) :
      [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]*/
  return (
    <>
    <div>
    <CRow>
    <CCol >
      Combined All Table
      <CCard>
        <CCardBody>
        <CDataTable
          items={usersData}
          fields={fields}
          hover
          striped
          bordered
          border="1"
          itemsPerPage={10}
          onRowClick={click}
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


  { show ?
    <CRow>
    <CCol >
      <CCard>
        <CCardHeader>
        </CCardHeader>
        <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {/*
                  userDetails.map(([key, value], index) => {
                    return (
                      <tr key={index.toString()}>
                        <td>{`${key}:`}</td>
                        <td><strong>{value}</strong></td>
                      </tr>
                    )
                  })*/
                }
                <tr>
                <td>
                </td>
                </tr>
              </tbody>
            </table>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
 :""
  }
  </div>
    </>
  )
}

export default Buttons
