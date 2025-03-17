'use client';
import { loginUser } from '@/store/authSlice';
import { AppDispatch, RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { error, loading } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      router.push('/');
    }
  };
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-96 rounded-lg bg-white p-6 shadow-md'>
        <h2 className='text-center text-xl font-bold text-slate-500'>Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-slate-500'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full rounded border p-2 text-slate-400'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-slate-500'>Contraseña</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full rounded border p-2 text-slate-400'
            />
          </div>
          {error && <p className='text-sm text-red-500'>{error}</p>}
          <button
            type='submit'
            className='w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600'
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}
