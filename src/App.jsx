import { useState } from 'react'
import SideMenu from './component/SideMenu'
import { TopNav } from './component/Header/TopNav'
import { Home } from './routes/Home'

function App() {
  return (
    <div className="App">
      <div className=''>
        {/* Top navigation */}
        <div className="top_navigation w-[100%]">
          <TopNav />
        </div>
        <div className="right_container flex">
          {/* Side bar menu */}
          <div className="side_bar_menu w-[16%]">
            <SideMenu />
          </div>
          {/* Current route */}
          <div className="current_route w-[84%] p-5">
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
