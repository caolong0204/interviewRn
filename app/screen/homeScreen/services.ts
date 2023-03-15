import moment from 'moment';
import {useCallback, useRef, useState} from 'react';

import {useDispatch} from 'react-redux';
import {appActions} from '../../store/application/appSlice';
import {isNullOrEmpty} from '../../utils/validate';

export const validateEvent = (data: IEventItem) => {
  const errorMsg: ErrorMessage = {};
  if (!data.name && !data.name.trim()) {
    errorMsg.errorName = "input Event's name!";
  }
  if (!data.categoryEvent) {
    errorMsg.errorCategory = 'Select a category event!';
  }
  if (data.start) {
    const isValid = checkValidTimeFormatHHMM(data.start);
    if (!isValid) {
      errorMsg.errorStartTime = 'Start Time is not valid';
    }
  }
  if (data.end) {
    const isValid = checkValidTimeFormatHHMM(data.end);
    if (!isValid) {
      errorMsg.errorEndTime = 'End Time is not valid';
    }
  }
  return errorMsg;
};

export const homeService = {
  useCreateEvent(
    onSucess?: () => void,
  ): [ErrorMessage, () => void, (fieldName: string, value: any) => void] {
    const eventData = useRef<IEventItem>({name: '', date: moment().valueOf()});
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState<ErrorMessage>({});
    const createEvent = () => {
      const error = validateEvent(eventData.current);
      setErrorMsg(error);
      if (isNullOrEmpty(error)) {
        dispatch(appActions.addEvent(eventData.current));
        onSucess && onSucess();
      }
    };
    const changeContent = useCallback((fieldName: string, value: any) => {
      switch (fieldName) {
        case FIELD_NAME.NAME:
          eventData.current.name = value;
          if (errorMsg.errorName) {
            setErrorMsg({...errorMsg, errorName: ''});
          }
          break;
        case FIELD_NAME.NOTE:
          eventData.current.note = value;
          break;
        case FIELD_NAME.REMIND:
          eventData.current.isRemind = value;
          break;
        case FIELD_NAME.CATEGORY:
          eventData.current.categoryEvent = value;
          break;
        case FIELD_NAME.DATE:
          eventData.current.date = value;
          break;
        case FIELD_NAME.STATE_TIME:
          eventData.current.start = value;
          break;
        case FIELD_NAME.END_TIME:
          eventData.current.end = value;
          break;
        default:
          break;
      }
    }, []);

    return [errorMsg, createEvent, changeContent];
  },
};

type ErrorMessage = {
  errorName?: string;
  errorCategory?: string;
  errorStartTime?: string;
  errorEndTime?: string;
};
export enum FIELD_NAME {
  NAME = 'NAME',
  NOTE = 'NOTE',
  REMIND = 'REMIND',
  CATEGORY = 'CATEGORY',
  DATE = 'DATE',
  STATE_TIME = 'STATE_TIME',
  END_TIME = 'END_TIME',
}
export const getEventInMonth = (data: IEventsInMonth[], month: string) => {
  const eventInMonth = data.find(item => item.date === month);
  return eventInMonth;
};

const checkValidTimeFormatHHMM = (data: string) => {
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(data);
};
