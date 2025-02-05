import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../../src/img/logo.png";
import { IoMdSearch } from "react-icons/io";



const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <div>
            <header className='header'>
                <div className='header-top'>

                    <div className='name'>
                        <img src={logo} alt="" />
                        <h3> شرکت تولیدی المونیم و پی وی سی جهان پاور  </h3>
                    </div>
                    <div class="search-bar">
                        <form class="search-form d-flex align-items-center" method="POST" action="#">
                                <button type="submit" title="Search"><i><IoMdSearch/></i></button>
                                <input type="text" name="query" placeholder="جستجو..." title="Enter search keyword"/>
                        </form>
                    </div>
                    <h2><RxHamburgerMenu /> </h2>
                </div>

                <div className='header-down'>

                    <div>
                        <nav className='nav'>
                            <ul className='list-unstyled'>
                                <a href=""> <li>دسته بندی محصولات</li></a>
                                <Link to="/"><li>صفحه اصلی</li></Link>
                                <Link to="/about"><li>درباره ما</li></Link>
                                <Link to="/service"><li>خدمات ما</li></Link>
                                <a href=""><li>ارتباط با ما</li></a>
                            </ul>


                            <ul className='sidebar'>
                                <li><IoClose /></li>
                                <Link to="/"><li>صفحه اصلی</li></Link>
                                <Link to="/about"><li>درباره ما</li></Link>
                                <Link to="/service"><li>خدمات ما</li></Link>
                                <a href=""><li>ارتباط با ما</li></a>
                            </ul>

                        </nav>
                    </div>
                </div>







            </header>
        </div>


    )
}


export default Header


