import styled from "styled-components";

export const Container = styled.div`
    /* min-width: 250px;
    max-width: 200px; */
    height: 160px;
    padding: 0 10px;
    border-radius: 10px;
    margin: 10px 5%;
    background-color: #343F4D;
    box-shadow: 0px 3px 8px #000000BB;
    transition: all 0.5s;
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(0);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover{
        opacity: 1;
        transform: translateY(-2px);
    }
`

export const TopCard = styled.div`
    color: #FFFFFF;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        max-width: 50px;
    }
`

export const BottomCard = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        opacity: 0.6;
        color: #fff;
    }
`