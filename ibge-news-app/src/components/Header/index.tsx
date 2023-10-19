import logo from '../../images/image 68.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Logo da Trybe" />
      <h1>IBGE NEWS</h1>
    </header>
  )
}

export default Header;
