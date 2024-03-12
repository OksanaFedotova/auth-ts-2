import { useAuth } from '../hooks/use-auth';
import {removeUser} from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks';
import KanbanBoard from "./KanbanBoard";
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const HomePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isAuth, email} = useAuth();
    useEffect(()=> {
      if (!isAuth) navigate('/login')
    },[isAuth, navigate])
    return  (
        <div>
            <h1>Добрый день!</h1>
            <KanbanBoard/>
            <button
                onClick={()=> dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    )
    }
export default HomePage
