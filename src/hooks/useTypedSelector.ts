import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/store";
//our Hook
//RootState = тип который отвечает за состояние нашего state oup app и приравниваем к useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;