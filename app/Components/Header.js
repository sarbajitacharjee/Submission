// components/Header.js
import Link from "next/link";
const Header = () => {
    return (
      <header className="bg-dark text-white py-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="fw-bold">Survey App</h1>
            </div>
            <div className="col-auto ">
              <nav className="flex gap-6">
                <Link href="/Problem1" className="text-decoration:none text-white text-decoration-none"> problem 1    </Link>
                <Link href="/" className="text-decoration:none text-white text-decoration-none"> problem 4    </Link>
                
                
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  