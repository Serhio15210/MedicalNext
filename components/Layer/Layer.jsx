import styles from './Layer.module.sass'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import useTranslation from 'next-translate/useTranslation'
import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import DashboardOutlined from '@material-ui/icons/DashboardOutlined'
import GroupOutlined from '@material-ui/icons/GroupOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupport";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasket";
const Layer = ({
    children
}) => {

    const router = useRouter()
    const { t } = useTranslation('common')

    const handleLogOut = () => {
        router.push('/auth')
    }
    const variants = {
        hidden: { opacity: 0, x: 0, y: -50 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: {
          opacity: 0,
          x: 0,
          y: -50,
          transition: {
            duration: 0.5,
          },
        },
    }


    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href='/'>
                <a className={styles.logo}>
                    {/* <img src='/logo.svg' /> */}
                    <p>{"SimplyNomo X"}</p>
                </a>
                </Link>
                <div className={styles.actions}>
                    <div className={styles.notif}>
                        <NotificationsIcon />
                    </div>
                    <div className={styles.logout} onClick={handleLogOut}>
                        <ExitToAppIcon />
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.me}>
                    <img src='/logo.svg' />
                    <p>Admin</p>
                    <span>{t('agentLevel')}  0</span>
                </div>
                <div className={styles.navlist}>
                    <Link href='/'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === '' ? styles.active : ''}`}>
                            <DashboardOutlined/>
                            <p>{'Добавить админа'}</p>
                        </a>
                    </Link>
                    <Link href='/users'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'users' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Пользователи'}</p>
                        </a>
                    </Link>
                    <Link href='/medCard'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'medCard' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Мед карта'}</p>
                        </a>
                    </Link>
                    <Link href='/preparateList'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'preparateList' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Список Препаратов'}</p>
                        </a>
                    </Link>
                    <Link href='/analyzes'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'analyzes' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Анализы'}</p>
                        </a>
                    </Link>
                    <Link href='/diagnosis'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'diagnosis' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Диагнозы'}</p>
                        </a>
                    </Link>
                    <Link href='/documents'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'documents' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Документы'}</p>
                        </a>
                    </Link>

                    <Link href='/support'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'support' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Сапорт тикеты'}</p>
                        </a>
                    </Link>
                    <Link href='/doctors'>
                        <a className={`${styles.navitem} ${router.route.split('/')[1] === 'doctors' ? styles.active : ''}`}>
                            <GroupOutlined/>
                            <p>{'Доктора'}</p>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.content}>
            <motion.main
                variants={variants}
                initial='hidden'
                animate='enter'
                exit='exit'
                transition={{
                type: 'linear',
                opacity: { duration: 2 },
                default: { duration: 1 },
                }}
            >
                {children}
            </motion.main>
            </div>
        </div>
    )
}


export default Layer
