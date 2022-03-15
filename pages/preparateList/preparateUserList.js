import React, {useState} from 'react';
import {useRouter} from "next/router";
import {Layer, Table} from "../../components";
import styles from "../../styles/Equipment.module.sass";
import {InputComponent} from "../../components/Input/InputComponent";
import {ButtonComponent} from "../../components/Button/ButtonComponent";

const PreparateUserList = () => {
    const router = useRouter();

    const [data, setData] = useState({arr: [{
            Name: 'Ксанакс',
            recognizedBy: 'Doctor',
            howToUse: '3 раза в неделю',
            appointedDate: '2021.12.08',
            period: "2021.12.08",

        },  ]})
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
            Header: 'ID',
            accessor: 'index',
        },
        {
            Header: 'Name',
            accessor: 'Name',
        },
        {
            Header: 'Кем призначено',
            accessor: 'recognizedBy',
        },
        {
            Header: 'Как принимать',
            accessor: 'howToUse',
        },
        {
            Header: 'Когда назначено',
            accessor: 'appointedDate',
        },
        {
            Header: 'На какой срок',
            accessor: 'period',
        },
        {
            Header: 'Actions',
        },




    ], [])

    return (
        <Layer>
            <p style={{alignSelf: 'center', marginBottom: 30}}>{router.query.name} &#10142; <b>Препараты</b></p>
            <div className='container'>
                <div className='page-title' style={{fontWeight:'bold'}}>{'Препараты'}</div>
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
                        fontWeight: 'bold',cursor:'pointer'
                    }} onClick={()=>{
                        router.push(`${router.asPath}/addPreparate`)
                    }}>{`Добавить препарат`}</button>


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




                <Table columns={columns} data={data} handlePageChange={fetchData} setPerPage={setPerPage}
                       router={router}/>
            </div>
        </Layer>
    );
};

    export default PreparateUserList;
