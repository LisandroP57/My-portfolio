import React from "react";
import styled from "styled-components";

export const Footer = ({autor}) => {
    return (
        <StyledFooter>
                <div className="ft-container">
                    <div className="copyright">
                        <span>Copyright &copy; {autor}</span>
                    </div>
                </div>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
`;