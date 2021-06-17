import styled from "styled-components";

const formatarElementoAtivo = (prop, valorAtivo, valorDesativado) => {
    if (prop) {
        return valorAtivo;
    }else{
        return valorDesativado;
    }
}

export const Container = styled.div`
    height: 60px;
    margin: 20px;
    opacity: ${props => formatarElementoAtivo(props.actived, '1', '0.5')};
    background-color: ${props => formatarElementoAtivo(props.actived, '#3CA3F2', '#2C3D53')};
    padding: 10px;
    border-radius: 5px;
    transition: all 0.3s;

    display: flex;
    flex-direction: column;
    justify-content: space-around;


    img{
        max-width:25px;
    }

    span{
        color: #ffffff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background-color: #3CA3F2;
        opacity: 1;
        cursor: pointer;
    }
`