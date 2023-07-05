import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from "next/router";
import { useAuth } from '../../../context/AuthContext'
export const Header = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a> Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <a> Jobs</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
              <li>
                {user ? (
                  <div>
                      {/* <Link href="/login" onClick={()=>{
                        logout(),
                        router.push('/login')
                      }}>Logout</Link> */}
                  </div>
                ) : (
                  <Link href="/login" passHref>
                    <a> LogIn/Signup</a>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Get Jobs that fits you</p>
      </div>
    </header>
  );
};
