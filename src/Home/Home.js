import './Home.css'
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';



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
                    <li><a href=''>HOME</a>  </li>
                    <li> <a href=''>BLOG</a></li>
                    <li> <a href=''>PAGES</a></li>
                    <li> <Link to={'/Apartment'}></Link> </li>
                    <li> <Link to={'/About'}>ABOUT</Link></li>
                    <li> <a href='Contact'>CONTACT</a></li>
                </ul>
            </nav>

            <button>Schedule Visit</button>
         
        </div>
       </header>
        </div>
        
    )
}