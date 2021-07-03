import styled from "styled-components";
import iconeCheck from '../../assets/check.png';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #16202E;
    color: #fff;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 62px;
  /* margin-top: 10px; */
`

export const TypeIcons = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
   button{
        width: 8%;
        padding: 0;
        margin: 10px 1%;
        background: none;
        border: none;
   }

   img{
       cursor: pointer;
       max-width: 100%;
       transition: all 0.5s;

       &:hover{
           opacity: 1;
           filter: grayscale(0%);
       }

       &.inative{
        filter: grayscale(100%);
        opacity: 0.3;
   }
   }
`

export const Input = styled.div`
    width: 100%;
    margin: 20px 0;

    display: flex;
    flex-direction: column;
    position: relative;

    label{
        color: #ffffff;
        opacity: 0.5;
        margin: 5px 0;
    }

    input{
        font-size: 18px;
        padding: 15px 0;
        color: #ffffff;
        background: none;
        border: none;
        border-bottom: 1px solid #3CA3F2;
        position: relative;
        width: 100%;
        z-index: 3;
        outline: none;

        &[type="date"]::-webkit-calendar-picker-indicator,
        &[type="time"]::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            position: absolute;
            right: 0;
            top: 0;
            width: 50%;
            z-index: 4;
        }
    }

    img.icone{
        max-width: 20px;
        position: absolute;
        bottom: 20px;
        right: 0px;
        opacity: 0.5;
        z-index: 2;
    }
`

export const TextArea = styled.div`
    width: 100%;
    margin: 20px 0;

    display: flex;
    flex-direction: column;

    label{
        color: #ffffff;
        opacity: 0.5;
        margin: 5px 0;
        /* margin-top: 30px; */
    }

    textarea{
        margin-top: 10px;
        font-size: 18px;
        background: none;
        border: none;
        border: 1px solid #3CA3F2;
        border-radius: 5px;
        color: #ffffff;
        outline: none;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    div.containerCheckbox{
        display: flex;
        align-items: center;
        color: #3CA3F2;
        font-weight: bold;

        input{
            appearance: none;
            border: 1px solid #3CA3F2;
            width: 18px;
            height: 18px;
            position: relative;
            border-radius: 5px;
            transition: all 0.5s;
        }
        input:after {
           
        }
        input:checked{
            background-color: #3CA3F2;
        }
        input:checked:after {
            width: 16px;
            height: 16px;
            content: " ";
            position:absolute;
            top:0px;
            right:-1px;
            background-image: url('${iconeCheck}');
            filter: grayscale(100%);
            background-size: cover;
            background-repeat: no-repeat;
            transition: all 0.5s;
            opacity: 0.9;
        }
    }

    div.containerButton{
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        img.icone{
            max-width: 16px;
            position: absolute;
            z-index: 2;
        }
        button{
            z-index: 3;
            padding-left: 20px;
            background: none;
            color: #A76D6D;
            border: none;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
        }
    }
`

export const Save = styled.div`
   width: 100%;

   button{
       width: 100%;
       background: #3CA3F2;
       border: none;
       font-size: 16px;
       color: #ffffff;
       font-weight:bold;
       padding: 10px;
       border-radius: 50px;
       margin: 10px 0;
       margin-top: 15px;
       cursor: pointer;
   }
`