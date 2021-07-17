import
React,
{
    useState, // usado para criacao de variaveis de estados
    useEffect, // funcao que disparada quando a tela esta carregada
}
    from "react";

import { Redirect } from 'react-router-dom';

import * as S from "./styles";

import api from "../../services/api";

import { format } from 'date-fns';

// Meus componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from '../../utils/typeIcons';

import iconeCalendario from '../../assets/calendario.png';
import iconeRelogio from '../../assets/relogio.png';
import iconeLixeira from '../../assets/lixeira.png';
import isConnected from "../../utils/isConnected";

function Task({ match }) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState(0);
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [macaddress, setMacaddress] = useState(isConnected);

    async function remove() {
        try {
            const confirm = window.confirm('Deseja realmente remover a tarefa?');
            if (confirm) {
                const resp = await api.delete(`/task/${match.params.id}`);
                setRedirect(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // carrega tarefas quando vier id no parametro
        if (match.params.id) {
            loadTaskDetails();
        }
    }, []); //se adicionar array vazio no fim do useEffect, ele nao entre em loop, so carrega dados quando e montado

    async function loadTaskDetails() {
        try {
            const response = await api.get(`/task/${match.params.id}`);
            console.log(response);

            setType(response.data.type);
            setId(response.data._id);
            setDone(response.data.done);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            setHour(format(new Date(response.data.when), 'HH:mm'));
            setMacaddress(response.data.macaddress);
        } catch (error) {
            console.log("Erro", error);
        }
    }

    function validFieldForm(field, msgError) {
        if (!field)
            return alert(msgError);
    }

    async function save() {
        // validacao de formulario
        validFieldForm(type, "Informe o tipo da tarefa");
        validFieldForm(title, "Informe o título da tarefa");
        validFieldForm(description, "Informe a descrição da tarefa");
        validFieldForm(date, "Informe a data da tarefa");
        validFieldForm(hour, "Informe a hora da tarefa");
        // -------------------
        try {
            if (match.params.id) {
                const response = await api.put(`/task/${match.params.id}`, {
                    macaddress: isConnected,
                    done,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`
                });

                console.log(response);
                setRedirect(true);
            } else {

                const response = await api.post('/task', {
                    macaddress: isConnected,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`
                });

                console.log(response);
                setRedirect(true);

            }
        } catch (error) {
            console.log('Erro', error);
        }

    }

    return (
        <S.Container>
            {redirect && <Redirect to="/"></Redirect>}
            <Header></Header>
            <S.Form onSubmit={e => e.preventDefault()}>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => {
                            if (index > 0)
                                return (
                                    <button key={index} type="button" onClick={() => setType(index)}>
                                        <img src={icon} alt="Tipo da Tarefa" className={type && type != index && 'inative'}></img>
                                    </button>
                                )
                        })
                    }
                </S.TypeIcons>

                <S.Input>
                    <label>Título</label>
                    <input type="text" placeholder="Título da Tarefa" value={title} onInput={e => setTitle(e.target.value)}></input>
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
                        {
                            match.params.id &&
                            <>
                                <img src={iconeLixeira} className="icone" alt="Ícone Lixeira"></img>
                                <button type="button" onClick={remove}>EXCLUIR</button>
                            </>
                        }
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