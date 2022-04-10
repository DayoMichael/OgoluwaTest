import React from 'react';
import styled from 'styled-components';

function InputField({type, placeholder, className, onChange, min, value, max, label, bodyClass, name, onClick, autocomplete, small}) {
  return (
    <InputFieldView small={small}>
        <div className = {`label mt-4 ${bodyClass}`}>{label}</div>
        <div className = {`form-section ${bodyClass}`} onClick={onClick}>
            <input
                id = "Bullets"
                className= {`${className}`}
                placeholder={placeholder}
                type= {type}
                onChange={onChange}
                value={value}
                min={min}
                name={name}
                autoComplete={autocomplete? autocomplete: "on"}
            />
        </div>
    
    </InputFieldView>
  )
}

export default InputField;

const InputFieldView = styled.div`
    width: 100% !important;
    .form-section{
        background: #FFFFFF;
        border-bottom: 3px solid #EBEBEB;
        box-sizing: border-box;
        height: 46px;
        width: ${props => props.small && "150px !important"}
        
    }
    .formInput {
        display: flex;
        justify-content: center;
        background: #FFFFFF;
        padding: ${props => props.small ? "15px" : " "};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #373C56;
        border: none;
        height: 100%;
        width: 100%;
    }
    .form-section{
        width: 100%
    }

    input:focus {
        outline: none !important;
        border-bottom: 3px solid #272262 !important ;
        border: none;
    }
    
    input{

    
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #8E9BAE;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #8E9BAE;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #8E9BAE;
        }

        :-webkit-autofill{
            -webkit-text-fill-background: #ffffff !important;
        }
    }
    .label {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 10%;
        color: #82869A;
    }
`;