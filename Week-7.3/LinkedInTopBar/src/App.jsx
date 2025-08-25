
import { RecoilRoot, useRecoilValue } from 'recoil'
import { MyNetworkAtom, JobsAtom, MessagingAtom, NotificationsAtom  } from './store/atom/atom'

function App() {
  
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function  MainApp(){
  const networkCount = useRecoilValue(MyNetworkAtom)
  const jobsCount= useRecoilValue(JobsAtom)
  const messageCount = useRecoilValue(MessagingAtom)
  const notificationCount = useRecoilValue(NotificationsAtom)


  return (
    <div>
      <button>Home</button>

      <button>MyNetwork ({networkCount >= 100 ? "99+" : networkCount})</button>
      
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>

      <button>Messaging ({messageCount >= 100 ? "99+" : messageCount})</button>

      <button>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>

      <button>Me</button>
    </div>
  )
}
export default App