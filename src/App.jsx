import { useState } from 'react'
import SideMenu from './component/SideMenu'
import { TopNav } from './component/Header/TopNav'
import { Home } from './routes/Home'
import { Footer } from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className='relative'>
        {/* Top navigation */}
        <div className="top_navigation w-[100%] fixed top-0 z-10">
          <TopNav />
        </div>
        {/* Main */}
        <div className="right_container flex py-[4rem] relative">
          {/* Side bar menu */}
          <div className="side_bar_menu w-[16%] fixed">
            <SideMenu />
          </div>
          {/* Current route */}
          <div className="current_route w-[84%] pt-5 px-5 pb-[4rem] absolute right-0 ">
            <Home />
          </div>
        </div>
        {/* Footer */}
        <div className="footer w-[100%] fixed bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
