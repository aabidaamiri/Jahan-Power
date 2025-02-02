import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
    return (
        <div>
            
            <header className='header'>
                <h2><Link><RxHamburgerMenu/></Link> </h2>

                <div className='name col-sm-6'>
                 شرکت تولیدی المونیم و پی وی سی جهان پاور 
                </div>

                <div className='col-sm-6'>
                    <nav className='nav'>
                        <ul className='list-unstyled'>
                            <Link to="/"><li>صفحه اصلی</li></Link>
                            <Link to="/about"><li>درباره ما</li></Link>
                            <Link to="/service"><li>خدمات ما</li></Link>
                            <a href=""><li>ارتباط با ما</li></a>
                        </ul>
                    </nav>
                </div>
                
                
            </header>
        </div>
    )
}

export default Header
