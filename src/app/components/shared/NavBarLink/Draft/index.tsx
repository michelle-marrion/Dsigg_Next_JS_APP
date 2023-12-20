
import Link from 'next/link';
import {useRouter} from 'next/router';
/**Import Icon */
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

function NavBar() {
      const router = useRouter()
      return (
        <nav>
          <Link href="/" className={router.pathname === '/' ? 'selected' :''} style={linkStyle('Home')}>
           <HomeRoundedIcon /> 
          </Link> <ChevronRightTwoToneIcon/>
          <Link href="/dashboards/home" className={router.pathname === '/dashboards/home' ? 'selected' :''} style={linkStyle('List')}>
            Dashboard
          </Link>
          <style jsx>{`
            nav {
              background-color:;
              text-align: left;
              margin-top : 20px;
              margin-bottom : 20px;
            }
            Link {
              margin-left:-10px;
              text-decoration: none;
              color: black;
              padding: 1px;
            }
            .selected {
              border-bottom: 2px solid red;
            }
          `}</style>
        </nav>
      );
    }
    
function linkStyle(page) {
return {
      marginLeft: page === 'home' ? 0 : 20,
      display: page === 'home' ? 'none' : 'inline-block',
      fontWeight: page === 'home' ? 'bold' : 'normal',
      };
}

export default NavBar();