// components/login/LoginForm.jsx
/*
import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username.includes(' ') || password.includes(' ')) {
      setError('No se permiten espacios en blanco.');
      return;
    }

    if (username !== 'admin' || password !== 'Admin123!') {
      setError('Usuario o contraseña no válidos.');
      return;
    }

    alert('Inicio de sesión exitoso');
    navigate('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p className={styles.error}>{error}</p>}
      
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={styles.eyeIcon}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button type="submit" className={styles.formButton}>
        Ingresar
      </button>

      <p className={styles.toggle}>
        ¿No tienes cuenta? 
        <span 
          onClick={() => navigate('/register')}
          className={styles.toggleLink}
        >
          Regístrate aquí
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
*/