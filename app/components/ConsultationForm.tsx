"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const CATEGORIES = ["채용 문의", "교육 프로그램", "조직 문화", "기타"];

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "오류가 발생했습니다.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", category: "", message: "" });
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{
        background: "var(--color-background-alt)",
        borderRadius: "var(--radius-lg)",
        padding: "48px var(--space-4)",
        textAlign: "center",
        border: "1px solid var(--color-background-input)",
      }}>
        <div style={{ fontSize: "48px", marginBottom: "var(--space-3)" }}>✅</div>
        <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text-base)", marginBottom: "var(--space-2)" }}>
          상담 신청이 완료됐습니다
        </h3>
        <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-alt)", marginBottom: "var(--space-4)" }}>
          담당자가 확인 후 입력하신 이메일로 연락드릴게요.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary"
          style={{ height: "36px", padding: "0 20px" }}
        >
          새 상담 신청
        </button>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--color-background-input)",
    border: "2px solid transparent",
    borderRadius: "var(--radius-sm)",
    color: "var(--color-text-base)",
    fontSize: "var(--font-size-body)",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-base)",
    transition: "border-color 100ms ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "var(--font-size-sm)",
    fontWeight: 600,
    color: "var(--color-text-alt)",
    marginBottom: "6px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
        <div>
          <label style={labelStyle}>이름 *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            required
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-twitch-purple)")}
            onBlur={(e) => (e.target.style.borderColor = "transparent")}
          />
        </div>
        <div>
          <label style={labelStyle}>이메일 *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-twitch-purple)")}
            onBlur={(e) => (e.target.style.borderColor = "transparent")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>문의 유형 *</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          style={{ ...inputStyle, cursor: "pointer" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-twitch-purple)")}
          onBlur={(e) => (e.target.style.borderColor = "transparent")}
        >
          <option value="" disabled>유형을 선택해주세요</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>상담 내용 *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="문의하실 내용을 자세히 입력해주세요."
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px", lineHeight: 1.6 }}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-twitch-purple)")}
          onBlur={(e) => (e.target.style.borderColor = "transparent")}
        />
      </div>

      {status === "error" && (
        <div style={{
          background: "rgba(235, 4, 0, 0.1)",
          border: "1px solid var(--color-live)",
          borderRadius: "var(--radius-sm)",
          padding: "10px 14px",
          fontSize: "var(--font-size-sm)",
          color: "#ff6b6b",
        }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary"
        style={{ height: "44px", fontSize: "var(--font-size-body)", width: "100%", justifyContent: "center" }}
      >
        {status === "loading" ? "전송 중..." : "상담 신청하기"}
      </button>

      <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-alt-2)", textAlign: "center" }}>
        입력하신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
