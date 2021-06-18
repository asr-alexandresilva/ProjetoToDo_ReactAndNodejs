import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #343F4D;
    border-bottom: 3px solid #2D9BEF;
    box-shadow: 0px 2px 5px #00000050;

    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 10px;

    display: flex;
    align-items: center;

    img{
        max-width: 100px;
    }
`

export const RightSide = styled.div`
     width: 50%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a, button#notificacao{
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        margin: 0 12px;
        text-transform: uppercase;

        &:hover{
            color: #2D9BEF;
            transition: all 0.3s;
        }
        position: relative;
    }
    
    a::after{
        content: ' | ';
        position: absolute;
        bottom: 1px;
        padding-left: 10px;
    }
    /* a:last-child{
        margin:0;
        margin-left: 12px;
    } */
    a:last-child::after{
        content: '';
    }

    button#notificacao{
        background: none;
        border: none;
        padding: 0;
        margin-right:0;

        img{
            max-width: 25px;
        }

        span{
            background-color: #ffffff;
            color: #2D9BEF;
            padding: 3px 7px;
            border-radius: 100%;
            position: relative;
            top: -20px;
            left: -10px;
        }

        &:hover{
            opacity: 0.7;
            transition: all 0.3s;
        }
    };
`