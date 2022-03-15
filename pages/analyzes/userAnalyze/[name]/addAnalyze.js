import React, {useState} from 'react';
import Layer from "../../../../components/Layer";
import {Box, TextField} from "@mui/material";
import {AddCircleOutline} from "@material-ui/icons";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {useRouter} from "next/router";
import AddIcon from "@material-ui/icons/Add";
import {ButtonComponent} from "../../../../components/Button/ButtonComponent";


const AddAnalyze = () => {
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
            <p style={{alignSelf: 'center',marginBottom:30 }}> {router.query.name} &#10142; Анализы &#10142; <b>Edit\Add Анализ</b></p>
            <div className='container'>
                <div className='page-title' style={{fontWeight: 'bold'}}>{'Анализы'}</div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width:160,textAlign:'end',marginRight:15}}>Название анализа</p>
                    <input style={{
                        width: "555px",
                        height: "40px",
                        borderRadius: '4px',
                        border: "2px solid grey",
                        padding: 10
                    }}
                           placeholder={"Название анализа"}/>
                </div>
                <div style={{display:'flex',flexDirection:'row',margin:30}}>

                    <p style={{width:130,textAlign:'end',marginRight:15,marginTop:30}}>Фото анализа</p>
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
export const Documents=({data})=>{
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
                height: "86px",
                width: "86px",
                borderWidth: 2,
                display:'flex',
                border: " 4px solid black",
                marginRight: 5,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <AddIcon style={{fontSize: 50}}/>


            </div>
            {data.map((item,index) => {
                if (index <= 0) {
                    return (
                        <div style={{
                            height:'max-content',
                            width:'max-content',
                            borderWidth: 2,
                            border: " 4px solid black",
                            borderRadius: 10,
                            padding: 5,
                            marginRight: 5
                        }}>
                            <img src={item.img}
                                 style={{alignSelf: 'center', height: "65px", width: "65px"}}/>
                        </div>)
                }
            })}
            {/*<button style={{ backgroundColor: '#B53F3F',*/}
            {/*    borderRadius: 20,*/}
            {/*    borderWidth: 0,*/}
            {/*    width: 100,*/}
            {/*    height: 50,*/}
            {/*    color: 'white',*/}
            {/*    boxShadow: " 0 0 5px red",alignSelf:'center',cursor:'pointer'}}><p>Посмотреть<br/>все</p></button>*/}
        </div>
    )
}
export default AddAnalyze;
