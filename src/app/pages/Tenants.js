import React, { useState, useEffect } from 'react';
import { Dropdown, Pagination, Icon, Input } from 'semantic-ui-react';
import WelcomePopup from '../components/WelcomePopup';
import TenantsProfile from './TenantsProfile';

export default function Tenants() {
  const tenantsData = [
    {
      tenantsChecked: 'chk',
      profileImage: '/assets/images/post-tenant-img.png',
      tenantName: 'Alexendria Aliex',
      tenantEmail: 'Alex@gmail.com',
      tenantNumber: '+91 79294548574',
      authenticationMethod: 'BankID',
      authenticationStatus: 'Success'
    },
    {
      tenantsChecked: 'chk1',
      profileImage: '/assets/images/post-tenant-img.png',
      tenantName: 'Alexendria Aliex',
      tenantEmail: 'Alex@gmail.com',
      tenantNumber: '+91 79294548574',
      authenticationMethod: 'BankID On Mobile',
      authenticationStatus: 'Failed'
    }
  ]
  const [showprofile, setShowProfile] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    chk: false,
    chk1: false,
  });
  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    })
  }
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };
  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);
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
  const tenantStatusOption = [
    {
      key: 1,
      text: 'Active',
      value: 'Moveout'
    },
    {
      key: 2,
      text: 'Inactive',
      value: 'Inactive',
    },
  ]
  const authenticationStatusOption = [
    {
      key: 1,
      text: 'All',
      value: 'All'
    },
    {
      key: 2,
      text: 'Success',
      value: 'Success',
    },
    {
      key: 3,
      text: 'Failed',
      value: 'Failed',
    },
  ]
  return (
    <div className='py-2'>
      <div className='ui container'>
        <h2 className='text-white fs-6 mb-4 fw-300 d-flex align-items-center'>
          Tenants
          <span className='fs-8 PageSub-title px-1 ml-1'>
            <img height='17' width='17' src='/assets/images/tenant-filter.svg' alt='Filter' />
            <span className='veritical-align-text-top pl-1'>Tenant Filter</span>
          </span>
        </h2>
        {!showprofile && (
          <div className='tenants-filter-div'>
            <div className='bg-white shadow border-radius-15 mb-3'>
              <h5 className='border-bottom py-3 px-3 fs-6 fw-500 text-primary-light'>TENANT FILTER</h5>
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
                        <label className='fw-500 mb-1'>Tenant Status</label>
                        <Dropdown placeholder='Tenant Status' clearable fluid search floating selection options={tenantStatusOption} />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-2 mb-2'>
                      <div class="field">
                        <label className='fw-500 mb-1'>Authentication Status</label>
                        <Dropdown placeholder='Authentication Status' clearable fluid search floating selection options={authenticationStatusOption} />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-2'>
                      <label className='fw-500 mb-1 d-block invisible'>Status</label>
                      <button class="ui button bg-primary text-white px-4 fs-7 fw-400" type="submit">Apply</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='tenants-table-div'>
              <div className='row pt-4 pb-2'>
                <div className='col-lg-6 col-md-6 col-sm-12 text-left text-sm-center mb-1'>
                  <label className='show-entry py-1 px-1 border-radius-5 d-inline-block'>
                    Show
                    <select className='border-0 cursor-pointer'>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                    entries
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
              <div className='tenantsTable-content bg-white shadow-sm border-radius-10 overflow-x-auto w-100'>
                <div className='tenantsTable'>
                  <table className='w-100 table-layout-fixed'>
                    <thead>
                      <tr>
                        <th className='text-center'>
                          <input type="checkbox" onChange={(event) => selectAll(event.target.checked)} checked={checkedAll} />
                        </th>
                        <th>CUSTOMERS</th>
                        <th>AUTHENTICATION METHOD</th>
                        <th>AUTHENTICATION STATUS</th>
                      </tr>
                    </thead>
                  </table>
                  <div className='ScrollBody overflow-y-auto'>
                    <table className='w-100 table-layout-fixed'>
                      <tbody>
                        {tenantsData.map((tenantsItem) => {
                          return (
                            <tr>
                              <td className='text-center'><input type="checkbox" onChange={() => toggleCheck(tenantsItem.tenantsChecked)}
                                checked={checked[tenantsItem.tenantsChecked]} />
                              </td>
                              <td className='text-center'>
                                <div className='d-flex justify-content-center align-items-start'>
                                  <div className='tenants-profile'>
                                    <img src={tenantsItem.profileImage} alt='Profile' rounded />
                                  </div>
                                  <div className='ml-2 text-left'>
                                    <p className='fs-6 fw-500 cursor-pointer' onClick={() => setShowProfile(true)}>{tenantsItem.tenantName}</p>
                                    <p>{tenantsItem.tenantEmail}</p>
                                    <p>{tenantsItem.tenantNumber}</p>
                                  </div>
                                </div>
                              </td>
                              <td className='text-center'><p>{tenantsItem.authenticationMethod}</p></td>
                              <td className='text-center'><label className={`${tenantsItem.authenticationStatus === 'Success' ? "label-success" : "label-danger"}`}>{tenantsItem.authenticationStatus}</label></td>
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
        )}
        {showprofile && (
          <TenantsProfile onProfile={() => setShowProfile(false)} />
        )}
        <WelcomePopup />
      </div>
    </div>
  )
}
