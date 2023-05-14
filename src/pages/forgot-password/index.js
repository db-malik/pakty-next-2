import { NextSeo } from 'next-seo'
import ForgotPasswordPage from "@/containers/connexionsPakty/forgotPasword/ForgotPasswordPage"

const ForgotPassword = () => {
  return (
    <>
      <NextSeo
        title="Pakty | login"
        description="Discover pakty’s magazine"
        author=""
        keywords="Visualize 3D furnitures in your project before shopping"
        image=""
      />

      <ForgotPasswordPage />
    </>
  )
}

export default ForgotPassword
