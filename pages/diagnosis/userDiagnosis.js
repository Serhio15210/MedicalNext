import React, {useState} from 'react';
import {useRouter} from "next/router";
import {Layer, Table} from "../../components";
import {InputComponent} from "../../components/Input/InputComponent";
import {ButtonComponent} from "../../components/Button/ButtonComponent";

const UserDiagnosis = () => {
    const router = useRouter();


    const [data, setData] = useState({
        arr:
            [{
                Name: 'name4',
                BirthDate: '2021',
                Email: '@gmail',
                Phone: '0977021100',
                CreatedBy: 'Admin',
                socPacket: "090000000",
                Status: 'verify',
                RegistrationDate: '08:42'
            },  ]
    })
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})

    const fetchData = async (page = router.query.page || 1, perPage = router.query.perPage || 20) => {

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
        await fetchData(1, perPage)
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


    ], [])

    return (
        <Layer>
            <p style={{alignSelf: 'center', marginBottom: 30}}>{router.query.name} &#10142; <b>Анализы</b></p>
            <div className='container'>
                <div className='page-title' style={{fontWeight:'bold'}}>{'Пользователи'}</div>
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
                        router.push(`${router.asPath}/addDiagnosis`)
                    }}>{`Добавить документ`}</button>


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

export default UserDiagnosis;
