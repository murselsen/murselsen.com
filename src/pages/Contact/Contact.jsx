import React, {useEffect, useState} from 'react';
import Css from './Css/Contact.module.css';
import {ErrorMessage, Field, Form, Formik, useFormikContext} from "formik";
import * as Yup from "yup";
// Components
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Const from "../../components/CodeTexts/Const.jsx";
import Method from "../../components/CodeTexts/Method.jsx";
import Object from "../../components/CodeTexts/Object.jsx";

const Contact = props => {
    const [formData, setFormData] = useState({});
    const initialValues = {
        name: "",
        email: "",
        message: ""
    }

    const formSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("must be suitable for email format").required("Email is required"),
        message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters")
    })

    const onSubmit = () => {
    }
    const FormWatcher = ({setFormData}) => {
        const {values,} = useFormikContext();

        useEffect(() => {
            setFormData(values);
        }, [values, setFormData]);

        return null; // Görünmez yardımcı bileşen
    };
    return (
        <div className={Css.ContactPage}>

            <Sidebar/>
            <div className={Css.Content}>
                <div className={Css.FormArea}>
                    <Formik initialValues={initialValues} onChange={() => {
                        console.log('changing');
                    }} onSubmit={onSubmit} validationSchema={formSchema}>
                        <Form className={Css.Form}>
                            <div className={Css.FormGroup}>
                                <label htmlFor={"inputName"} className={Css.FormLabel}>_name:</label>
                                <Field type={"text"} name={"name"} id={"inputName"} placeholer={"Name Surname"}
                                       className={Css.FormInput} placeholder={"Name ... "}/>
                                <ErrorMessage name={"name"} component={"span"} className={Css.FormError}/>
                            </div>
                            <div className={Css.FormGroup}>
                                <label htmlFor={"inputEmail"} className={Css.FormLabel}>_email:</label>
                                <Field type={"text"} name={"email"} id={"inputEmail"} placeholer={"Name Surname"}
                                       className={Css.FormInput} placeholder={"Email ... "}/>
                                <ErrorMessage name={"email"} component={"span"} className={Css.FormError}/>
                            </div>
                            <div className={Css.FormGroup}>
                                <label htmlFor={"inputMessage"} className={Css.FormLabel}>_message</label>
                                <Field name={"message"} id={"inputMessage"} rows={10}
                                       className={Css.FormTextArea} placeholder={"Message ... "}></Field>
                                <ErrorMessage name={"message"} component={"span"} className={Css.FormError}/>
                            </div>
                            <div className={Css.FormGroup}>
                                <button type={"submit"} className={Css.FormButton}>submit-message</button>
                            </div>
                            <FormWatcher setFormData={setFormData}/>
                        </Form>
                    </Formik>
                </div>
                <div className={Css.CodeArea}>
                    <ul className={Css.CodeList}>
                        <li className={Css.CodeItem}>
                            <Const value={"button"}>
                                <Method value={["document", "querySelector"]} text={"'#sendBtn'"}/>
                            </Const>
                        </li>
                        <li className={Css.CodeItem}></li>
                        <li className={Css.CodeItem}>
                            <Object constValue={"message"} values={[
                                {key: "name", value: formData["name"]},
                                {key: "email", value: formData["email"]},
                                {key: "message", value: formData["message"]},
                            ]}/>
                        </li>
                        <li className={Css.CodeItem}></li>
                        <li className={Css.CodeItem}>
                            <Method value={["button", "addEventListener"]} text={"click"}>
                                <div style={
                                    {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        flexDirection: "row",
                                    }
                                }>
                                    <p> {", () => { "} </p>
                                    <Method value={[" form", "send"]} text={"message"}/>
                                    <p>{"}"}</p>
                                </div>
                            </Method>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Contact;