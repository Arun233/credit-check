import React from 'react'
import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
export default function HeaderComponent(props) {
   const openSidebar=(e)=>{
     e.preventDefault();
     props.showSidebar(!props.sidebar)
  }  
  const triggerDropdown=(
    <span>
  <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
   <span className='text-white'> John Snow</span>
    </span>
  )
  return (
    <>


    <div  className='ui secondary pointing menu py-1 bg-white d-block  w-100 px-2 bg-primary'>
 
    {
      props.width <980 &&   <Icon className='fs-4 ' onClick={(e)=>openSidebar(e)} name='bars'/> 
    }

    <div className='right menu d-inline-block float-right'>
    <Dropdown icon={null} trigger={triggerDropdown}>
    <Dropdown.Menu>
      <Dropdown.Item className='d-flex'>
        <Image height='18' width='18' src='/assets/images/logout.svg' />
        <span className='fs-7 fw-600 text-red'> Logout</span>
      </Dropdown.Item>
    
    </Dropdown.Menu>
    </Dropdown>

    </div>
    
   
    </div>

    </>
  )
}