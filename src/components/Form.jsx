import React from "react";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import { Formik } from "formik";
import * as Yup from "yup";

function FormSide({ isNight, change }) {
  const formSchema = Yup.object().shape({
    email: Yup
    .string()
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Eposta alanı zorunludur."),
    password: Yup
    .string()
    .typeError("Her karakteri kullanamazsınız.")
    .min(8, "En az 8 karakter olmalıdır.")
    .max(32, "En fazla 32 karakter olmalıdır.")
    .required("Şifre alanı zorunludur."),

  });

  return (
    <div className={isNight ? "form-2" : "form-1"}>
      <div className="icon">
        {isNight ? <Sun change={change} /> : <Moon change={change} />}
      </div>
      <div className="form-area">
        <h3 className="header" style={{ color: isNight && "#FEFEFE" }}>
          Kayıt
        </h3>
        <p
          className="header-border"
          style={{ backgroundColor: isNight && "#FFBF5E" }}
        ></p>

        <Formik
          initialValues={{firstName:'', lastName:'',email: "", userName:'', password: "", passwordCheck: ""}}
        >
          {
            ({values}) => (
              <form className="form">
            <div className="name-area">
              <div>
                <label className="title" style={{ color: isNight && "#FEFEFE" }}>İSİM</label>
                <input 
                type="text" 
                name="firstName" 
                placeholder="İsmini gir" value={values.firstName}/>
                <span></span>
              </div>

              <div>
                <label className="title" style={{ color: isNight && "#FEFEFE" }}>SOYİSİM</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Soyisimini gir"
                  value={values.lastName}
                />
                <span></span>
              </div>
            </div>

            <div>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>E-POSTA</label>
              <input
                type="text"
                name="email"
                placeholder="E-posta adresini gir"
                value={values.email}
              />
              <span></span>
            </div>

            <div>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>KULLANICI ADI</label>
              <input
                type="text"
                name="userName"
                placeholder="Kullanıcı adını gir"
                value={values.userName}
              />
              <span></span>
            </div>

            <div>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>ŞİFRE</label>
              <input
                type="password"
                name="password"
                placeholder="Şifreni gir"
                value={values.password}
              />
              <span></span>
            </div>

            <div>
              <label className="required title" style={{ color: isNight && "#FEFEFE" }}>ŞİFRENİ TEKRAR GİR</label>
              <input
                type="password"
                name="password"
                placeholder="Şifreni doğrula"
                value={values.passwordCheck}
              />
              <span></span>
            </div>

            <div className="checkbox-area" >
              <input type="checkbox" />
              <label className="contract">Sözleşmeyi kabul ediyorum</label>
            </div>

            <div className="formButton" >
              <button className="registerButton" type="submit" style={{ backgroundColor: isNight && "#FFBF5E" }}>KAYIT OL</button>
              <span></span>
            </div>
          </form>
            )
          }
          
        </Formik>
      </div>
    </div>
  );
}

export default FormSide;
