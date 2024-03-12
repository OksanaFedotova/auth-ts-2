import { Link } from 'react-router-dom';
import { Login } from '../components/Login';

const LoginPage = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <Login />
            <p>
                Или <Link to="/register">Регистрация</Link>
            </p>
        </div>
    )
}

export default LoginPage
