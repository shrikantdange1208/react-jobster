import { Link } from 'react-router-dom'
import error_img from '../assets/images/not-found.svg'
import ErrorPageWrapper from '../assets/wrappers/ErrorPageWrapper'

const Error = () => {
  return (
    <ErrorPageWrapper className="full-page">
      <div>
        <img src={error_img} alt="error page" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you are looking for!</p>
        <Link to="/">back home</Link>
      </div>
    </ErrorPageWrapper>
  )
}

export default Error
