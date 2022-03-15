import React, {useState} from 'react';
import {ButtonComponent} from "../../../../components/Button/ButtonComponent";

import Layer from "../../../../components/Layer";
import {useRouter} from "next/router";

import pill from "../../../../styles/v01h01.png"
const AddPreparate = () => {
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
            <p style={{alignSelf: 'center', marginBottom: 30}}>{router.query.name} &#10142; <b>Препараты</b> &#10142; <b>Edit\Add Препарат</b></p>
            <div className='container' style={{width:"1600px",height:"800px"}}>
                <div className='page-title' style={{fontWeight:'bold'}}>{'Препарат'}</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',

                    alignSelf: 'center',
                    width:"1600px",
                    flexWrap:"wrap",
                    height:"250px"

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
                        <p style={{width:200, textAlign:'end',marginRight:20}} >Призначено</p>
                        <input style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10,backgroundColor:"#D7D7D7"}} placeholder="Призначено"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center',width:"280px",marginBottom:10}}>
                        <p style={{
                            width:200, textAlign:'end',marginRight:20
                        }}>Фото Анализа</p>


                            <div style={{
                                height: "60px",
                                width: "60px",
                                borderWidth: 2,
                                display:'flex',
                                border: " 4px solid black",
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor:'grey',

                            }} className="prepPhoto" >

                                <img src={pill} height="48px" width="48px"/>
                            </div>


                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}
                     >
                        <p style={{width:200, textAlign:'end',marginRight:20}} >Last change</p>
                        <input style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10,backgroundColor:"#D7D7D7"}} placeholder="Описание выписки врача"/>

                    </div>



                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:30,width:300,marginLeft:210}}>
                    <ButtonComponent onClick={()=>router.back()} title={"Сохранить"} backgroundColor={"red"}/>
                    <ButtonComponent onClick={()=>router.back()} title={"Отмена"} backgroundColor={"#ADADAD"}/>

                </div>
            </div>
        </Layer>
    );
};

export default AddPreparate;
