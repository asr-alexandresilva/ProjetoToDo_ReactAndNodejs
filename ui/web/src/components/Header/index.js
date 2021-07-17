import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Link, Redirect } from 'react-router-dom';

import imgLogo from '../../assets/logo.png';
import imgNotificacao from '../../assets/notificacao.png';

import api from '../../services/api';
import isConnected from "../../utils/isConnected";

function Header({ clickNotification }) {
    const [lateCount, setLateCount] = useState();
    const [redirect, setRedirect] = useState(false);

    async function lateVerify() {
        await api.get(`/task/filter/late/${isConnected}`)
            .then(response => {
                setLateCount(response.data.length);
            })
            .catch();
    };

    useEffect(() => {
        if (!isConnected)
            setRedirect(true)

        lateVerify();
    }, []); // "[]" Faz o useEffect realizar a acao apenas uma vez

    async function Logout() {
        localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/qrcode"></Redirect>}
            <S.LeftSide>
                <img src={imgLogo} alt="Logo"></img>
            </S.LeftSide>
            <S.RightSide>
                {!isConnected ?
                    <>
                        <Link to="/qrcode">Sincronizar Celular</Link>
                    </>
                    :
                    <>
                        <Link to="/">Início</Link>
                        <Link to="/task">Nova Tarefa</Link>
                        <a onClick={Logout}>Sair</a>
                        {lateCount && lateCount > 0 ?
                            <>
                                <button href="#" id="notificacao" onClick={clickNotification}>
                                    <img src={imgNotificacao} alt="Notificação"></img>
                                    <span>{lateCount}</span>
                                </button>
                            </>
                            :
                            ''
                        }
                    </>
                }
            </S.RightSide>
        </S.Container>
    )
}

export default Header;