import Logo from "./logo"


export default function Navbar(){

return(
    <nav className="text-custom-biege w-screen flex bg-black pt-3">
        <Logo></Logo>
        <div className="flex items-center justify-between flex-grow text-custom-beige">
            <input type="text" className="rounded-full focus:border-custom-pink focus:ring-2 focus:ring-custom-beige focus:outline-none bg-custom-beige bg-opacity-60 h-8 self-center w-1/3 p-2 ml-5" placeholder="Search"/>
            <a href=""><p className="">Explore</p></a>
            <a href=""><p className="">Activity</p></a>
            <a href=""><p className="">Trending</p></a>
            <button className="text-custom-dark bg-custom-pink rounded-full p-1 w-20 ml-5 mr-12">JOIN</button>
        </div>
        
    </nav>
)

}