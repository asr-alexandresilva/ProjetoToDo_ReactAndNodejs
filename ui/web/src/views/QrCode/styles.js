import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #16202E;
    color: #fff;
    position: relative;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80%;
    margin: auto;

    h1, p{
        color: #2D9BEF;
        margin: 10px 0;
    }
    p{
        margin-bottom: 20px;
    }

`

export const QrCodeArea = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding-bottom: 60px;

    label{
        margin-top: 10px;
        text-transform: uppercase;
        font-weight: 600;
        opacity: 0.5;
    }

    input{
        font-size: 18px;
        padding: 7px 0px;
        text-align: center;
        background: none;
        outline: none;
        color: #ffffff;
        border: none;
        border-bottom: 1px solid #2D9BEF;
    }

    button{
        font-weight: 600;
        background-color: #2D9BEF;
        color: #ffffff;
        font-size: 18px;
        padding: 10px;
        border-radius: 50px;
        border:none;
        cursor: pointer;
        margin: 10px 0;
        outline: none;
        transition: all 0.3s;

        &:hover{

        }
    }
`