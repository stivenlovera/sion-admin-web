import { createContext, useContext } from "react"
export type contextSessionTime = {
    time: boolean
    setTime: (time: boolean) => void
}
export const SessionContext = createContext<contextSessionTime>({
    time: false, // set a default value
    setTime: () => { },
})
export const useSessionContext = () => useContext(SessionContext)