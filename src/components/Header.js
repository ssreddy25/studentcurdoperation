import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <div className="flex justify-between shadow-lg">
            <div>
                <img className="w-14 h-14 p-2 m-2" alt="logo" src={"https://www.unixmen.com/wp-content/uploads/2015/11/url.png"}/>
            </div>
            
            <div className="">
            
                <ul className="flex py-4 mx-4 justify-around font-bold cursor-pointer">
                
                   
                    <li className="m-2">Login</li>
                    <li className="m-2">SignUp</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;