import React from "react";

type CardProps = {
    bankName: string;
  cardHolder: string;
    expiry: string;
    cardNumber: string;
  spending: number;
  spendingLimit: number;
  color: string; // background gradient or color
};

const Card: React.FC<CardProps> = ({
  bankName,
  cardHolder,
  expiry,
  cardNumber,
  spending,
  spendingLimit,
  color,
}) => {
  return (
    <div
      style={{
        background: color,
        borderRadius: 16,
        padding: "1.5rem",
        color: "#fff",
        minWidth: 260,
        maxWidth: 320,
        width: "100%",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        margin: "auto",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
        {bankName}
      </div>
      <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 24 }}>
        {cardHolder} &nbsp; | &nbsp; {expiry}
      </div>
      <div
        style={{
          fontSize: 20,
          letterSpacing: 2,
          fontWeight: 600,
          marginBottom: 16,
        }}
      >
        {cardNumber}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 12, opacity: 0.8, flex: 1 }}>
          Spending this month
        </span>
        <span style={{ fontWeight: 600, fontSize: 14 }}>
          ${spending.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${Math.min((spending / spendingLimit) * 100, 100)}%`,
            height: "100%",
            background: "#fff",
            opacity: 0.7,
          }}
        />
      </div>
    </div>
  );
};

export default Card;