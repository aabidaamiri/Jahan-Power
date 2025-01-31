import React from 'react'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className='col-xs-3'>
                 شرکت تولیدی المونیم و پی وی سی جهان پاور 
                </div>

                <div className='col-xs-6'>
                    <nav>
                        <ul className='list-unstyled'>
                            <a href="#home"><li>صفحه اصلی</li></a>
                            <a href="%about"><li>درباره ما</li></a>
                            <a href=""><li>خدمات ما</li></a>
                            <a href=""><li>ارتباط با ما</li></a>
                        </ul>
                    </nav>
                </div>
                
            </header>
        </div>
    )
}

export default Header
