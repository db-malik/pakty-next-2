import Footer from '../../components/fragments/footer/Footer'
import Header from '../../components/fragments/header/Header'
import HeaderUser from '../../components/fragments/header/HeaderUser'

const UserLayout = ({ user, children }) => {
  return (
    <div>
      <HeaderUser user={user} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default UserLayout
