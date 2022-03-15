import styles from '../styles/Auth.module.sass'
import useTranslation from 'next-translate/useTranslation'
import { TextField } from '@material-ui/core'

import { useState } from 'react'
import router, {useRouter} from "next/router";

const Auth = () => {


  const [error, setError] = useState('x')
  const [type, setType] = useState('auth');
  const [dataPass, setDataPass] = useState({pass: '', repeatPass: ''});
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [code, setCode] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
   router.push("/")
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    if (!email) return setEmailError(prev => 'cant_be_empty')
    try {
      const res = await axios.post('/auth/fargotPassword', {email})
      if(res.data.status === 'success') {
        setType(prev => 'forgotPassword')
      }else if(res.data.status !== 'success'){
        setEmailError(prev => res.data.status)
      }
    } catch(err) {
      console.log(err)
    }
  }

  const changePass = async(e) => {
    e.preventDefault()
    if (dataPass.pass !== dataPass.repeatPass) return setPassError(prev => 'passwordMismatch')
    try {
      const res = await axios.post('/auth/changePass', {password: dataPass.pass, recoverId: code})
      if(res.data.status === 'success') {
        setType(prev => 'auth')
      }else if(res.data.status !== 'success'){
        setEmailError(prev => res.data.status)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authCard}>
        <div className={styles.authContent}>
          <p className={styles.title}>
            {'Welcome back'}
          </p>
          <p className={styles.subTitle}>
            {'login'}
          </p>
          {type === 'auth' && <form onSubmit={handleSubmit} className={styles.form} autoComplete='off' >
            <TextField label={'Email'} placeholder={'Email address'} size='small' variant="outlined" />
            <TextField type='password' label={'Password'} placeholder={'Password'} size='small' variant="outlined" />
            <button disabled={isLoading} className={styles.button}>
              {'LOGIN'}
            </button>
            {/*<p className={styles.forgotPass} onClick={() => setType(prev => 'forgot')}>{'forgotPass'}?</p>*/}
          </form>}

          {type === 'forgot' && <form onSubmit={sendEmail} className={styles.form} autoComplete='off' >
            <TextField label={t('email')} placeholder={t('emailPC')} size='small' variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
            {emailError && <p>{t(emailError)}</p>}
            <button disabled={isLoading} className={styles.button}>
              {'change'}
            </button>
          </form>}

          {type === 'forgotPassword' && <form onSubmit={changePass} className={styles.form} autoComplete='off' >

            <p className={styles.confirmPass}>{t('recoverYouPassword')}</p>

          </form>}
        </div>
        <div className={styles.authImg} style={{backgroundImage: 'url(/auth.jpg)'}} />
      </div>
    </div>
  )
}

export default Auth
