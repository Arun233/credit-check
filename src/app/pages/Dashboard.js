import React from 'react'
import DoughnutChart from '../components/DoughnutChart'
import WelcomePopup from '../components/WelcomePopup'
import { Dropdown, Image, Header } from 'semantic-ui-react';
import { BarChart } from '../components/BarChart';

export default function Dashboard(props) {
  const WidgetData = [
    {
      icon: '/assets/images/successful.svg',
      title: 'SUCCESSFUL AUTHENTICATION',
      amount: '20',
      day: 'All',
    },
    {
      icon: '/assets/images/failed.svg',
      title: 'FAILED AUTHENTICATION',
      amount: '03',
      day: 'Today',
    },
    {
      icon: '/assets/images/locked-out.svg',
      title: 'LOCKED OUT EVENTS',
      amount: '19',
      day: 'All',
    },
  ]
  const sortUnitOptions = [
    { key: 'All', text: 'All', value: 'All' },
    { key: 'Today', text: 'Today', value: 'Today' },
    { key: 'Yesterday', text: 'Yesterday', value: 'Yesterday' },
    { key: 'This Month', text: 'This Month', value: 'This Month' }
  ]
  const CardOptions = [
    { key: 'All', text: 'All', value: 'All' },
    { key: 'Today', text: 'Today', value: 'Today' },
    { key: 'Yesterday', text: 'Yesterday', value: 'Yesterday' },
    { key: 'This Month', text: 'This Month', value: 'This Month' }
  ]
  const trigger = (
    <span>
      <Image className='widget-dropdown-img' avatar src="/assets/images/menu.svg" />
    </span>
  )
  return (
    <div className='py-2'>
      <div className='ui container'>
        <h2 className='text-white fs-6 mb-4 fw-300 d-flex align-items-center'><span className='fs-8'><img height='17' width='17' src='/assets/images/Integration.svg' alt='Filter' /><span className='veritical-align-text-top pl-1 fs-7'>Welcome To Dashboard</span></span></h2>
        <div className='widgets'>
          <div className='row'>
            {WidgetData.map((data) => (
              <div className='col-lg-4 col-md-4 col-sm-12 pr-1 pr-sm-0 px-sm-1 mb-2'>
                <div style={{borderRadius: '2px'}} className='bg-white shadow-sm py-2 mh-100 px-2'>
                  <div className='row align-items-center'>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                      <div>
                        <img className='w-75 h-75' src={data.icon} alt='Icon' />
                      </div>
                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-10'>
                      <div className='d-flex align-items-center justify-content-between mb-1'>
                        <p className='font-8 text-gray'>{data.title}</p>
                        <div className='widget-dropdown text-right'>
                          <Dropdown downward floating options={CardOptions} trigger={trigger} icon="null" />
                        </div>
                      </div>
                      <div className='d-flex align-items-start justify-content-between'>
                        <div>
                          <h5 className='fs-4 fw-600 mb-1'>{data.amount}</h5>
                          <p className='font-8'>{data.day}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='row my-2'>
        <div className='col-lg-6 col-md-6 col-sm-12 pr-1 pr-sm-0 px-sm-1 mb-2'>
            <div className='bar-chart-div mh-100 bg-white shadow-sm border-radius-5'>
              <h5 className='border-bottom py-3 px-3 fs-6 fw-500 text-dark'>AUTHENTICATION STATUS</h5>
              <div className='p-5 p-sm-1'>
                <BarChart />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 pr-1 pr-sm-0 px-sm-1 mb-2'>
            <div className='doughnut-chart-div mh-100 bg-white shadow-sm border-radius-5'>
              <div className='border-bottom py-3 px-3 d-flex align-items-center justify-content-between'>
                <h5 className='fs-6 fw-500 text-dark'>BANKID AUTHENTICATION REPORT</h5>
                <div className='sort-div text-right'>
                  <Header as='h4'>
                    <Header.Content>
                      <Dropdown
                        floating
                        inline
                        options={sortUnitOptions}
                        defaultValue={sortUnitOptions[0].value}
                      />
                    </Header.Content>
                  </Header>
                </div>
              </div>
              <div className='p-5 p-sm-1'>
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
        <WelcomePopup />
      </div>
    </div>
  )
}
