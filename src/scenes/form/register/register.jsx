import React from "react";
import "./EspacoCadastro.css";
import InputType from "../InputType/InputType";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
function EspacoCadastro() {
  const handleClickCadastro = (values) => {
    console.log(values);
  };
  const validationCadastro = yup.object().shape({
    email: yup.string().email("não é um email").required("Este campo é obrigatorio"),
    password: yup.string().min(8,"a senha deve ter 8 caracteres").required("Este campo é obrigatorio"),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null],"as senhas não são iguais")
  });
  return (
    <div className="espacoCadastro">
      <div className="form">
        <h2>Digite os dados para cadastro</h2>
        <h3>Email</h3>
        <Formik
          initialValues={{}}
          onSubmit={handleClickCadastro}
          validationSchema={validationCadastro}
        >
          <Form className="cadastroForm">
            <div className="cadastroFormGroup">
              <Field
                name="email"
                className="formField"
                placeHolder="Email"
              ></Field>
              <ErrorMessage
                component="span"
                name="email"
                className="formError"
              />
            </div>
            <h3>Senha</h3>
            <div className="cadastroFormGroup">
              <Field
                name="password"
                className="formField"
                placeHolder="*********"
              ></Field>
              <ErrorMessage
                component="span"
                name="password"
                className="formError"
              />
            </div>
            <h3>Confirme sua senha</h3>
            <div className="cadastroFormGroup">
              <Field
                name="confirmPassword"
                className="formField"
                placeHolder="*********"
              ></Field>
              <ErrorMessage
                component="span"
                name="confirmPassword"
                className="formError"
              />
            </div>
            <button type="submit" className="login">
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EspacoCadastro;
