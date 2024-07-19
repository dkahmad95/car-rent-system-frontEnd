import Header from '../ui/sharedComponents/Header'
import Footer from '../ui/sharedComponents/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow overflow-y-auto mx-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
