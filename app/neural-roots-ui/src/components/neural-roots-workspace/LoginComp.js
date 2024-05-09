import React, { useContext } from "react";
import {Form,Button, Container} from 'react-bootstrap';
import AuthContext from "../../context/AuthContext";
import "../../styles/LoginStyle.css"

const LoginComp = () => {
  let {loginUser} = useContext(AuthContext)
  let {user } = useContext(AuthContext)

    return(
      <section id="login">
        <Container>
          <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" placeholder="login"/>
          </form>
        </Container>
      </section>
      );
};

export default LoginComp

