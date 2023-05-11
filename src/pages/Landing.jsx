import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import LandingPageWrapper from '../assets/wrappers/LandingPageWrapper'
import { Logo } from '../components'

const Landing = () => {
  return (
    <LandingPageWrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Wayfarers organic bushwick big mood air plant cupping brunch,
            bitters scenester kale chips cray. Fam whatever raw denim chia DSA
            meh deep v hell of single-origin coffee yr. Tote bag occupy
            vibecession, ennui drinking vinegar single-origin coffee letterpress
            marfa actually hashtag ramps yuccie.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </LandingPageWrapper>
  )
}

export default Landing
