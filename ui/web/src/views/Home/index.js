import
React,
{
  useState, // usado para criacao de variaveis de estados
  useEffect, // funcao que disparada quando a tela esta carregada
}
  from "react";
import { Link } from 'react-router-dom';

import * as S from "./styles";

import api from "../../services/api";

// Nossos componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [filterActived, setFilterAcetived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data);
      })
      .catch();
  };

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length);
        // console.log(response.data.length);
      })
      .catch();
  }

  function notification() {
    setFilterAcetived('late');
  }

  function exibirTituloTarefas(filterActived) {
    const tituloTarefasMap = new Map();
    tituloTarefasMap.set("all", "Todas as Tarefas");
    tituloTarefasMap.set("late", "Tarefas Atrasadas");
    tituloTarefasMap.set("today", "Tarefas para Hoje");
    tituloTarefasMap.set("week", "Tarefas para a Semana");
    tituloTarefasMap.set("month", "Tarefas para o Mês");
    tituloTarefasMap.set("year", "Tarefas para o Ano");

    return tituloTarefasMap.get(filterActived);
  }

  useEffect(() => {
    loadTasks(); // carrega as tarefas quando a tela for carregada
    lateVerify(); // carrega tarefas atrasadas
  }, [filterActived]); // carrega as tarefas toda vez que o estado do filtro for alterado

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={notification}></Header>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterAcetived("all")}>
          <FilterCard title="Todos" actived={filterActived === 'all'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("today")}>
          <FilterCard title="Hoje" actived={filterActived === 'today'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("week")}>
          <FilterCard title="Semana" actived={filterActived === 'week'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("month")}>
          <FilterCard title="Mês" actived={filterActived === 'month'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("year")}>
          <FilterCard title="Ano" actived={filterActived === 'year'}></FilterCard>
        </button>

      </S.FilterArea>
      <S.Title><h3>{exibirTituloTarefas(filterActived)}</h3></S.Title>
      <S.Content>
        {
          tasks.map(task => (
            <Link to={`/task/${task._id}`}>
              <TaskCard type={task.type} title={task.title} when={task.when}></TaskCard>
            </Link>
          ))
        }
      </S.Content>
      <Footer></Footer>
    </S.Container>
  )
}

export default Home;
