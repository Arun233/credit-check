import React, { useState } from 'react'
import { Dropdown, Icon, Image, Menu, Modal, Button } from 'semantic-ui-react'
export default function HeaderComponent(props) {
  const [logoutModal, SetLogoutModal] = useState({
    open: false,
    dimmer: undefined,
    size: undefined
  })
  const openSidebar = (e) => {
    e.preventDefault();
    props.showSidebar(!props.sidebar)
  }
  const triggerDropdown = (
    <span>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <span className='text-white'> John Snow</span>
    </span>
  )
  return (
    <>
      <div className='ui secondary position-fixed t-0 l-0 z-index-1 pointing menu py-2 bg-white d-block border-bottom-white w-100 px-2 bg-primary'>
        {
          props.width < 980 && <Icon className='fs-4 ' onClick={(e) => openSidebar(e)} name='bars text-white mt-1' />
        }
        <div className='right menu d-inline-block float-right'>
          <Dropdown icon={null} trigger={triggerDropdown}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => SetLogoutModal({ open: true, size: 'tiny', dimmer: 'blurring' })} className='d-flex'>
                <Image height='18' width='18' src='/assets/images/logout.svg' />
                <span className='fs-7 fw-600 text-red'>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Modal
        dimmer={logoutModal.dimmer}
        open={logoutModal.open}
        size={logoutModal.size}
        onClose={() => SetLogoutModal({ open: false })}
      >
        <Modal.Header className='text-center'>CONFIRM LOG-OUT</Modal.Header>
        <Modal.Content className='text-center'>
          <p>Are you sure want to confirm logout</p>
        </Modal.Content>
        <Modal.Actions className='text-center'>
          <button className='ui button border-radius-0 bg-gray-2 text-dark fw-400' onClick={() => SetLogoutModal({ open: false })}>CANCEL</button>
          <button className='ui button border-radius-0 bg-primary text-white fw-400' onClick={() => SetLogoutModal({ open: false })}>CONFIRM</button>
        </Modal.Actions>
      </Modal>
    </>
  )
}