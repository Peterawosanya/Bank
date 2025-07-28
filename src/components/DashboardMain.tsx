"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const userName = "Patrick"; // Replace with dynamic value when you have auth

// Example data: 2 accounts, 60% in one, 40% in another
const data = [
  { name: "Account 1", value: 60 },
  { name: "Account 2", value: 40 },
];
const COLORS = ["#2193b0", "#e3e8ff"];

const transactions = [
  { name: "Spotify", amount: -15, status: "Processing", date: "Wed 1:00pm", category: "Subscriptions" },
  { name: "Alexa Doe", amount: 88, status: "Success", date: "Wed 2:45am", category: "Deposit" },
  { name: "Netflix", amount: -12, status: "Success", date: "Tue 8:00pm", category: "Subscriptions" },
  { name: "Grocery Store", amount: -54, status: "Failed", date: "Mon 5:30pm", category: "Food" },
];

const DashboardMain = () => (
  <main style={{ flex: 2, padding: "2rem", fontFamily: "Inter, sans-serif" }}>
    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: "#111" }}>
      Welcome, <span style={{ color: "#2193b0" }}>{userName}</span>
    </h2>
    <p style={{ color: "#666", marginBottom: 24, fontSize: 16 }}>
      Access & manage your account and transactions efficiently.
    </p>
    
    {/* Modern Current Balance Section */}
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "2rem 2.5rem",
        marginBottom: 32,
        display: "flex",
        alignItems: "center",
        gap: 40,
        border: "1px solid #f0f0f0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      {/* Larger Donut Chart with Centered Balance */}
      <div style={{ position: "relative", width: 150, height: 150 }}>
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 600, color: "#111" }}>
            $2,698
          </div>
          <div style={{ fontSize: 14, color: "#8a8fa3" }}>Total</div>
        </div>
      </div>
      
      {/* Account Info */}
      <div>
        <div style={{ fontWeight: 600, fontSize: 18, color: "#222" }}>
          2 Bank Accounts
        </div>
        <div style={{ fontSize: 36, fontWeight: 600, color: "#111", margin: "8px 0" }}>
          $2,698.12
        </div>
        <div style={{ color: "#8a8fa3", fontSize: 16 }}>Total Current Balance</div>
      </div>
      
      {/* Add Bank Link */}
      <span
        style={{
          color: "#2193b0",
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer",
          marginLeft: "auto",
        }}
      >
        Add bank
      </span>
    </div>
    
    {/* Simple Recent Transactions Section */}
    <div>
      <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        Recent Transactions
      </h3>
      
      {/* Simple Transactions Table */}
      <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: "1px solid #f0f0f0" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ background: "#f8f9fa", color: "#666", fontWeight: 600 }}>
              <th style={{ padding: "1rem", textAlign: "left" }}>Transaction</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Amount</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Status</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Date</th>
              <th style={{ padding: "1rem", textAlign: "left" }}>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} style={{ borderTop: "1px solid #f0f0f0" }}>
                <td style={{ padding: "1rem" }}>{tx.name}</td>
                <td style={{ padding: "1rem", color: tx.amount > 0 ? "#27ae60" : "#e74c3c" }}>
                  {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                </td>
                <td style={{ padding: "1rem" }}>
                  <span style={{ 
                    color: tx.status === "Success" ? "#27ae60" : 
                           tx.status === "Processing" ? "#f39c12" : "#e74c3c" 
                  }}>
                    {tx.status}
                  </span>
                </td>
                <td style={{ padding: "1rem" }}>{tx.date}</td>
                <td style={{ padding: "1rem" }}>
                  <span style={{
                    background: tx.category === "Deposit" ? "#e0f7e9" :
                               tx.category === "Subscriptions" ? "#e3e8ff" : "#fde2e2",
                    color: tx.category === "Deposit" ? "#27ae60" :
                           tx.category === "Subscriptions" ? "#3b82f6" : "#e74c3c",
                    borderRadius: 8,
                    padding: "4px 8px",
                    fontSize: 12,
                  }}>
                    {tx.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </main>
);

export default DashboardMain;