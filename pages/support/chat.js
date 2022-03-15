import React, {useState} from 'react';
import {Layer} from "../../components";
import TelegramIcon from "@material-ui/icons/Telegram";
import {AddCircleOutline} from "@material-ui/icons";
import {ButtonComponent} from "../../components/Button/ButtonComponent";
import {InputComponent} from "../../components/Input/InputComponent";
import styles from '../../styles/Support.module.sass'

const Chat = () => {
    const [data, setData] = useState([{
        name: 'Общий анализ крови',
        img: 'https://www.medsprava.com.ua/images/articles/1847/forma_232.jpg'
    }])
    const [isSizeChanged,setIsSizeChanged]=useState(false)
    const [document,setDocument]=useState('')

    return (
        <Layer>
            <div className='container'>
                <div className='page-title' style={{fontWeight: 'bold'}}>{'Фото'}</div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',marginBottom:50}}>

                    {
                        isSizeChanged?
                             <DetailDocument document={document} setIsSizeChanged={setIsSizeChanged} isSizeChanged={isSizeChanged}/>
                            :
                        data.map((item, index) => {
                        if (index <= 1) {
                            return (
                                <div style={{
                                    height: "86px",
                                    width: "86px",
                                    borderWidth: 2,
                                    border: " 3px solid black",
                                    borderRadius: 10,
                                    padding: 5,
                                    marginRight: 15,

                                }}>
                                    <img src={item.img}
                                         style={{alignSelf: 'center', width: "70px", height: "70px"}} onClick={()=>{
                                             setDocument(item.img)
                                        setIsSizeChanged(!isSizeChanged)

                                    }}/>
                                </div>)
                        }
                    })}
                    <div style={{
                        alignItems: 'center',
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        height: 100
                    }}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <p style={{width:160,textAlign:'end',marginRight:15}}>Название документа</p>
                            <input className={styles.input1} style={{
                                width: "555px",
                                height: "40px",
                                borderRadius: "4px",
                                border: "2px solid grey",
                                color: "white",
                                backgroundColor: "rgba(0, 0, 0, 0.35)",
                                padding: 10
                            }}
                                   placeholder={"Название документа"}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <p style={{width:160,textAlign:'end',marginRight:15}}>Причина отказа</p>
                            <input style={{
                                width: "555px",
                                height: "40px",
                                borderRadius: '4px',
                                border: "2px solid grey",
                                padding: 10
                            }}
                                   placeholder={"Причина отказа в случае отказа фото"}/>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',width:300}}>
                    <ButtonComponent title={"Сохранить"} backgroundColor={"red"}/>
                    <ButtonComponent title={"Отозвать"} backgroundColor={"#ADADAD"}/>
                </div>

            </div>

        </Layer>
    );
};
const DetailDocument=({document,isSizeChanged,setIsSizeChanged})=>{
    return(
        <div style={{
            height: "max-content",
            width: "max-content",
            borderWidth: 2,
            border: " 3px solid black",
            borderRadius: 10,
            padding: 5,
             marginTop:300,
            position:'absolute'

        }}>
            <img src={document}
                 style={{alignSelf: 'center', width: "550px", height: "550px"}} onClick={()=>{
                setIsSizeChanged(!isSizeChanged)

            }}/>
        </div>
    )
}
export default Chat;
