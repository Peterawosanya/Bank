import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Bank App',
  description: 'Modern banking app with loans, transfers, and more',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          background: 'var(--color-surface)',
          padding: '1rem 0',
          borderBottom: '1px solid var(--color-bg)',
        }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Dashboard</Link>
          <Link href="/transactions">Transactions</Link>
          <Link href="/transfer">Transfer</Link>
          <Link href="/bills">Bills</Link>
          <Link href="/loans" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Loans</Link>
          <Link href="/settings">Settings</Link>
        </nav>
        <main style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
        {children}
        </main>
      </body>
    </html>
  );
}
