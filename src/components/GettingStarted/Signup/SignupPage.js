import React,{useState} from "react";
import styled from "styled-components";
import signupImage from "../../../assets/Img/OgSignupImage.png"
import InputField from "../../ReusableComponents/InputField/InputField";
import Button from "../../ReusableComponents/Button/Button";

function SignupPage() {
    const [check, setCheck] = useState(false)
    const [inputFields, setInputFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        password: "",
    })
    const handleChange = (e)=> {
        const {value, name} = e.target
        console.log(value, name)
        setInputFields({
            ...inputFields,
            [name] : value
        })
    }

    return (
        <SignupPageView>
            <div className="width-50">
                <div className ="hide-mobile width-100">
                    <div className="image-text mb-5">
                    Building exceptional services with Back Office Support and Business Perfomance
                    </div>
                </div> 
            </div>
            <div className="width-50 p-5">
                <div className="width-90">
                    <div className="create-account-heading mb-3">Create Account</div>
                    <div className="create-account-subheading">Build an exceptional business</div>
                    <div className="mt-5">
                        <div className="input-card">
                            <div >
                                <InputField
                                    className= "formInput"
                                    placeholder="Enter your first name"
                                    type="text"
                                    onChange={handleChange}
                                    value = {inputFields.firstName}
                                    min={1}
                                    label= {"First Name"}
                                    bodyClass={"mr-2 align-start mt-2 mr-2 "}
                                    name={"firstName"}
                                />
                            </div>
                            <div>
                                <InputField
                                    className= "formInput"
                                    placeholder="Enter your last name"
                                    type="text"
                                    onChange={handleChange}
                                    value = {inputFields.lastName}
                                    label= {"Last Name"}
                                    bodyClass={"mr-2 align-start mt-2 mr-2 "}
                                    name={"lastName"}
                                />
                            </div>
                        </div>

                        <div className="input-card">
                            <div className="width-100">
                                <InputField
                                    className= "formInput"
                                    placeholder="Enter your first name"
                                    type="number"
                                    onChange={handleChange}
                                    value = {inputFields.number}
                                    min={2}
                                    label= {"Phone Number"}
                                    bodyClass={"mr-2 align-start mt-2 mr-2 "}
                                    name={"number"}
                                />
                            </div>
                        </div>


                        <div className="input-card">
                            <div className="width-100">
                                <InputField
                                    className= "formInput"
                                    placeholder="Enter your email"
                                    type="text"
                                    onChange={handleChange}
                                    value = {inputFields.email}
                                    min={2}
                                    label= {"Email Address"}
                                    bodyClass={"mr-2 align-start mt-2 mr-2 "}
                                    name={"email"}
                                />
                            </div>
                        </div>

                        <div className="input-card">
                            <div className="width-100">
                                <InputField
                                    className= "formInput"
                                    placeholder="Enter your password"
                                    type="password"
                                    onChange={handleChange}
                                    value = {inputFields.password}
                                    min={2}
                                    label= {"Password"}
                                    bodyClass={"mr-2 align-start mt-2 mr-2 "}
                                    name={"password"}
                                />
                            </div>
                        </div>

                    </div>
                    <div className=" flex justify-between my-4">
                        <div className="flex align-center">
                            <CheckList active={check} onClick={()=>setCheck(!check)}/>
                            <div className="ml-2 remember-me-text"> Remember me</div>
                        </div>
                        <div className="flex align-center">
                            <div className="forgot-password-text"> Forgot Password?</div>
                        </div>
                    </div>

                    <div>
                        <Button text={"Sign Up"} className={""}/>
                    </div>
                    <div className="flex justify-center align-center mt-4 p-2">
                        <div className="ml-4 remember-me-text mr-1"> Remember me</div><div className="forgot-password-text ml-2 cursor-pointer"> Forgot Password?</div>
                    </div>
                </div>

            </div>
            
        </SignupPageView>
    )
}

export default SignupPage;

const SignupPageView = styled.div`
    height: 100vh;
    display: flex;
    .width-50 {
        width: 50% !important;
        max-height: 900px !important;
    }
    .width-100 {
        width: 100% !important;
    }

    .width-90 {
        width: 90% !important;
    }
    .hide-mobile {
        background-image: url(${signupImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100% !important;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        .img {
            min-height: 100% !important;
        }
        .image-text {
            height: 172px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 43px;
            letter-spacing: -1px;
            color: #FFFFFF;
            text-shadow: 0px 32px 84px rgba(29, 41, 63, 0.06);
            max-width: 449px;
            display: flex;
        }
    }
    .create-account-heading {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        color: #272262;
    }
    .create-account-subheading {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        color: rgba(40, 44, 64, 0.6);
    }
    .input-card {
        display: flex;
        justify-content: space-between;
        margin-top: 10px !important;
    }
    .remember-me-text {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 10%;
        color: rgba(130, 134, 154, 0.6);
    }
    .forgot-password-text {
        font-family: 'Roobert';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 10%;
        text-align: right;
        color: #3DB0FF;
    }
`;

const CheckList = styled.div`
    background: ${props => props.active ? "#3DB0FF" : "#EBEBEB"};
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
    width: 20.32px;
    height: 20.27px;
`;