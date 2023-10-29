import Navbar from "./components/navigation"
import Category from "./components/category"


export default function LandingPage(){
    return(
        <div className="bg-black h-screen">
            <Navbar></Navbar>
            <div className="h-1/2">
                <p className="w-1/3 font-bold p-10 pb-0 text-4xl mb-3">
                    Revolutionizing Real Estate: Insights and Innovations 
                    from this weeks Property Expo 2023
                </p>
                <p className="w-1/3 pl-10 pt-4 text-base text-custom-beige">
                    Explore the future of real estate at the Property Expo 2023, where cutting-edge technologies and visionary designs converge. Gain exclusive insights and discover innovative trends shaping tomorrow's homes and investment opportunities.
                </p>
            </div>
            
            <Category></Category>
        </div>
           
    )
}