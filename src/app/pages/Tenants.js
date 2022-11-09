import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function Tenants() {
  const invoicePeriodSelectOption = [
    {
      key: 1,
      text: 'Monthly',
      value: 'Monthly'
    },
    {
      key: 2,
      text: 'Semi-Annually',
      value: 'Semi-Annually',
    },
    {
      key: 3,
      text: 'Annually',
      value: 'Annually',
    },
  ]
  return (
    <div className='py-2'>
      <div className='ui container'>
        <h2 className='text-white fs-6 mb-2'>Tenants <span className='fs-8'>Tenant Filter</span></h2>
        <div className='bg-white shadow border-radius-15 mb-2'>
          <h5 className='border-bottom py-3 px-3 fs-6 fw-500 text-primary-light'>TENANT FILTER</h5>
          <div className='px-1 py-3'>
            <form class="ui form">
              <div className='row'>
                <div className='col-lg-3 px-2 mb-2 mb-2'>
                  <div class="field">
                    <label className='fs-7 fw-400 mb-1'>Select Location</label>
                    <Dropdown placeholder='Select Location' clearable fluid search floating selection options={invoicePeriodSelectOption} />
                  </div>
                </div>
                <div className='col-lg-3 px-2 mb-2'>
                  <div class="field">
                    <label className='fs-7 fw-400 mb-1'>Tenant Status</label>
                    <Dropdown placeholder='Tenant Status' clearable fluid search floating selection options={invoicePeriodSelectOption} />
                  </div>
                </div>
                <div className='col-lg-3 px-2 mb-2'>
                  <div class="field">
                    <label className='fs-7 fw-400 mb-1'>Credit check Status</label>
                    <Dropdown placeholder='Credit check Status' clearable fluid search floating selection options={invoicePeriodSelectOption} />
                  </div>
                </div>
                <div className='col-lg-3 px-2 mb-2'>
                  <div class="field">
                    <label className='fs-7 fw-400 mb-1'>E-Sign Status</label>
                    <Dropdown placeholder='E-Sign Status' clearable fluid search floating selection options={invoicePeriodSelectOption} />
                  </div>
                </div>
                <div className='col-lg-4 px-2'>
                  <button class="ui button bg-primary text-white fw-400" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className='bg-white tenantsTable shadow-sm border-radius-10'>
            <table className='w-100'>
              <thead>
                <tr>
                  <th className='text-center'>
                    <input type="checkbox" />
                  </th>
                  <th>CUSTOMERS</th>
                  <th>CREDIT CHECK STATUS</th>
                  <th>E-SIGN STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'><input type="checkbox" /></td>
                  <td className='text-center'></td>
                  <td className='text-center'><label>Verified</label><p>AAA Excellent</p></td>
                  <td className='text-center'><label>Signed</label><p>AAA Excellent</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
