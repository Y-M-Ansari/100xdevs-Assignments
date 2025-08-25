import {atom} from "recoil";

export const MyNetworkAtom = atom({
   key : "MyNetwork",
   default : 102
})
export const JobsAtom = atom({
   key : "Jobs",
   default : 0
})
export const MessagingAtom = atom({
   key : "Messaging",
   default : 0
})
export const NotificationsAtom = atom({
   key : "Notifications",
   default : 12
})