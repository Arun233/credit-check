import React from "react";
import { Tab, Menu, Image } from 'semantic-ui-react';
import GeneralTab from '../components/GeneralTab';

const TenantsProfile = (props) => {
    const panes = [
        {
            menuItem: (
                <Menu.Item className='border-0 text-primary-light' key='General'>
                    <Image className="mr-1" src="/assets/images/home-active.svg" />
                    General
                </Menu.Item>
            ), render: () => <Tab.Pane className='border-0'><GeneralTab /></Tab.Pane>
        },
    ]
    return (
        <div className='bg-white shadow border-radius-15'>
            <h5 className='border-bottom py-3 px-3 fs-6 fw-500 text-primary-light'><span className='cursor-pointer' onClick={props.onProfile}><img className='mr-1' src='/assets/images/arroww.svg' alt='Back' />Back</span></h5>
            <div className='py-3 px-3'>
                <div className='d-flex align-items-center w-100'>
                    <div>
                        <img className='tenants-page-profile' src='/assets/images/post-tenant-img.png' alt='Tenant' />
                    </div>
                    <div className='ml-2'>
                        <h2 className='fs-6 fw-500 mb-1'>Emma Smith</h2>
                        <p className='d-flex align-items-center mb-1'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17.171 25.396">
                            <g id="owner" transform="translate(0)">
                                <path id="Path_14951" data-name="Path 14951" d="M2015.245-471.76c.335.08.676.14,1,.244a4.894,4.894,0,0,1,3.4,4.584,15.361,15.361,0,0,1-.1,2.544,4.868,4.868,0,0,1-4.767,4.014,4.845,4.845,0,0,1-4.815-3.834,7.9,7.9,0,0,1,.212-4.425,4.773,4.773,0,0,1,3.935-3.084,1.117,1.117,0,0,0,.139-.043Z" transform="translate(-2006.102 471.76)" fill="#a1a5b7" />
                                <path id="Path_14952" data-name="Path 14952" d="M1947.166-213.055c.141-.564.268-1.065.393-1.567q1.12-4.53,2.237-9.061c.08-.324.236-.407.545-.276,1.487.629,2.981,1.256,4.466,1.9a1.382,1.382,0,0,1,.884,1.427c-.023,2.9-.009,5.8-.009,8.7,0,.083,0,.166,0,.248a.333.333,0,0,1-.363.352c-.231,0-.462,0-.694,0h-15.551c-.479,0-.554-.075-.554-.564v-8.877a1.439,1.439,0,0,1,1.033-1.514q2.16-.828,4.324-1.65c.394-.15.516-.085.619.321q1.311,5.222,2.624,10.445C1947.123-213.157,1947.131-213.143,1947.166-213.055Z" transform="translate(-1938.52 236.726)" fill="#e3e4ea" />
                                <path id="Path_14953" data-name="Path 14953" d="M2078.4-231.343c.231,0,.462-.012.693,0a.86.86,0,0,1,.7,1.321c-.786,1.037-.553,1.257-.462,2.347a5.7,5.7,0,0,0,.095.761,1.46,1.46,0,0,1-.115.888c-.154.383-.291.769-.43,1.16a.508.508,0,0,1-.513.385.5.5,0,0,1-.513-.381c-.179-.5-.365-.991-.54-1.488a.729.729,0,0,1-.032-.29c.052-.625.1-1.251.178-1.874a1.558,1.558,0,0,0-.254-1.082c-.077-.117-.158-.231-.233-.35a.894.894,0,0,1,.709-1.4C2077.924-231.357,2078.165-231.343,2078.4-231.343Z" transform="translate(-2069.732 243.68)" fill="#e3e4ea" />
                            </g>
                        </svg><span className='ml-1'>Business User</span></p>
                        <p className='d-flex align-items-center mb-1'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19.427 14.718">
                            <g id="XMLID_348_" transform="translate(0 -40)">
                                <path id="XMLID_350_" d="M10.236,69.342a.883.883,0,0,1-1.044,0L1.766,63.9,0,62.6v12.5a.883.883,0,0,0,.883.883H18.544a.883.883,0,0,0,.883-.883V62.6l-1.766,1.3Z" transform="translate(0 -21.271)" fill="#e3e4ea" />
                                <path id="XMLID_351_" d="M28.453,46.264,36.994,40H19.911Z" transform="translate(-18.739 0)" fill="#a1a5b7" />
                            </g>
                        </svg><span className='ml-1'>smith@yopmail.com</span></p>
                        <p className='d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11.978 20.766">
                            <g id="phone-svgrepo-com_2_" data-name="phone-svgrepo-com (2)" transform="translate(-116.037)">
                                <g id="Group_7279" data-name="Group 7279" transform="translate(116.037)">
                                    <circle id="Ellipse_248" data-name="Ellipse 248" cx="0.061" cy="0.061" r="0.061" transform="translate(4.888 0.823)" fill="#a1a5b7" />
                                    <rect id="Rectangle_6027" data-name="Rectangle 6027" width="11.307" height="18.092" transform="translate(0 1.33)" fill="#e3e4ea" />
                                    <circle id="Ellipse_249" data-name="Ellipse 249" cx="0.061" cy="0.061" r="0.061" transform="translate(5.067 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_250" data-name="Ellipse 250" cx="0.061" cy="0.061" r="0.061" transform="translate(5.246 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_251" data-name="Ellipse 251" cx="0.061" cy="0.061" r="0.061" transform="translate(5.424 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_252" data-name="Ellipse 252" cx="0.061" cy="0.061" r="0.061" transform="translate(5.603 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_253" data-name="Ellipse 253" cx="0.061" cy="0.061" r="0.061" transform="translate(5.782 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_254" data-name="Ellipse 254" cx="0.061" cy="0.061" r="0.061" transform="translate(5.961 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_255" data-name="Ellipse 255" cx="0.061" cy="0.061" r="0.061" transform="translate(6.14 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_256" data-name="Ellipse 256" cx="0.061" cy="0.061" r="0.061" transform="translate(6.319 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_257" data-name="Ellipse 257" cx="0.061" cy="0.061" r="0.061" transform="translate(6.498 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_258" data-name="Ellipse 258" cx="0.061" cy="0.061" r="0.061" transform="translate(6.677 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_259" data-name="Ellipse 259" cx="0.061" cy="0.061" r="0.061" transform="translate(6.856 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_260" data-name="Ellipse 260" cx="0.061" cy="0.061" r="0.061" transform="translate(7.034 0.823)" fill="#a1a5b7" />
                                    <circle id="Ellipse_261" data-name="Ellipse 261" cx="0.061" cy="0.061" r="0.061" transform="translate(7.214 0.823)" fill="#a1a5b7" />
                                    <path id="Path_19742" data-name="Path 19742" d="M126.813,0h-9.2a1.347,1.347,0,0,0-1.347,1.347V19.419a1.347,1.347,0,0,0,1.347,1.347h9.2a1.347,1.347,0,0,0,1.347-1.347V1.347A1.346,1.346,0,0,0,126.813,0Zm-.942.8a.149.149,0,1,1-.149.149A.149.149,0,0,1,125.872.8ZM120.618.671h3.326a.212.212,0,1,1,0,.424h-3.326a.212.212,0,1,1,0-.424ZM119.261,19.88h-.327a.04.04,0,0,1,0-.08h.327a.04.04,0,0,1,0,.08Zm0-.16h-.327a.04.04,0,0,1,0-.079h.327a.04.04,0,1,1,0,.079Zm.276.1a.085.085,0,1,1-.17,0v-.281h-.539v.281a.085.085,0,1,1-.17,0v-.366a.085.085,0,0,1,.085-.085h.709a.085.085,0,0,1,.085.085v.366Zm3.741-.026a.337.337,0,0,1-.337.337h-1.473a.337.337,0,0,1-.337-.337V19.5a.337.337,0,0,1,.337-.337h1.473a.337.337,0,0,1,.337.337Zm2.2.128h-.267a.085.085,0,0,1,0-.17h.267a.1.1,0,1,0,0-.2h-.225a.046.046,0,0,1-.038.019s-.013,0-.019,0l-.139-.059a.046.046,0,0,1-.028-.042.045.045,0,0,1,.028-.042l.139-.059a.046.046,0,0,1,.05.01l.005.006h.227a.27.27,0,1,1,0,.54Zm1.786-1.18H117.048V2.077h10.214Z" transform="translate(-116.181)" fill="#a1a5b7" />
                                </g>
                            </g>
                        </svg>
                            <span className='ml-1'>+6123 457 890</span></p>
                    </div>
                </div>
                <div className='tenant-tabs mt-3'>
                    <Tab panes={panes} />
                </div>
            </div>
        </div>
    )
}

export default TenantsProfile