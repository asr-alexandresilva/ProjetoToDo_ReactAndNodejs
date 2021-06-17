import React from "react";

import * as S from "./styles";
import imgFiltro from "../../assets/filtro.png";

function FilterCard({title, actived}) {
    return (
        <S.Container actived={actived}>
            <img src={imgFiltro} alt="Filtro"></img>
            <span>{title}</span>
        </S.Container>
    )
}

export default FilterCard;