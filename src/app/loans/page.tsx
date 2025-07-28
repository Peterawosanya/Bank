export default function LoansPage() {
  return (
    <section>
      <h1>Loans</h1>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: 'var(--color-surface)', borderRadius: 12 }}>
        <h2 style={{ margin: 0 }}>Apply for a Loan</h2>
        <button style={{ background: 'var(--color-accent)', color: '#181a1a', fontWeight: 700, fontSize: 18, padding: '1em 2em', borderRadius: 8, marginTop: 16 }}>
          Start Application
        </button>
      </div>
      <div>
        <h3>Your Loan Applications</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="text-muted">No loan applications yet.</li>
        </ul>
      </div>
    </section>
  );
} 