import './Header.scss'
import { useEffect } from 'react'
import Logo from '../../../public/eucartoon.png'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

//Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  //Animation AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='header aos-init'>
      <div className="header__logo-title">
        <h1>Gguife<span>movies</span></h1>
      </div>
      <div className="header__logo" data-aos="fade-down" data-aos-duration="2000">
        <Link to='/'><img src={Logo} alt="Logo"/></Link>
      </div>
      <div className="header__search">
        <FaSearch className='search-icon'/>
        <input type="search" placeholder='Digite o filme' />
      </div>
    </div>
  )
}

export default Header