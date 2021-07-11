import {useQuery} from '@apollo/client'
import React,{useEffect} from 'react'

const empty=()=>{};

const Query=(props)=>{
    const {children, Querry, varr={}, callback=empty }=props
    console.log(props)
    let {data,loading, error, refeatch} = useQuery(Querry,varr)
    useEffect(() => {
        callback(data)
    }, [data])
    loading=loading&&!!data
     return children?children(data, loading):null
     
}

export default Query