import {IUser} from "../../../pages/models/IUser";
import {IEvent} from "../../../pages/models/IEvent";


 export interface EventState {
    events:  IEvent[] ;
    guests: IUser[];

}

export enum  EventActionEnum {
     SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS'
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}

export type EventAction =
    SetEventsAction |
    SetGuestsAction