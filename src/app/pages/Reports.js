import React from 'react'
import { Dropdown, Pagination, Input, Icon } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import WelcomePopup from '../components/WelcomePopup';

export default function Reports() {
  const reportsData = [
    {
      id: '1',
      location: 'Davis',
      buildingName: 'Berlim',
      unitNumber: '12',
      tenantName: 'Karthick ram',
      tenantType: 'Personal User',
      email: 'Karthick@gmail.com',
      mobileNumber: '98657634354',
      authenticationMethod: 'BankID',
    },
    {
      id: '2',
      location: 'Woodland',
      buildingName: 'Alpha',
      unitNumber: '24',
      tenantName: 'Barath',
      tenantType: 'Personal User',
      email: 'Karthick@gmail.com',
      mobileNumber: '98657634354',
      authenticationMethod: 'BankID'
    }
  ]
  const tenantLocationOption = [
    {
      key: 1,
      text: 'All',
      value: 'All'
    },
    {
      key: 2,
      text: 'Missouri',
      value: 'Missouri'
    }
  ]
  const tenantBuildingOption = [
    {
      key: 1,
      text: 'All',
      value: 'All'
    },
    {
      key: 2,
      text: 'Building1',
      value: 'Building1',
    },
  ]
  const tenantTypeOption = [
    {
      key: 1,
      text: 'All',
      value: 'All'
    },
    {
      key: 2,
      text: 'Active',
      value: 'Active',
    },
    {
      key: 2,
      text: 'In-Active',
      value: 'In-Active',
    }
  ]
  const authenticationStatusOption = [
    {
      key: 1,
      text: 'All',
      value: 'All'
    },
    {
      key: 2,
      text: 'Authenticated',
      value: 'Authenticated',
    },
    {
      key: 3,
      text: 'Not Authenticated',
      value: 'Not Authenticated',
    },
  ]
  const authenticationMethodOption = [
    {
      key: 1,
      text: 'All',
      value: 'All'
    },
    {
      key: 2,
      text: 'Norwegian BankID',
      value: 'Norwegian BankID',
    },
    {
      key: 3,
      text: 'BankID On Mobile',
      value: 'BankID On Mobile',
    },
  ]
  return (
    <div className='py-2'>
      <div className='ui container'>
        <h2 className='text-white fs-6 mb-4 fw-300 d-flex align-items-center'>
          Reports
          <span className='fs-8 PageSub-title px-1 ml-1'>
            <img height='17' width='17' src='/assets/images/bank-id.svg' alt='Filter' />
            <span className='veritical-align-text-top pl-1'>BankID Authentication</span>
          </span>
        </h2>
        <div className='tenants-reports-div'>
          <div className='bg-white shadow border-radius-15 mb-3'>
            <h5 className='border-bottom py-3 px-3 fs-6 fw-500 text-primary-light'>BANKID AUTHENTICATION REPORT</h5>
            <div className='px-1 py-3'>
              <form class="ui form">
                <div className='row'>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2 mb-2'>
                    <div class="field">
                      <label className='fw-500 mb-1'>Select Location</label>
                      <Dropdown placeholder='Select Location' clearable fluid search floating selection options={tenantLocationOption} />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                    <div class="field">
                      <label className='fw-500 mb-1'>Select Building</label>
                      <Dropdown placeholder='Select Building' clearable fluid search floating selection options={tenantBuildingOption} />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                    <div class="field">
                      <label className='fw-500 mb-1'>Tenant Type</label>
                      <Dropdown placeholder='Tenant Type' clearable fluid search floating selection options={tenantTypeOption} />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                    <div class="field">
                      <label className='fw-500 mb-1'>Authentication Status</label>
                      <Dropdown placeholder='Authentication Status' clearable fluid search floating selection options={authenticationStatusOption} />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                    <div class="field">
                      <label className='fw-500 mb-1'>Authenticated with</label>
                      <Dropdown placeholder='Authenticated with' clearable fluid search floating selection options={authenticationMethodOption} />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                    <div class="field datePicker">
                      <label className='fw-500 mb-1'>From Date</label>
                      <SemanticDatepicker placeholder='Select From Date' className='w-100' />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                    <div class="field datePicker">
                      <label className='fw-500 mb-1'>To Date</label>
                      <SemanticDatepicker placeholder='Select To Date' className='w-100' />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6 col-sm-12 px-2'>
                    <label className='fs-7 fw-400 mb-1 d-block invisible'>Get Report</label>
                    <button class="ui button bg-primary text-white fw-400" type="submit">Get Report</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='reports-table-div'>
            <div className='row pt-4 pb-2'>
              <div className='col-lg-6 col-md-6 col-sm-12 text-left text-sm-center mb-1'>
                <label className='show-entry py-1 px-1 border-radius-5 d-inline-block'>
                  Show
                  <select className='border-0 cursor-pointer'>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                  enteries
                </label>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 text-sm-center text-right mb-1'>
                <div>
                  <div>
                    <Input className='w-75' iconPosition='left' icon='search' placeholder='Search...' />
                  </div>
                </div>
              </div>
            </div>
            <div className='reportsTable-content bg-white shadow-sm border-radius-10 overflow-x-auto w-100'>
            <div className='reportsTable'>
              <table className='w-100 table-layout-fixed'>
                <thead>
                  <tr>
                    <th>LOCATION</th>
                    <th>BUILDING NAME</th>
                    <th>UNIT#</th>
                    <th>TENANT NAME & TYPE</th>
                    <th>EMAIL</th>
                    <th>MOBILE NUMBER</th>
                    <th>AUTHENTICATION METHOD</th>
                  </tr>
                </thead>
              </table>
              <div className='ScrollBody overflow-y-auto'>
                <table className='w-100 table-layout-fixed'>
                  <tbody>
                    {reportsData.map((reportItem) => {
                      return (
                        <tr>
                          <td className='text-center'><p>{reportItem.location}</p></td>
                          <td className='text-center'><p>{reportItem.buildingName}</p></td>
                          <td className='text-center'><a className='text-decoration-underline text-primary' href="/">{reportItem.unitNumber}</a></td>
                          <td className='text-center'><p>{reportItem.tenantName}</p><p className='text-primary'>{reportItem.tenantType}</p></td>
                          <td className='text-center'><p>{reportItem.email}</p></td>
                          <td className='text-center'><p>{reportItem.mobileNumber}</p></td>
                          <td className='text-center'><p>{reportItem.authenticationMethod}</p></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
            <div className='pagination-div mt-2 mb-3 text-center'>
              <Pagination ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true, }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }} defaultActivePage={1} totalPages={10} />
            </div>
          </div>
        </div>
        <WelcomePopup />
      </div>
    </div>
  )
}
