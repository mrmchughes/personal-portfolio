export default function NavBar() {
    return (
        <nav
        id="home"
        className="sticky top-0 bg-gray-100/50 flex flex-row flex-wrap justify-center sm:justify-between p-6"
    >
        <a tabIndex="0" className="flex text-3xl" href="#home">
          Michael Hughes
        </a>
        <div className="flex text-center text-3xl space-x-4">
          <a tabIndex="0" className="hover:scale-110" href="#about">
            About
          </a>

          <a tabIndex="0" className="hover:scale-110" href="#tools">
            Tools
          </a>

          <a tabIndex="0" className="hover:scale-110" href="#myWork">
            My Work
          </a>

          <a tabIndex="0" className="hover:scale-110" href="#contact">
            Contact
          </a>
        </div>
    </nav>
    )
}