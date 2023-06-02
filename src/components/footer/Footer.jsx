import './Footer.scss'
//Icons
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <ul className='footer__social'>
          <li><a href="https://github.com/Gguife"><AiFillGithub className='footer-icon' /></a></li>
          <li><a href="https://www.linkedin.com/in/guilherme-gomes-b09444254/"><AiFillLinkedin className='footer-icon' /></a></li>
        </ul>
        <p className="copyright">&copy; 2023</p>
      </div>
    </footer>  
  )
}

export default Footer