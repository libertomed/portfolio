import MyNavbar from './Navbar'
import MyFooter from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <MyNavbar />
                { children }
            <MyFooter />
        </>
    )
}

export default Layout