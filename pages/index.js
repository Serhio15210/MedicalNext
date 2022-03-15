import React, {useEffect, useState} from 'react'

import Layer from '../components/Layer'

import useTranslation from 'next-translate/useTranslation'

import {SelectComponent} from "../components/Select/SelectComponent";
import {Box, TextField} from "@mui/material";
const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    const adminTypes = [
        { value: '0', label: '0' },
        { value: '1', label: '1' }
    ]
    return (
        <Layer>
            <div className='container' style={{height:600}}>
                <div className='page-title'>{'Добавить Админа'}</div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:300}}>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:600,alignItems:'center',justifyItems:'flex-end'}}>
                        <p style={{width:100, textAlign:'end'}} >Admin name</p>
                        <input style={{width:400,height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Name"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:600,alignItems:'center'}}>
                        <p style={{width:100, textAlign:'end'}}>Admin email</p>
                        <input style={{width:400,height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Email"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:600,alignItems:'center'}}>
                        <p style={{width:100, textAlign:'end'}}>Admin level</p>
                        <select  style={{width:400,height:50,borderRadius:5,border:"1px solid grey",padding:10}}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:600,alignItems:'center'}}>
                        <p style={{width:100, textAlign:'end'}}>Заметка</p>
                        <textarea style={{width:400,height:50,borderRadius:5,border:"1px solid grey",padding:10}} placeholder="Email"/>

                    </div>
                </div>
            </div>




        </Layer>
    )
}

export default Home
