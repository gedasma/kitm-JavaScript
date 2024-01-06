import '../_base.scss'
import './footer.scss'
import brandLogo from '../../resources/Vector.svg'
import Button from "../button/Button";

const Footer = ()=>{
    return(
        <footer className="footer container">
            <a href="/" className='header__brandName'>
                <img src={brandLogo} alt='brandlogo'></img>
                <h1>Recipedia</h1>
            </a>
            <div className="footer__content">
                <div className="footer__content__links">
                <div className="footer__content__links__column">
                    <h3>Menu</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Recipe</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
                <div className="footer__content__links__column">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="/">Breakfast</a></li>
                        <li><a href="/">Lunch</a></li>
                        <li><a href="/">Dinner</a></li>
                        <li><a href="/">Dessert</a></li>
                        <li><a href="/">Drink</a></li>
                    </ul>
                </div>
                <div className="footer__content__links__column">
                    <h3>Social</h3>
                    <ul>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Youtube</a></li>
                        <li><a href="/">Facebook</a></li>
                    </ul>
                </div>

                </div>
                <div className="footer__content__signUp">
                    <div>
                        <h3>Sign up for our newsletter</h3>
                        <div className="footer__content__signUp__inputs">
                            <input type="text" placeholder='Your Email Address'/>
                            <Button buttonText="Submit" refLink="#"/>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </footer>
    );
} 

export default Footer