


//React.createElement => object => HTML(DOM)
//JSX
const Title = () => (
    <a href='/'>
      {/* <img 
        alt="logo" 
        className='logo' 
        src="http://192.168.100.34:4400/assets/images/sidebarlogo.png"/> */}
        LOGO
    </a>
  );

  


//Components => 1) Functional component 2) Class Based components
//eg. of FC
// Component Composition => Passing component to another component
const Header = () =>{
    return (
        <div className='header'>
          <Title/>
        <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      </div>
    );
  }

  export default Header;