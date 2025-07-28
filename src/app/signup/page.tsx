"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const isDark = theme === 'dark';

  const handleToggle = () => setTheme(isDark ? 'light' : 'dark');

  const inputStyles = {
    padding: '0.75em 1em',
    borderRadius: 8,
    border: isDark ? '1px solid #444857' : '1px solid #e5e7eb',
    fontSize: 16,
    background: isDark ? '#181a20' : '#fff',
    color: isDark ? '#f4f4f4' : '#1a2340',
    transition: 'background 0.3s, color 0.3s, border 0.3s',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  const labelStyles = {
    fontWeight: 500,
    color: isDark ? '#f4f4f4' : '#1a2340',
    marginBottom: 4,
    display: 'block',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark ? 'var(--color-bg)' : '#f7f8fa',
        transition: 'background 0.3s',
        padding: '2rem 0'
      }}
    >
      <div
        style={{
          background: isDark ? '#23262f' : '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          padding: '2rem',
          maxWidth: 480,
          width: '100%',
          color: isDark ? '#f4f4f4' : '#1a2340',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 32, height: 32, background: 'var(--color-primary)', borderRadius: 8, marginRight: 12 }} />
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: 1 }}>Vertex Bank</span>
          </div>
          <button
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={handleToggle}
            style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: 'inherit' }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        
        <h2 style={{ fontWeight: 700, fontSize: 24, margin: '24px 0 8px 0', textAlign: 'center' }}>Create an account</h2>
        <p style={{ color: isDark ? '#8a8fa3' : '#6b7280', margin: '0 0 24px 0', fontSize: 16, textAlign: 'center' }}>
          Enter your details to get started.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyles} htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" style={inputStyles} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyles} htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" style={inputStyles} />
            </div>
          </div>
          
          <div>
            <label style={labelStyles} htmlFor="address">Address</label>
            <input id="address" name="address" type="text" style={inputStyles} />
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyles} htmlFor="state">State</label>
              <input id="state" name="state" type="text" style={inputStyles} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyles} htmlFor="postalCode">Postal Code</label>
              <input id="postalCode" name="postalCode" type="text" style={inputStyles} />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyles} htmlFor="dob">Date of Birth</label>
              <input id="dob" name="dob" type="date" style={inputStyles} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyles} htmlFor="ssn">SSN</label>
              <input id="ssn" name="ssn" type="text" style={inputStyles} />
            </div>
          </div>

          <div>
            <label style={labelStyles} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required style={inputStyles} />
          </div>
          
          <div>
            <label style={labelStyles} htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required style={inputStyles} />
          </div>

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
              marginTop: 16,
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
        </form>
        
        <p style={{ marginTop: 24, color: isDark ? '#8a8fa3' : '#6b7280', fontSize: 15, textAlign: 'center' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#3b82f6', fontWeight: 600 }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}
