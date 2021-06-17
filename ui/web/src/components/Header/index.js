import React from "react";

import * as S from "./styles";

import imgLogo from '../../assets/logo.png';
import imgNotificacao from '../../assets/notificacao.png';

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={imgLogo} alt="Logo"></img>
            </S.LeftSide>
            <S.RightSide>
                <a href="#">Início</a>
                <a href="#">Nova Tarefa</a>
                <a href="#">Sincronizar Celular</a>
                <a href="#" id="notificacao">
                    <img src={imgNotificacao} alt="Notificalção"></img>
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>
    )
}

export default Header;