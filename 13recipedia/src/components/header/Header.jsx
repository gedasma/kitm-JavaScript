import './header.scss'
import '../_base.scss'
import brandLogo from '../../resources/Vector.svg'
import magnifyGlass from '../../resources/magnifyGlass.svg'
import person from '../../resources/person.svg'
import * as service from "../../services/services";
import { useEffect, useState} from "react";
import Search from '../search/Search'

const Header = ()=>{
    const [categories, setCategories] = useState([])
    const [searchStatement, setSearchStatement] = useState([])
    
    useEffect(()=>{
        
        if(categories.length === 0)
        {
            let categoriesPromise = service.getCategories()
            categoriesPromise.then((result) => {
                setCategories(result)
            });
        }
    });

    return(
        <header className='container'>
            <div className='header'>
                <a href="/" className='header__brandName'>
                    <img src={brandLogo}></img>
                    <h1>Recipedia</h1>
                </a>
                <div className='header__menuOptions'>
                    <a className='header__menuOptions__option' href="/">Home</a>
                    <div className="nav-item dropdown">
                      <button className="header__menuOptions__option btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </button>
                      <ul className="dropdown-menu">
                        {categories.map((category)=>
                            <li key={category.idCategory}><a className="dropdown-item" href={'/category/' + category.strCategory}>{category.strCategory}</a></li>
                        )}
                      </ul>
                    </div>
                    <a className='header__menuOptions__option' href="#">Community</a>
                    <a className='header__menuOptions__option' href="#">About Us</a>
                </div>
                <div className='header__selectIcons'>
                    <Search searchStatement={searchStatement} setSearchStatement={setSearchStatement}/>
                    <a href={"/recipe/" + searchStatement} className='header__selectIcons__icon'><img src={magnifyGlass}></img></a>
                    <a href="#" className='header__selectIcons__icon'><img src={person}></img></a>
                </div>
            </div>
            
        </header>
    );
}

export default Header