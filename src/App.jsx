import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { TopNav } from './component/Header/TopNav'
import { Home } from './routes/Home'
import { Users } from './routes/Users'
import { Products } from './routes/Products'
import { Stores } from './routes/Stores'
import Categories from './routes/settings/Categories'
import NewCategories from './routes/settings/NewCategories'

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <div>
          {/* Toaster */}
          <Toaster
              toastOptions={{
                  success: {
                      style: {
                          background: 'green',
                      },
                  },
                  error: {
                      style: {
                          background: 'rgb(153 27 27)',
                      },
                  },
                    style: {
                      color: 'white',
                      fontSize: '11px'
                  }
              }}
              
              position='top-center' reverseOrder={false}
          ></Toaster>
          {/* Toaster */}

          
        </div>

        <div className='w-[90%]  mx-auto relative lg:w-[95%] lg:max-w-screen-xl'>
          {/* Top navigation */}
          <div className="">
            <TopNav />
          </div>
          {/* Current route */}
          <div className="current_route w-[100%] pt-4 pb-[1rem] ">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/users' element={<Users />} />
              <Route exact path='/products' element={<Products />} />
              <Route exact path='/stores' element={<Stores />} />
              <Route exact path='/admin/settings/categories' element={<Categories />} />
              <Route exact path='/admin/settings/categories/newCategory' element={<NewCategories />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
