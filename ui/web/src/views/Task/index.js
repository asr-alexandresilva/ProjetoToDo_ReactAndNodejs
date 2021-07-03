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
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

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

    async function save() {
        try {
            const response = await api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            });

            console.log(response);
            console.log('Tarefa cadastrada com sucesso!');
        } catch (error) {
            console.log('Erro', error);
        }
    }

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
                    <input type="text" placeholder="Título da Tarefa" onChange={e => setTitle(e.target.value)} value={title}></input>
                </S.Input>

                <S.TextArea>
                    <label>Descrição</label>
                    <textarea rows={4} placeholder="Detalhes da Tarefa" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </S.TextArea>

                <S.Input>
                    <label>Data</label>
                    <input type="date" onChange={e => setDate(e.target.value)} value={date}></input>
                    <img className="icone" src={iconeCalendario} alt="Ícone Calendário"></img>
                </S.Input>

                <S.Input>
                    <label>Hora</label>
                    <input type="time" onChange={e => setHour(e.target.value)} value={hour}></input>
                    <img className="icone" src={iconeRelogio} alt="Ícone Relógio"></img>
                </S.Input>

                <S.Options>
                    <div className="containerCheckbox">
                        {/* "() => setDone(!done)" guarda em done o valor contrario do que esta armazenado "true" ou "false" */}
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)}></input>
                        <label>CONCLUÍDO</label>
                    </div>
                    <div className="containerButton">
                        <img src={iconeLixeira} className="icone" alt="Ícone Lixeira"></img>
                        <button type="button">EXCLUIR</button>
                    </div>
                </S.Options>

                <S.Save>
                    <button type="button" onClick={save}>SALVAR</button>
                </S.Save>
            </S.Form>
            <Footer></Footer>
        </S.Container>
    )
}

export default Task;