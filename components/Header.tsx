
import StreemerLogo from "../public/assets/streemer.jpeg"
function Header() {
  return (
    <header>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img
            src="https://elements-cover-images-0.imgix.net/2aee42fe-23a7-4e9e-9c27-4103132abcd0?auto=compress%2Cformat&fit=max&w=2038&s=697ddf268820ef27559af3a61d2535f8"
            width={100}
            height={100}
            alt="Streemer"
            className="cursor-pointer object-contain"
            />

            <ul className="hidden space-x-4 md:flex">
              <li className="headerLink">Home</li>
              <li className="headerLink">TV Shows</li>
              <li className="headerLink">Movies</li>
              <li className="headerLink">New & Popular</li>
              <li className="headerLink">My List</li>
            </ul>
        </div>
    </header>
  )
}

export default Header