import React, {useState} from 'react';
import {Layer, Table} from "../../components";
import styles from "../../styles/Equipment.module.sass";
import {InputComponent} from "../../components/Input/InputComponent";
import {ButtonComponent} from "../../components/Button/ButtonComponent";
import {useRouter} from "next/router";
import EditOutlineIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/Delete'
import AddIcon from "@material-ui/icons/Add";
import {Documents} from "./userAnalyze/[name]/addAnalyze";
import EditOutlined from "@material-ui/icons/EditOutlined";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const UserAnalyze = () => {
    const router = useRouter();

    const [data,setData]=useState([{
        name:'Общий анализ крови',
        img:'https://www.medsprava.com.ua/images/articles/1847/forma_232.jpg'
    },
        {
            name: 'Кардиограмма',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtRQmSB-JiphkaybsDDAuqOQ6zfsbUUK16w&usqp=CAU'
        },
        {
            name: 'Витамины',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrh2sud8WldWbwlt0XEPG54-W8gU1yTA_jnw&usqp=CAU'
        }])
    const addAnalyze=()=>{
        router.push(`${router.asPath}/addAnalyze`,)
    }
    return (
        <Layer>
            <p style={{alignSelf: 'center', marginBottom: 30}}>{router.query.name} &#10142; <b>Анализы</b></p>
            <div className='container'>

                <div className='page-title' style={{fontWeight: 'bold'}}>{'Анализы'}</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 120,
                    borderBottom: "1px solid grey",


                }}>

                    <button style={{
                        width: 150,
                        backgroundColor: 'white',
                        border: "2px solid black",
                        borderRadius: 3,
                        padding: 7,
                        marginRight: 20,
                        fontWeight: 'bold',
                        cursor:'pointer'
                    }} onClick={()=>{
                        router.push(`${router.asPath}/addAnalyze`)
                    }}>{`Добавить анализ`}</button>


                    <div style={{

                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        paddingBottom: 20,
                        alignItems: 'center',

                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "space-around",
                            alignItems: 'center',
                            width: 260,
                            marginRight: 10
                        }}>
                            <p>Поиск</p>
                            <InputComponent placeholder="Введите ключевую фразу" width={200}/>
                        </div>
                        <ButtonComponent backgroundColor={"red"} title={"Submit"}/>
                    </div>


                </div>
                <div style={{margin: 30, alignSelf: 'center', width: 800}}>
                    {data.map(item => {
                        return (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                marginBottom: 20
                            }}>
                                <div  >
                                    <p style={{width: 200, textAlign: 'start'}}>{item.name}</p>
                                </div>

                                <div style={{width:"80%" }}>
                                    <div style={{
                                        maxHeight: 'max-content',
                                        width:'max-content',
                                        borderWidth: 2,
                                        border: " 4px solid black",
                                        borderRadius: 10,
                                        padding: 5
                                    }}>
                                        <img src={item.img}
                                             style={{alignSelf: 'center', maxHeight: 100, maxWidth: 200}}/>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    width: 100
                                }}>
                                    <EditOutlined/>
                                    <DeleteOutlined/>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </Layer>
    );
};


export default UserAnalyze;
