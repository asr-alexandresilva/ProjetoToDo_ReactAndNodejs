import
React,
{
    useState, // usado para criacao de variaveis de estados
    useEffect, // funcao que disparada quando a tela esta carregada
}
    from "react";

import { Redirect } from 'react-router-dom';

import * as S from "./styles";
import Qr from 'qrcode.react';

import api from "../../services/api";

// Nossos componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function QrCode() {
    const [mac, setMac] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function SaveMac() {
        if (!mac) {
            alert('Você precisa informar o numero que apareceu no celular!');
        } else {
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/"></Redirect>}
            <Header></Header>
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={320}></Qr>
                </S.QrCodeArea>
                <S.ValidationCode>
                    <label>Digite a validação que apareceu no celular</label>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}></input>
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>
            <Footer></Footer>
        </S.Container>
    )
}

export default QrCode;
