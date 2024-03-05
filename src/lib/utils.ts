import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSponsors } from "../redux/apiCalls/SponsersApi";
import { getAccounting } from "../redux/apiCalls/AccountingApi";
import { getCarData } from "../redux/apiCalls/CarDataApi";

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
  ) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };


  export const getAllData= ()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        getSponsors(dispatch);
        getAccounting(dispatch)
        getCarData(dispatch);
      }, [dispatch]);
}