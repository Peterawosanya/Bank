"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const isDark = theme === 'dark';

  const handleToggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark ? 'var(--color-bg)' : '#f7f8fa',
        transition: 'background 0.3s',
      }}
    >
      <div
        style={{
          background: isDark ? '#23262f' : '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          padding: '3rem 2rem',
          maxWidth: 380,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: isDark ? '#f4f4f4' : '#1a2340',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        {/* Theme Toggle */}
        <button
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={handleToggle}
          style={{
            alignSelf: 'flex-end',
            marginBottom: 12,
            background: 'none',
            border: 'none',
            fontSize: 22,
            cursor: 'pointer',
            color: isDark ? '#f4f4f4' : '#1a2340',
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
        {/* Logo and App Name */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ width: 36, height: 36, background: 'var(--color-primary)', borderRadius: 8, marginRight: 12 }} />
          <span style={{ fontWeight: 700, fontSize: 24, color: isDark ? '#f4f4f4' : '#1a2340', letterSpacing: 1 }}>Vertex Bank</span>
        </div>
        <h2 style={{ fontWeight: 700, fontSize: 28, margin: 0, color: isDark ? '#f4f4f4' : '#1a2340' }}>Log in</h2>
        <p style={{ color: isDark ? '#8a8fa3' : '#6b7280', margin: '8px 0 24px 0', fontSize: 16 }}>Welcome back! Please enter your details.</p>
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label style={{ fontWeight: 500, color: isDark ? '#f4f4f4' : '#1a2340', marginBottom: 4 }} htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            style={{
              padding: '0.75em 1em',
              borderRadius: 8,
              border: isDark ? '1px solid #444857' : '1px solid #e5e7eb',
              fontSize: 16,
              marginBottom: 12,
              background: isDark ? '#181a20' : '#fff',
              color: isDark ? '#f4f4f4' : '#1a2340',
              transition: 'background 0.3s, color 0.3s',
            }}
          />
          <label style={{ fontWeight: 500, color: isDark ? '#f4f4f4' : '#1a2340', marginBottom: 4 }} htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            style={{
              padding: '0.75em 1em',
              borderRadius: 8,
              border: isDark ? '1px solid #444857' : '1px solid #e5e7eb',
              fontSize: 16,
              marginBottom: 20,
              background: isDark ? '#181a20' : '#fff',
              color: isDark ? '#f4f4f4' : '#1a2340',
              transition: 'background 0.3s, color 0.3s',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              border: 'none',
              borderRadius: 8,
              padding: '0.75em 0',
              marginTop: 8,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: 24, color: isDark ? '#8a8fa3' : '#6b7280', fontSize: 15 }}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" style={{ color: '#3b82f6', fontWeight: 600 }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
