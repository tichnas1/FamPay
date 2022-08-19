import logo from '../../assets/img/logo_with_name.svg';

function Navbar() {
  return (
    <nav className='nav'>
      <img src={logo} alt='FamPay' />
    </nav>
  );
}

export default Navbar;
