import React, { useState } from "react";
import "./EspacoLogin.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

//Componentes

import InputType from "../InputType/InputType.jsx";

const EspacoLogin = () => {
  const handleClickLogin = (values) => {
   console.log(values)
   localStorage.setItem("email",values.email)
   localStorage.setItem("senha",values.password);
   window.location.reload()
  }
  const validacaoLogin = yup.object().shape({
    email:yup
    .string()
    .email("Não é um email")
    .required("Este campo é obrigatório"),
    password:yup
    .string()
    .min(8,"A senha tem que ter 8 caracteres")
    .required("Este campo é obrigatório")
  })

  const [login, setLogin] = useState("");
  return (
    <div className="ladoTotal">
      <div className="ladoEsquerdo">
        <img
          src="src\assets\imgCirculos.png"
          alt="circulo ilustrativos"
          className="imgCirculos circuloDireita"
        />
        <img
          src="src\assets\ustoreLogo.png"
          alt="Logo da empresa uStore"
          className="logoUstore"
        />
        <img
          src="src\assets\imgCirculos.png"
          alt="circulo ilustrativos"
          className="imgCirculos circuloEsquerda"
        />
      </div>
      <div className="ladoDireito">
        <div className="infos">
          <h2>Log in</h2>
          <Formik initialValues={{}} className="formik" onSubmit={handleClickLogin}  validationSchema={validacaoLogin}>
            <Form className="loginForm">
              <div className="loginFormGroup">
                <Field
                  name="email"
                  className="formField"
                  placeholder="Email"
                ></Field>
                <ErrorMessage component="span" name="email" className="formError" />
              </div>
              <div className="loginFormGroup">
                <Field
                  name="password"
                  className="formField"
                  placeholder="*********"
                ></Field>
                <ErrorMessage component="span" name="password" className="formError" />
              </div>
              <div className="logadoSenha">
                <div className="manterLogado">
                  <InputType tipo="checkbox" id="check" name="check" />
                  <p>Keep me logged in</p>
                </div>
                <p className="esqueceuASenha">Forgot password?</p>
              </div>
              <input type="submit" value="Login" className="Login" />
            </Form>
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default EspacoLogin;
