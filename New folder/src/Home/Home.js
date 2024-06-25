import './Home.css'
import image1 from "../images/logo-white.svg";


export default function Home(){
    return(
        <div className='header_content'>
       <header>
        <div className='header_inside'>
            <div className='logo'>
           <img src={image1}></img>
            </div>
            <nav>
                <ul>
                    <li><a href='Home'>HOME</a>  </li>
                    <li> <a href='Blog'>BLOG</a></li>
                    <li> <a href='Pages'>PAGES</a></li>
                    <li> <a href='Apartments'>APARTMENTS</a></li>
                    <li> <a href='About'>ABOUT</a></li>
                    <li> <a href='Contact'>CONTACT</a></li>
                </ul>
            </nav>

            <button>Schedule Visit</button>
         
        </div>
       </header>
        </div>
        
    )
}