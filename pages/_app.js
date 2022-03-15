import '../styles/globals.sass'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { createContext, useState, useEffect, useRef } from 'react'
import axios from "axios";


export const MeContext = createContext(null)

const MyApp = ({ Component, pageProps }) => {

  const [audioContext, setCTX] = useState(null)
  useEffect(() => {
    setCTX(new (window.AudioContext || window.webkitAudioContext)())
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const { pathname } = useRouter()

  const layout = useRef(null)

  const [me, setMe] = useState({})
  const [isMe, setIsMe] = useState(true)

  // async function subscribeUser() {
  //   console.log(process.env.PUBLIC_PUSH)
  //   if ('serviceWorker' in navigator && me._id) {
  //     console.log('imworking0')
  //     navigator.serviceWorker.ready.then(function(reg) {
  //       console.log('imworking1')
  //       reg.pushManager.subscribe({
  //         userVisibleOnly: true,
  //         applicationServerKey: process.env.PUBLIC_PUSH
  //       }).then(async function(sub) {
  //         await axios.put('/auth/updatePush', { token: JSON.stringify(sub) })
  //         console.log('Endpoint URL: ', sub.endpoint);
  //       }).catch(function(e) {
  //         if (Notification.permission === 'denied') {
  //           console.warn('Permission for notifications was denied');
  //         } else {
  //           console.error('Unable to subscribe to push', e);
  //         }
  //       });
  //     })
  //   }
  // }
  //
  //
  // useEffect(() => {
  //   window.addEventListener("load", function () {
  //     if ('serviceWorker' in navigator) {
  //       // Регистрация service worker-а, расположенного в корне сайта
  //       // с указанием более строгого scope
  //       navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
  //         console.log('Service worker зарегистрирован:', registration);
  //       }).catch(function(error) {
  //         console.log('Ошибка при регистрации service worker-а:', error);
  //       });
  //     } else {
  //       console.log('Текущий браузер не поддерживает service worker-ы.');
  //     }
  //     if ('Notification' in window && navigator.serviceWorker) {
  //       if (Notification.permission === "granted") {
  //         if ('serviceWorker' in navigator) {
  //           navigator.serviceWorker.ready.then(function(reg) {
  //             console.log('Service Worker Registered!', reg);
  //
  //             reg.pushManager.getSubscription().then(async function(sub) {
  //               if (sub === null) {
  //                 await subscribeUser()
  //                 console.log('Not subscribed to push service!');
  //               } else {
  //                 await axios.put('/auth/updatePush', { token: JSON.stringify(sub) })
  //                 console.log('Subscription object: ', sub);
  //               }
  //             });
  //           }).catch(function(err) {
  //               console.log('Service Worker registration failed: ', err);
  //             });
  //         }
  //       } else if (Notification.permission === "blocked") {
  //         console.log('BLOCKED')
  //         /* the user has previously denied push. Can't reprompt. */
  //       } else {
  //         console.log('ELSE')
  //         subscribeUser()
  //       }
  //     }
  //   })
  // }, [])





  return <div id='layout' ref={layout}>

    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => layout.current?.scrollTo(0, 0)}
    ><MeContext.Provider
      value={{me, audioContext, setCTX}}>
        <Component {...pageProps} key={pathname} />
      </MeContext.Provider>
    </AnimatePresence>

    </div>
}

export default MyApp
