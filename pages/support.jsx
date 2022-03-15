import React, {useState} from "react";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

import {Layer, Table} from "../components";
import styles from "../styles/Equipment.module.sass";
import {SelectComponent} from "../components/Select/SelectComponent";
import {ButtonComponent} from "../components/Button/ButtonComponent";
import {InputComponent} from "../components/Input/InputComponent";

const Support = () => {
    const router = useRouter();
    const { t } = useTranslation('common')

    const [data, setData] = useState({
        arr: [{
            Name: 'name',
            "BirthDate": '2021',
            Email: '@gmail',
            Phone: '0977021100',
            "CreatedBy": 'Admin',
            socPacket: "090000000",
            Status: 'verify',
            RegistrationDate: '08:42'
        },
        ]
    })
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})

    const fetchData = async (page = router.query.page || 1, perPage = router.query.perPage || 20) => {
        router.push(`/support?page=${page}&perPage=${perPage}`, undefined, { shallow: true })
        let query = []
        for (const [key, value] of Object.entries(filter)) {
            if (value === 'all-variants') continue
            query.push(`${key}=${value}`)
        }
        try {
            const res = await axios.get(`/users?page=${page}&perPage=${perPage}${query.length > 0 ? `&${query.join('&')}` : ''}`)
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
            Header: 'Birth Date',
            accessor: 'BirthDate',
        },
        {
            Header: 'Email',
            accessor: 'Email',
        },
        {
            Header: 'Phone',
            accessor: 'Phone',
        },
        {
            Header: 'Created By',
            accessor: 'CreatedBy',
        },
        {
            Header: 'Соц Страховка',
            accessor: 'socPacket',
        },
        {
            Header: 'Registration Date',
            accessor: 'RegistrationDate',
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
        {
            Header: 'Operate'
        },

    ], [])

    return (
        <Layer>
            <div className='container'>
                <div className='page-title' style={{fontWeight:'bold'}}>{'Пользователи'}</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',

                }}>

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
                path={`support/chat`}/>
            </div>
        </Layer>
    )
}


export default Support
