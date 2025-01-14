import { atom } from "recoil"
export const userAtoms = atom({
    key:"userAtoms",
    default:[],
})
export const pageAtoms = atom({
    key:"pageAtoms",
    default:1,
})