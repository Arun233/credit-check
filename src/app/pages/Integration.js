import React, { useState } from 'react'

export default function Integration() {
  const [integrationformShow,SetintegrationformShow]=useState(false);
  const [SignicatTableShow,SetSignicatTableShow]=useState(false);
  const [configurationConfigured,SetConfigurationConfigured]=useState(false)
  const SaveSignicatConfiguration=(e)=>{
    e.preventDefault()
    SetSignicatTableShow(true);
    SetConfigurationConfigured(true)
  }
  const cancelConfiguration=(e)=>{
    e.preventDefault();
    debugger;
    if(configurationConfigured){
      SetSignicatTableShow(true);
    }else{
     
      SetintegrationformShow(false);
    }
  }
  return (
   <div className='py-2'>
     <div className='ui container'>
     <h2 className='text-white fs-6 mb-4 fw-300 d-flex align-items-center'>Integration <span className='fs-8 PageSub-title px-1 ml-1'><img height='17' width='17' src='/assets/images/Integration.svg' alt='Filter' /><span className='veritical-align-text-top pl-1'>Integration</span></span></h2>    
    {!integrationformShow &&
     <div className='bg-white border-radius-10 py-5 px-2 shadow'>
        <div className='row px-6 px-sm-1'>
      <div className='col-md-4 col-sm-12 px-2 my-2'>
        <div className='card  cursor-pointer  shadow-sm border-light-gray p-2' onClick={()=>SetintegrationformShow(true)}>
            <div className='text-center'>
              <img height='60' src='/assets/images/Signicat-logo.svg'className='mt-3'/>
              <p className='my-2 fw-600'>Signicat</p>
              <div  className={ `fw-500 ${configurationConfigured ?'text-green bg-light-green':'bg-skyblue-light text-skyblue'} py-1`}>{configurationConfigured ?(<span>Configured <img src='assets/images/tick-circle-icon.svg'/></span>):(<span>Configure</span>)}</div>
            </div>
        </div>
      </div>
      <div className='col-md-4 col-sm-12 px-2 my-2'>
        <div className='card shadow-sm border-light-gray p-2'>
            <div className='text-center'>
              <img height='60' src='/assets/images/credit-safe.svg'className='mt-3 p-2'/>
              <p className='my-2 fw-600'>Signicat</p>
              <div className='text-green bg-light-green py-1 fw-500'>Coming Soon</div>
            </div>
        </div>
      </div>
        </div>
    </div> 
    }
      {(integrationformShow && !SignicatTableShow)
      &&
      <div className='bg-white border-radius-10 py-3  shadow'>
        <div className='border-bottom d-flex justify-content-between pb-2 px-3'>
        <h5 className='fs-6 fw-600 text-primary-light'>SIGNICAT CONFIGURATION</h5>
          <button onClick={()=>SetintegrationformShow(false)} className='border-0 bg-transparent cursor-pointer text-primary-light fs-6 fw-600  text-nowrap' ><img src='/assets/images/arroww.svg' className='mr-1' alt='arrow' width='25' />BACK</button>
        </div>
        <div className='ui form p-3'>
          <div className='row'>
            <div className='col-md-1 col-sm-12  mr-6'>
           <span> Products</span>
            </div>
            <div className='col-md-10 col-sm-12 pl-2'>
              < div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <input type='checkbox' />
                  Credit Check
                </div>
                <div className='col-md-4 col-sm-12'>
                  <input type='checkbox' />
                  E-Signature
                </div>
                <div className='col-md-4 col-sm-12'>
                  <input type='checkbox' />
                  BankID Authentication
                </div>
                </div>
            </div>
          </div>
          <div className='row my-2'>
          <div className='col-md-7 col-sm-12'>
            <div className='inline fields'>
            <label className='w-30 text-nowrap fw-500 mb-sm-2'>Access Token</label>
            <input type="text" />
            </div>
          </div>
          </div>
          <div className='row my-2'>
          <div className='col-md-7 col-sm-12'>
            <div className='inline fields'>
            <label className='w-30 text-nowrap fw-500 mb-sm-2'>Secret key</label>
            <input type="text" />
            </div>
          </div>
          </div>
        </div>
        <div className='text-center'>
        <button onClick={(e)=>cancelConfiguration(e)} className='ui button bg-gray-2 text-white fw-500 px-4 mr-2'>Cancel</button>
           <button className='ui button bg-primary-light text-white fw-500 px-5' onClick={(e)=>SaveSignicatConfiguration(e)}>Save</button>
        </div>
      </div> 
      }

      {(integrationformShow&&SignicatTableShow)
       &&
       <div className='bg-white border-radius-10 py-3  shadow'>
        <div className='border-bottom d-flex justify-content-between pb-2 px-3'>
        <h5 className='fs-6 fw-600 text-primary-light'>SIGNICAT</h5>
          <button onClick={()=>SetintegrationformShow(false)} className='border-0 bg-transparent cursor-pointer text-primary-light fs-6 fw-600 ' ><img src='/assets/images/arroww.svg' className='mr-1' alt='arrow' width='25' />BACK</button>
        </div>
        <div className='row justify-content-center my-5'>
          <div className='col-md-9 col-sm-12 px-2'>
            <div className='overflow-y-auto'>
            <table className='ui unstackable table text-center border-light-gray shadow-sm' id='SignicatINtegrationTable'>
              <thead>
                <tr>
                <th  className='border-bottom'>INTEGRATION</th>
                <th  className='border-bottom'>ACCESS TOKEN</th>
                <th  className='border-bottom'>SECRET KEY</th>
                <th  className='border-bottom'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <img height='50' src='/assets/images/Signicat-logo.svg'className=''/>

                  </td>
                  <td className='veritical-align-middle'>
                  23436565767687
                  </td>
                  <td className='veritical-align-middle'>
                  87785877875767
                  </td>
                  <td className='veritical-align-middle'>
                     <button className='cursor-pointer border-0 bg-transparent' onClick={()=>SetSignicatTableShow(false)}><img height='25' src='/assets/images/edit-icon.svg'className=''/></button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div> }
    </div>
   </div>
  )
}
