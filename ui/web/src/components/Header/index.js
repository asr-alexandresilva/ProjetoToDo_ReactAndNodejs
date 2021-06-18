import React from "react";

import * as S from "./styles";

import imgLogo from '../../assets/logo.png';
import imgNotificacao from '../../assets/notificacao.png';

function Header({lateCount, clickNotification}) {
    console.log(lateCount)
    return (
        <S.Container>
            <S.LeftSide>
                <img src={imgLogo} alt="Logo"></img>
            </S.LeftSide>
            <S.RightSide>
                <a href="#">Início</a>
                <a href="#">Nova Tarefa</a>
                <a href="#">Sincronizar Celular</a>
                <button href="#" id="notificacao" onClick={clickNotification}>
                    <img src={imgNotificacao} alt="Notificação"></img>
                    <span>{lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
}

export default Header;