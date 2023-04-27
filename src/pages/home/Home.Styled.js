import styled from "styled-components";

export const Cards = styled.div`
    padding: 2%;

    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    overflow: scroll;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;
