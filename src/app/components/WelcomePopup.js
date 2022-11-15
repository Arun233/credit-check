import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Modal } from "semantic-ui-react";

const WelcomePopup = (props) => {
  const [welcomePopup, SetwelcomePopup] = useState({
    open: localStorage.getItem('integration') ? false : true,
    dimmer: undefined,
  })
  const navigate = useNavigate();
  const ValidateDigitalSolution = (e) => {
    e.preventDefault();
    navigate('/integration')
  }

  return (
    <>
      <Modal
        dimmer={welcomePopup.dimmer}
        open={welcomePopup.open}
        onClose={() => SetwelcomePopup({ open: true })}
        size='small'
      >
        <Modal.Content className='text-center p-2'>
          <div className=' px-5 px-sm-1'>
            <img className="w-100 px-3 px-sm-0" src="assets/images/welcomeModalImage.gif" alt='Welcome Popup' />
          </div>
          <h6 className="text-primary-light">Welcome to 6storage's Digital Solutions</h6>
          <button className="ui button bg-primary-light fs-7 fw-400 mt-3 text-white" onClick={ValidateDigitalSolution}>Continue</button>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default WelcomePopup