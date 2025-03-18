import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect, useMemo } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const totalNotificationCount = useRecoilValue(totalNotificationSelector); 
  const networkCount= useRecoilValue(notifications)

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.Notification >= 100 ? "99+" : networkCount.Notification})</button>
      <button>Jobs {networkCount.Jobs}</button>
      <button>Messaging ({networkCount.Messaging})</button>
      <button>Notifications ({networkCount.Network})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
