import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="hover:text-gray-300" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" href="/hex-board">
            Go to Hex Board
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" href="/square-board">
            Go to Square Board
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
