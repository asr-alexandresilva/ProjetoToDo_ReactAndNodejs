import
React,
{
    useState, // usado para criacao de variaveis de estados
    useEffect, // funcao que disparada quando a tela esta carregada
}
    from "react";

import * as S from "./styles";

import api from "../../services/api";

// Meus componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from '../../utils/typeIcons';

import iconeCalendario from '../../assets/calendario.png';
import iconeRelogio from '../../assets/relogio.png';
import iconeLixeira from '../../assets/lixeira.png';

function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length);
            })
            .catch();
    }

    useEffect(() => {
        lateVerify(); // carrega tarefas atrasadas
    });

    return (
        <S.Container>
            <Header lateCount={lateCount}></Header>
            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => {
                            if (index > 0)
                                return (
                                    <button type="button" onClick={() => setType(index)}>
                                        <img src={icon} alt="Tipo da Tarefa" className={type && type != index && 'inative'}></img>
                                    </button>
                                )
                        })
                    }
                </S.TypeIcons>

                <S.Input>
                    <label>Título</label>
                    <input type="text" placeholder="Título da Tarefa"></input>
                </S.Input>

                <S.TextArea>
                    <label>Título</label>
                    <textarea rows={4} placeholder="Detalhes da Tarefa"></textarea>
                </S.TextArea>

                <S.Input>
                    <label>Data</label>
                    <input type="date"></input>
                    <img className="icone" src={iconeCalendario} alt="Ícone Calendário"></img>
                </S.Input>

                <S.Input>
                    <label>Hora</label>
                    <input type="time"></input>
                    <img className="icone" src={iconeRelogio} alt="Ícone Relógio"></img>
                </S.Input>

                <S.Options>
                    <div className="containerCheckbox">
                        <input type="checkbox"></input>
                        <label>CONCLUÍDO</label>
                    </div>
                    <div className="containerButton">
                        <img src={iconeLixeira} className="icone" alt="Ícone Lixeira"></img>
                        <button type="button">EXCLUIR</button>
                    </div>
                </S.Options>

                <S.Save>
                    <button type="button">SALVAR</button>
                </S.Save>
            </S.Form>
            <Footer></Footer>
        </S.Container>
    )
}

export default Task;