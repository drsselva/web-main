import { useState , useEffect} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome,AiFillSetting } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsFillBookFill } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';
import GritLogo from '../../EducatorAssets/Home-grit-logo.png';
import LogoIcon from "../../EducatorAssets/Home-logo-icon.png";

function ReactSideBar(){
    const [show,setshow]=useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 768);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const handleClick = () => {
        if (!isMobile) {
          setshow(!show);
        }
      };
    return(
        <div>
          <div className={!show?'sidebar1 fixed':'sidebar fixed'}>

            
                <div className='main' onClick={handleClick}>
                    {!show? <img className='img-logo1' src={LogoIcon} alt="LogoIcon" />:<img className='img-logo2' src={GritLogo} alt="GritLogo" />}
                </div>
                <ul>
    
                <li>
                    <AiOutlineHome className='icon' />
                    {!show?"":<h2>Home</h2>}
                </li>
                <li>
                    <TbLayoutDashboard className='icon' />
                    {!show?"":<h2>Students</h2>}
                </li>
                <li>
                    <CgProfile className='icon' />
                    {!show?"":<h2>My Lessons</h2>}
                </li>
                <li>
                    <BsFillBookFill className='icon' />
                    {!show?"":<h2>Live Classes</h2>}
                </li>
                <li>
                    <GiHamburgerMenu className='icon' />
                    {!show?"":<h2>Messages</h2>}
                </li>
                <li>
                    <AiFillSetting className='icon' />
                    {!show?"":<h2>Settings</h2>}
                </li>
            </ul>
            <div className="signout"> 
            <li>
                    <GoSignOut className='icon' />
                    {!show?"":<h2>Sign Out</h2>}
                </li>
            </div>
          </div>
        </div>
    );
}
export default ReactSideBar;