import Logo from "./components/logo";
import Form from "./components/logIn";

interface LoginPageProps{
    handleLogin: ()=> void;
    isLoggedIn: boolean
}

const LoginPage: React.FC<LoginPageProps> = (props) =>{
    
    return(
        <div className="bg-custom-dark h-screen w-screen flex items-center justify-center align-middle">
            <Logo></Logo>
            <div></div>
            <Form handleLogin = {props.handleLogin} isLoggedIn = {props.isLoggedIn} ></Form>
        </div>
    )
}



export default LoginPage;