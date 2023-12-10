import './header.scss'
import '../_base.scss'
import brandLogo from '../../resources/Vector.svg'
import magnifyGlass from '../../resources/magnifyGlass.svg'
import person from '../../resources/person.svg'
const Header = ()=>{
    return(
        <header className='container'>
            <div className='header'>
                <a href="#" className='header__brandName'>
                    <img src={brandLogo}></img>
                    <h1>Recipedia</h1>
                </a>
                <div className='header__menuOptions'>
                    <a href="#">Home</a>
                    <a href="#">Recipe</a>
                    <a href="#">Community</a>
                    <a href="#">About Us</a>
                </div>
                <div className='header__selectIcons'>
                    <a href="#" className='header__selectIcons__icon'><img src={magnifyGlass}></img></a>
                    <a href="#" className='header__selectIcons__icon'><img src={person}></img></a>
                </div>
            </div>
            
        </header>
    );
}

export default Header