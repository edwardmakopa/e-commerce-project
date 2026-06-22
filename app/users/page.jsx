"use client"
import { useState,useEffect } from "react"
export  default function Page(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("/api/users/1").then(res=>res.json()).then((dat)=>{
            setData(dat)
        })
    },[])
    return (
        <p>{data.message}</p>
    )
}