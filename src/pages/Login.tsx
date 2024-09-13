import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type LoginResponse = {
  access_token: string;
  token_type: string;
};

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('mbessey@example.com');
  const [password, setPassword] = useState<string>('1234');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleLogin = async () => {
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post<LoginResponse>('http://127.0.0.1:8000/users/login', {
        email,
        password,
      });

      console.log('Logged in successfully:', response.data);
      setError('Logged in successfully');

      setTimeout(() => {
        navigate('/reports', { replace: true });
        setLoading(false); // Set loading to false after sign-in process completes
      }, 2000);

      // You can now store the token or redirect the user
      localStorage.setItem('token', response.data.access_token);
      // Redirect to dashboard or home
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError('Login failed. Please check your credentials.');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from the server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
