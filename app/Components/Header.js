// components/Header.js
import Link from "next/link";
const Header = () => {
    return (
      <header className="bg-dark text-white py-1 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="fw-bold">Survey</h1>
            </div>
            <div className="col-auto ">
              <nav className="flex flex-wrap gap-6">
                <Link href="/" className="text-decoration:none text-white text-decoration-none"> Home    </Link>
                <Link href="/Problem1" className="text-decoration:none text-white text-decoration-none"> problem 1    </Link>
                <Link href="/problem2" className="text-decoration:none text-white text-decoration-none"> problem 2   </Link>
                <Link href="/problem3" className="text-decoration:none text-white text-decoration-none"> problem 3   </Link>
                <Link href="/Problem4" className="text-decoration:none text-white text-decoration-none"> problem 4    </Link>
                <Link href="/problem5" className="text-decoration:none text-white text-decoration-none"> problem 5  </Link>
                
                
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  