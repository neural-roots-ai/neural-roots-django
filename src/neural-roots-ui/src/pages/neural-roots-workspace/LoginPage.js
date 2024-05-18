import "../../styles/LoginStyle.css"
import React , {useContext} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginComp from "../../components/neural-roots-workspace/LoginComp";
import AuthContext from "../../context/AuthContext";
import { Container } from "react-bootstrap";
import HeroImg from '../../assets/img/clients/hero-img.png';

const LoginPage = () => {
    const navigate = useNavigate()
    let {user} = useContext(AuthContext)
        if(user == null)
        {return(
            <div id="login-page">
                <LoginComp /> 
            </div> 
            )}
        else{
            return < Navigate to = "/workspace/" />
        }
};
export default LoginPage;