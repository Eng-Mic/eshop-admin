import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SideMenu from './component/SideMenu'
import { TopNav } from './component/Header/TopNav'
import { Home } from './routes/Home'
import { Footer } from './component/Footer/Footer'
import { Users } from './routes/Users'
import { Products } from './routes/Products'
import { Stores } from './routes/Stores'

function App() {
  return (
    <div className="App">
      <Router>
        <div className='relative'>
          {/* Top navigation */}
          <div className="top_navigation w-[100%] fixed top-0 z-10">
            <TopNav />
          </div>
          {/* Main */}
          <div className="right_container flex py-[3.4rem]  relative md:py-[4rem]">
            {/* Side bar menu */}
            <div className="side_bar_menu w-[80%] hidden  md:flex fixed md:w-[16%]">
              <SideMenu />
            </div>
            {/* Current route */}
            <div className="current_route w-[100%] pt-5 px-3 pb-[4rem] md:block absolute right-0 md:w-[84%] md:px-5 ">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/users' element={<Users />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/stores' element={<Stores />} />
              </Routes>
            </div>
          </div>
          {/* Footer */}
          <div className="footer w-[100%] fixed bottom-0">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
