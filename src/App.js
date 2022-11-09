import { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./app/components/HeaderComponent";
import SidebarComponent from "./app/components/SidebarComponent";
import Dashboard from "./app/pages/Dashboard";
import Integration from "./app/pages/Integration";
import Reports from "./app/pages/Reports";
import Settings from "./app/pages/Settings";
import Tenants from "./app/pages/Tenants";


function App() {
  const windowWidth = window.innerWidth
    const [mobileWidth, SetmobileWidth] = useState()
    const[sidebar,ShowSidebar]=useState(false)
    useEffect(() => {
      SetmobileWidth(1000)
  }, [mobileWidth])
  return (                
                   <>
                   <SidebarComponent width={mobileWidth} sidebar={sidebar} showSidebar={ShowSidebar}/>
                          <div className={` pusher ${mobileWidth>980 && 'pusher-desktop '} `} id='mainContent'> 
                          <HeaderComponent width={mobileWidth} sidebar={sidebar}  showSidebar={ShowSidebar} />
                           <div className=''>
                            <Routes>
                              <Route path='/' element={<Dashboard/>}/>
                              <Route path='/tenants' element={<Tenants/>}/>
                              <Route path='/integration' element={<Integration/>}/>
                              <Route path='/reports' element={<Reports/>}/>
                              <Route path='/settings' element={<Settings/>}/>
                            </Routes>
                            </div>
                          </div>    
                          </>
  );
}

export default App;
