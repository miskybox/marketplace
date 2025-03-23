/*
import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const passwordRegex = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores previos
    setSuccessMessage('');

    const { username, password, confirmPassword } = formData;

    if (username.includes(' ') || password.includes(' ')) {
      setError('No se permiten espacios en blanco.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setSuccessMessage('Registro exitoso. Debes iniciar sesión.');
    setTimeout(() => {
      setSuccessMessage('');
      setFormData({ username: '', password: '', confirmPassword: '' });
    }, 4000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      {error && <p className={styles.error}>{error}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={styles.eyeIcon}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className={styles.inputGroup}>
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <p className={styles.passwordHint}>
        La contraseña debe incluir al menos una mayúscula, una minúscula,
        un número y un carácter especial, con un mínimo de 8 caracteres.
      </p>

      <button type="submit" className={styles.formButton}>
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
*/