import React, {useState} from 'react';
import {useRouter} from "next/router";
import Layer from "../../../../components/Layer";
import {Box, TextField} from "@mui/material";

import {Documents} from "../../../analyzes/userAnalyze/[name]/addAnalyze";


import {DatePicker} from "@material-ui/pickers";
import {makeStyles} from "@material-ui/core/styles";
import {ButtonComponent} from "../../../../components/Button/ButtonComponent";

const AddDiagnosis = () => {
    const useStyles = makeStyles({
        icon: {
            color: 'white',
        },
    });

    const router = useRouter();
    const [data, setData] = useState([
        {
            name: 'Общий анализ крови',
            img: 'https://www.medsprava.com.ua/images/articles/1847/forma_232.jpg'
        },
        {
            name: 'Кардиограмма',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtRQmSB-JiphkaybsDDAuqOQ6zfsbUUK16w&usqp=CAU'
        },
        {
            name: 'Витамины',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrh2sud8WldWbwlt0XEPG54-W8gU1yTA_jnw&usqp=CAU'
        }])
    return (
        <Layer>
            <p style={{alignSelf: 'center', marginBottom: 30}}>{router.query.name} &#10142; <b>Анализы</b> &#10142; <b>Edit\Add Анализ</b></p>
            <div className='container' style={{width:"1600px",height:"800px"}}>
                <div className='page-title' style={{fontWeight:'bold'}}>{'Диагноз'}</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',

                    alignSelf: 'center',
                    width:"1600px",
                    flexWrap:"wrap",
                    height:"350px"

                }}>

                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                        <p style={{width:200, textAlign:'end',marginRight:20}} >Название анализа</p>
                        <input style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Название анализа"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                        <p style={{width:200, textAlign:'end',marginRight:20}} >Когда был выявлен</p>
                        <input style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Когда был выявлен"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                        <p style={{width:200, textAlign:'end',marginRight:20}} >Когда закончили лечение</p>
                        <input style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Когда закончили лечение"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center',marginBottom:10}}>
                        <p style={{width:200, textAlign:'end',marginRight:20}}>Статус</p>
                        <select  style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10}}>
                            <option value="0">Вылечено</option>
                            <option value="1">Не вылечено</option>
                        </select>
                    </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                            <p style={{width:200, textAlign:'end',marginRight:20}} >Название сопутствующих анализов</p>
                            <input style={{width:"555px",height:"86px",borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Название сопутствующих анализов"/>
                        </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center',width:"400px",marginBottom:10}}>
                        <p style={{
                            width:200, textAlign:'end',marginRight:20
                        }}>Фото Анализа</p>

                        <Documents data={data}/>

                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                        <p style={{width:200, textAlign:'end',marginRight:20}} >Описание выписки врача</p>
                        <input style={{width:"555px",height:"86px",borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Описание выписки врача"/>

                    </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center',width:"400px",marginBottom:10}}>
                            <p style={{
                                width:200, textAlign:'end',marginRight:20
                            }}>Фото Анализа</p>

                            <Documents data={data}/>
                        </div>

                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:30,width:300,marginLeft:210}}>
                    <ButtonComponent onClick={()=>router.back()} title={"Сохранить"} backgroundColor={"red"}/>
                    <ButtonComponent onClick={()=>router.back()} title={"Отмена"} backgroundColor={"#ADADAD"}/>

                </div>
            </div>
        </Layer>
    )
};

export default AddDiagnosis;
