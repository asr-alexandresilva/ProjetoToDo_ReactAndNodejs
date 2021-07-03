import React from "react";
import * as S from "./styles";
import {Link} from 'react-router-dom';

import imgLogo from '../../assets/logo.png';
import imgNotificacao from '../../assets/notificacao.png';

function Header({lateCount, clickNotification}) {
    
    return (
        <S.Container>
            <S.LeftSide>
                <img src={imgLogo} alt="Logo"></img>
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">Início</Link>
                <Link to="/task">Nova Tarefa</Link>
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