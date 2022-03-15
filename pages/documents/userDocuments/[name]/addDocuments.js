import React, {useState} from 'react';
import Layer from "../../../../components/Layer";
import {Box, TextField} from "@mui/material";
import {Documents} from "../../../analyzes/userAnalyze/[name]/addAnalyze";
import {useRouter} from "next/router";
import styles from "../../../../styles/Support.module.sass";
import {ButtonComponent} from "../../../../components/Button/ButtonComponent";

const AddDocuments = () => {
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
    return (
        <Layer>
            <p style={{alignSelf: 'center',marginBottom:30 }}> {router.query.name} &#10142; Документы &#10142; <b>Edit\Add Документ</b></p>
            <div className='container'>
                <div className='page-title' style={{fontWeight: 'bold'}}>{'Документы'}</div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width:160,textAlign:'end',marginRight:15}}>Название документа</p>
                    <input style={{
                        width: "555px",
                        height: "40px",
                        borderRadius: '4px',
                        border: "2px solid grey",
                        padding: 10
                    }}
                           placeholder={"Название документа"}/>
                </div>
                <div style={{display:'flex',flexDirection:'row',margin:30}}>

                    <p style={{width:130,textAlign:'end',marginRight:15,marginTop:50}}>Фото документа</p>
                    <div>
                    <Documents data={data}/>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:30,width:300}}>
                        <ButtonComponent onClick={()=>router.back()} title={"Сохранить"} backgroundColor={"red"}/>
                        <ButtonComponent onClick={()=>router.back()} title={"Отмена"} backgroundColor={"#ADADAD"}/>

                    </div>
                    </div>
                </div>




            </div>
        </Layer>
    );
};

export default AddDocuments;
