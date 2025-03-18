import axios from "axios";
import { atom, selector } from "recoil";


export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            // fetch
            const res = await axios.get("http://localhost:4000/notification")
            console.log(res.data);
            return res.data      
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.Network + 
        allNotifications.Jobs + 
        allNotifications.Notification + 
        allNotifications.Messaging
    }
})