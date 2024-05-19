import React, { Component } from "react";

import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../shared/validator.js';
import { Container } from "react-bootstrap";


const LoginComp = () =>{

    return(
        <div>
           <form onSubmit={""}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" placeholder="login"/>
          </form>
        </div>
    )
}

export default LoginComp