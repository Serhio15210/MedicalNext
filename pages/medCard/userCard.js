import React, {useState} from 'react';
import {useRouter} from "next/router";
import Layer from "../../components/Layer";
import {ButtonComponent} from "../../components/Button/ButtonComponent";
import {Box, TextField} from "@mui/material";
import {SelectComponent} from "../../components/Select/SelectComponent";
import {Table} from "../../components";
import {InputComponent} from "../../components/Input/InputComponent";

const UserCard = () => {
    const [data, setData] = useState({arr:[{
            diagnose: 'стрела в колене',
            treatmentEndDate: '2021',
            discoveryDate: '08:42'
        }]})


    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})
    const fetchData = async (page = router.query.page || 1, perPage = router.query.perPage || 20) => {
        let query = []
        for (const [key, value] of Object.entries(filter)) {
            if (value === 'all-variants') continue
            query.push(`${key}=${value}`)
        }
        try {
            console.log(res.data)
            setData(res.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const setPerPage = async perPage => {
        await fetchData(undefined, perPage)
    }
    const columns = React.useMemo(() => [
        {
            Header: 'Диагноз',
            accessor: 'diagnose',
        },
        {
            Header: 'Дата обнаружения',
            accessor: 'discoveryDate',
        },
        {
            Header: 'Дата окончания лечения',
            accessor: 'treatmentEndDate',
        },

    ], [])
    const router = useRouter();

    return (
        <Layer>
                <p style={{alignSelf: 'center', marginBottom: 30}}>{router.query.name} &#10142; <b>Мед карта</b>  </p>
                <div className='container' style={{width:"1600px",height:"700px"}}>
                    <div className='page-title' style={{fontWeight:'bold'}}>{'Мед карта'}</div>
                    <div style={{marginBottom:"20px",borderBottom:"1px solid #D7D7D7"}}>
                        <button style={{
                            width: 50,
                            backgroundColor: 'white',
                            border: "2px solid black",
                            borderRadius: 3,
                            padding: 7,
                            marginRight: 20,
                            fontWeight: 'bold'
                        }}  >{`Edit`}</button>
                        <button style={{
                            width: 60,
                            backgroundColor: 'white',
                            border: "2px solid black",
                            borderRadius: 3,
                            padding: 7,
                            marginRight: 20,
                            fontWeight: 'bold',
                            marginBottom:"20px"
                        }}  >{`Delete`}</button>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',width:"1550px",flexWrap:"wrap",height:"310px",borderBottom:"1px solid #D7D7D7",marginBottom:15}}>

                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                                <p style={{width:200, textAlign:'end',marginRight:20}} >Name</p>
                                <input style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Name"/>
                            </div>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                                <p style={{width:200, textAlign:'end',marginRight:20}} >Email</p>
                                <input style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Email"/>
                            </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center',marginBottom:10 }}>
                            <p style={{width:200, textAlign:'end',marginRight:20}}>ФИО врача</p>
                            <select  style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}}>
                                <option value="0">0</option>

                            </select>
                        </div>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                                <p style={{width:200, textAlign:'end',marginRight:20}} >Номер Айди</p>
                                <input style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Номер Айди"/>
                            </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center',marginBottom:10 }}>
                            <p style={{width:200, textAlign:'end',marginRight:20}}>Номер Айди</p>
                            <select  style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}}>
                                <option value="0">Admin</option>

                            </select>
                        </div>


                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10 }}>
                            <p style={{width:200, textAlign:'end',marginRight:20}} >Последний вход</p>
                            <input style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10,backgroundColor:"#D7D7D7"}} placeholder="Последний вход"/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                            <p style={{width:200, textAlign:'end',marginRight:20}} >Birth date</p>
                            <input style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Birth date"/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end',marginBottom:10}}>
                            <p style={{width:200, textAlign:'end',marginRight:20}} >Соц страховка</p>
                            <input style={{width:"555px",height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Соц страховка"/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',justifyItems:'flex-end' }}>
                            <p style={{width:200, textAlign:'end',marginRight:20}} >Экстренный контакт</p>
                            <input style={{width:"555px",height:40,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Экстренный контакт"/>
                        </div>

                        </div>
                    <div style={{display:'flex',flexDirection:'column',borderBottom:"1px solid #D7D7D7"}}>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:20}}>
                            <button style={{
                                width: 170,
                                height:30,
                                backgroundColor: 'white',
                                border: "2px solid black",
                                borderRadius: 3,
                                padding: 5,
                                marginRight: 20,
                                fontWeight: 'bold'
                            }}  >{`Generate new QR code`}</button>
                            <p>Длительность работы qr-кода: 1 час</p>
                        </div>
                        <div style={{

                            borderWidth: 1,
                            borderColor: "black",
                            borderRadius: 10,
                            textAlign: 'center',
                            display:'flex',
                            flexDirection:'row',
                            paddingBottom:20,
                            alignItems:'center',

                        }}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:"space-around",alignItems:'center',width:260,marginRight:10}}>
                                <p>Поиск</p>
                                <InputComponent placeholder="Введите ключевую фразу" width={200}/>
                            </div>
                            <ButtonComponent backgroundColor={"red"} title={"Submit"}/>
                        </div>
                    </div>
                    <Table columns={columns} data={data} handlePageChange={fetchData} setPerPage={setPerPage}
                           router={router}/>

            </div>
        </Layer>
    );
};

    export default UserCard;
