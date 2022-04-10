import React from 'react';
import styled from 'styled-components';

function Button({inverted, text, onClick, small, className, noBorder, inActive}) {
  const clickItem =() => {
    if(!inActive){
      onClick()
    }
  }
  return (
    <ButtonView small={small} inverted={inverted} onClick={clickItem} className={className} noBorder={noBorder} inActive={inActive} >
        {text}
    </ButtonView>
  )
}

export default Button;

const ButtonView = styled.div`
  width: ${props => props.small ? "142px" : "100%"};
  min-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 10%;
  text-align: center;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: ${props => props.inverted ?  "1px solid #C0C0C0" : ""};
  color: ${props => props.inverted ? "#FB5E04" : "#ffffff"};
  background: ${props => props.inverted ? "#ffffff" : props.inActive ? "#C0C0C0":"#3DB0FF"};
  margin: auto;
  cursor: pointer;
`;