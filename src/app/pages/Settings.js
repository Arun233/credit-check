import React from 'react';
import { Checkbox } from 'semantic-ui-react'
import WelcomePopup from '../components/WelcomePopup';

export default function Settings() {
  return (
    <div className='py-2'>
      <div className='ui container'>
        <h2 className='text-white fs-6 mb-4 fw-300 d-flex align-items-center'>
          Settings
          <span className='fs-8 PageSub-title px-1 ml-1'>
            <img height='17' width='17' src='/assets/images/bank-id.svg' alt='Filter' />
            <span className='veritical-align-text-top pl-1'>BankID Authentication</span>
          </span>
        </h2>
        <div className='bg-white shadow border-radius-15'>
          <h5 className='border-bottom py-3 px-3 fs-6 fw-500 text-primary-light'>BANKID AUTHENTICATION</h5>
          <div className='px-3 py-3'>
            <Checkbox className='mb-3' toggle label='Enable BankID Authentication' />
            <div className="d-flex justify-content-start mb-3">
              <p className="border-dashed-purple border-radius-5 bg-light-purple d-flex align-items-center p-1 fs-8"><svg className='min-width-1' id="warning-svgrepo-com_1_" data-name="warning-svgrepo-com (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 43 43">
                <path id="Path_15052" data-name="Path 15052" d="M20.717,2A18.717,18.717,0,1,0,39.433,20.716,18.717,18.717,0,0,0,20.717,2Zm0,34.759A16.043,16.043,0,1,1,36.759,20.717,16.043,16.043,0,0,1,20.717,36.759Z" transform="translate(0.674 0.674)" fill="none" />
                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" width="43" height="43" fill="none" />
                <circle id="Ellipse_3" data-name="Ellipse 3" cx="17" cy="17" r="17" transform="translate(4 4)" fill="#ffe99b" />
                <g id="Group_7137" data-name="Group 7137" transform="translate(19.385 9.829)">
                  <rect id="Rectangle_1690" data-name="Rectangle 1690" width="3" height="16" transform="translate(0.615 0.171)" fill="#ffc700" />
                  <path id="Path_15053" data-name="Path 15053" d="M16.505,22a2.005,2.005,0,1,0,2.005,2.005A2.005,2.005,0,0,0,16.505,22Z" transform="translate(-14.5 -2.417)" fill="#ffc700" />
                </g>
              </svg>
                <span className="ml-1 fw-500">Once this feature is enabled, customers can able to login with BankID only .</span></p>
            </div>
          </div>
        </div>
        <div className='text-center my-3'>
          <button className='ui button text-primary-light bg-transparent border-primary fw-400 px-5 mx-1'>Cancel</button>
          <button className='ui button bg-primary-light text-white fw-400 px-5 mx-1'>Save</button>
        </div>
        <WelcomePopup />
      </div>
    </div>
  )
}
