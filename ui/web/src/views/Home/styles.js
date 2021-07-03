import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #16202E;
    color: #fff;
    position: relative;
`

export const FilterArea = styled.div`
    width: 100%;
   
   display: flex;
   justify-content: space-around;
   flex-wrap: nowrap;

   button{
       width: 400px;
       background: none;
       padding: 0;
       border: none;
   }
`

export const Content = styled.div`
    width: 100%;

    display: grid;
    padding-bottom: 60px;
    grid-template-columns: repeat(auto-fit, minmax(20%, auto)); // "auto-fit" qtd automatica de colunas | "minmax(20%, auto)" minimo de largura sera 20% da tela e maximo sera automatico (Organiza automatico na tela)
    justify-content: flex-start;

    a{
        text-decoration: none;
    }
`

export const Title = styled.div`
   width: 96%;
   border-bottom: 1px solid #FFFFFF7A;
   margin: 30px 2%;
   margin-top:0;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;

   h3{
       position: relative;
       top: 10px;
       margin: 0;
       background-color: #16202E;
       padding: 0 10px;
       text-transform: uppercase;
       font-weight: 500;
   }
`