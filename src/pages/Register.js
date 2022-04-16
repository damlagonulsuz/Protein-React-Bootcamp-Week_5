import React from "react";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import Dark from "../constants/Icon/Dark";
import { RegisterSchema } from "../constants/yupSchema";
import Sun from "../constants/Icon/Sun";
import { lightTheme, darkTheme } from "../context/Theme";



function Register(props) {

    const [loading, setLoading] = useState(false);

    return (

        <>
            <div className="formContainer">
                <div className="form">
                    <div className="up-bar">
                        <h3 className='title'>
                            <strong >Kayıt</strong>
                        </h3>


                        <div className="moonIcon modeControl">
                            <button><Dark /></button>
                            <button><Sun /></button>
                        </div>
                    </div>

                    <Formik
                        initialValues={{
                            name: '',
                            surname: '',
                            email: '',
                            username: '',
                            password: '',
                            confirmPassword: '',
                            terms: false
                        }}

                        onSubmit={auth => {
                            setLoading(true);
                            console.log(auth);

                        }}

                        validationSchema={RegisterSchema}

                    >

                        {
                            ({ values, handleChange, handleSubmit, errors }) =>
                                <form className="person">
                                    {
                                        console.log(errors)
                                    }
                                    <div className="personel-info">
                                        <div className="name">
                                            <label>İSİM</label>
                                            <br />

                                            <input
                                                type="text"
                                                name="email"
                                                placeholder='İsmini gir'
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="surname">
                                            <label>
                                                SOYİSİM
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                name="surname"
                                                placeholder="Soyismini gir"
                                                value={values.surname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>


                                    <div className="paddingOfForm">
                                        <label className='required '>E-POSTA</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder='E-posta adresini gir'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <span>{errors.email}</span>
                                    </div>
                                    <div className="paddingOfForm">
                                        <label className='required'>
                                            KULLANICI ADI
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Kullanıcı adını gir"
                                            value={values.username}
                                            onChange={handleChange}
                                        />
                                        <span>{errors.username}</span>
                                    </div>
                                    <div className="paddingOfForm">
                                        <label className='required'>
                                            ŞİFRE
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="Şifreni gir"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <span>{errors.password}</span>
                                    </div>
                                    <div className="paddingOfForm">
                                        <label className='required'>
                                            ŞİFRENİ TEKRAR GİR
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="confirmPassword"
                                            placeholder="Şifreni doğrula"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <span>{errors.confirmPassword}</span>
                                    </div>

                                    <div>
                                        <input className="checkbox" type="checkbox" name="terms" />
                                        <span>{errors.checkbox}</span>
                                        <h5>Sözleşmeyi kabul ediyorum</h5>
                                    </div>

                                    <div>
                                        <button className='kayitButton' type='submit' onClick={handleSubmit} disabled={loading}>KAYIT OL</button>
                                    </div>

                                </form>

                        }

                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Register;