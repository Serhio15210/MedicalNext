import React, {useState} from "react";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {Layer, Table} from "../components";
import styles from "../styles/Equipment.module.sass";
import {SelectComponent} from "../components/Select/SelectComponent";

const Merchants = () => {

    const router = useRouter();


    const [data, setData] = useState({arr: []})
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState({})

    const fetchData = async (page = router.query.page || 1, perPage = router.query.perPage || 20) => {
        router.push(`/merchants?page=${page}&perPage=${perPage}`, undefined, { shallow: true })
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
            Header: t('email'),
            accessor: 'email',
        },
        {
            Header: t('adminType'),
            accessor: 'AdminType',
        },
        {
            Header: t('level'),
            accessor: 'level',
        },
        {
            Header: t('status'),
            accessor: 'status',
        },
        {
            Header: t('createdBy'),
            accessor: 'createdBy',
        },
        {
            Header: t('lastEnter'),
            accessor: 'lastEnter',
        },
        {
            Header: t('userInfo'),
            accessor: 'UserInfo',
        },
        {
            Header: t('balance'),
            accessor: 'Balance',
        },
    ], [])

    return (
        <Layer>
            <div className='container'>
                <div className='page-title'>{t('merchantsList')}</div>
                <div className={styles.searchContainer}>
                    <span>{t('customerType')}</span>
                    <SelectComponent option={['active', 'да да да ']}/>
                </div>

                <Table columns={columns} data={data} handlePageChange={fetchData} setPerPage={setPerPage} />
            </div>
        </Layer>
    )
}


export default Merchants
