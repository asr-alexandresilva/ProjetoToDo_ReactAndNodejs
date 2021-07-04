import
React,
{
    useMemo, // Parecido com useState, pega os status de carregamento da variavel
}
    from "react";

import {format} from 'date-fns';
import * as S from "./styles";

import typeIcons from "../../utils/typeIcons";

function TaskCard({ type, title, when, done}) {
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));
    return (
        <S.Container done={done}>
            <S.TopCard>
                <img src={typeIcons[type]}></img>
                <h3>{title}</h3>
            </S.TopCard>
            <S.BottomCard>
                <span>{date}</span>
                <span>{hour}</span>
            </S.BottomCard>
        </S.Container>
    )
}

export default TaskCard;