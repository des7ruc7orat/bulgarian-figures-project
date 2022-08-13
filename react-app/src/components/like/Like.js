import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as figureService from '../../services/figureService';

export const Like = ()=>{
    const { figureId } = useParams();
    figureService.likeFigure(figureId)
    .then(res => res)
   

    return null;
}