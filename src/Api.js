const api_base = "http://localhost:3000/api/v1"; // "http://localhost:3000/api/v1" is when using in laptop or samedevice

export const Endpoints = {
    signup : `${api_base}/Singupnewuser`,
    login : `${api_base}/LoginSection`,
    Islogin : `${api_base}/Islogedin`,
    AddIncomeExpanseData : `${api_base}/AddingIncomeExpanseData`,
    LastTransaction : `${api_base}/LastTransactionPage`,
    InsidePage : `${api_base}/Singlepageroute`,
    Totalbalance : `${api_base}/TotalBalance`,
    Piechartvalue : `${api_base}/Chartdatasection`,
    Logoutsection : `${api_base}/logoutroute`,
    Linechartsection : `${api_base}/Linechartsdata`,
}