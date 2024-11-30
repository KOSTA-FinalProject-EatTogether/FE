import {useState} from "react";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

const useCustomMove = () =>{
    const navigate = useNavigate()

    const moveToModify = () => {
        navigate({
            pathname: `../modify`
        })
    }
}