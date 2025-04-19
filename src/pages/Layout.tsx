import { Outlet } from 'react-router-dom'
import ComeonLogo from '../components/ComeonLogo'

const Layout = () => {
  return (
    <>
      <ComeonLogo />
      <Outlet />
    </>
  )
}

export default Layout
