import React, { useState } from "react";

import * as S from "./styles";

// Nossos componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";

function Home() {
  const [filterActived, setFilterAcetived] = useState('today');
  return (
    <S.Container>
      <Header></Header>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterAcetived("all")}>
          <FilterCard title="Todos" actived={filterActived == 'all'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("today")}>
          <FilterCard title="Hoje" actived={filterActived == 'today'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("week")}>
          <FilterCard title="Semana" actived={filterActived == 'week'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("month")}>
          <FilterCard title="Mês" actived={filterActived == 'month'}></FilterCard>
        </button>
        <button type="button" onClick={() => setFilterAcetived("year")}>
          <FilterCard title="Ano" actived={filterActived == 'year'}></FilterCard>
        </button>

      </S.FilterArea>
      <Footer></Footer>
    </S.Container>
  )
}

export default Home;
