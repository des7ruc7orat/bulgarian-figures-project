import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as figureService from '../../services/figureService';

export const Delete = () => {

    const navigate = useNavigate();



    const { figureId } = useParams();

    figureService.deleteFigureById(figureId)
        .then(res => res)
       

    return null;
    //<Navigate to='/' replace={true}/>
}