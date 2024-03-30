import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { createContext, useContext, useEffect, useReducer} from "react";

const ContextGlobal = createContext<any>("");

const initialComicState = {comicList:[], comicDetail:{}}

const comicReducer = (state: any, action:any) => {
    switch(action.type){
      case 'GET_COMICS':
        return {comicList: action.payload, comicDetail: state.comicDetail}
    case 'GET_COMIC':
        return {comictDetail: action.payload, comicList: state.comicList}
        default:
            throw new Error
    }
  }
  
  const ContextProvider = ({children}:{children:any}) => {
    const [comicState, comicDispatch] = useReducer(comicReducer,  initialComicState)
  

   
 return(

    <ContextGlobal.Provider value={{comicState, comicDispatch}}>
        {children}
    </ContextGlobal.Provider>
 )

  }
export default ContextProvider
export const useGlobalStates = () => useContext(ContextGlobal)