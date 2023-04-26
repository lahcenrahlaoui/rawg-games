import styled, { keyframes } from "styled-components";

export const Img = styled.img`
    width: 20px;
    height: 20px;
`;

export const rotateslide = keyframes`
    
        from {
            margin-top: -100px;
            opacity: 0;}
            to {opacity: 100%;
            
                margin-top: 0px;
            }
    
`;
export const NavStyle = styled.nav`
    animation: ${rotateslide} 1.5s;
`;

export const UnorderList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 10%);
    list-style-type: none;
    background: #141029;
    @media only screen and (max-width: 991px) {
        grid-template-columns: repeat(auto-fit, 100%);

        li {
            justify-content: start;
        }
    }
    li {
        text-transform: capitalize;
        display: flex;
        padding: 5px 10px;
        justify-content: center;
        align-items: center;

        height: 50px;
        &:hover {
            background: #3d55ea;
        }
        cursor: pointer;
    }
`;
