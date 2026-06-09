import sql, { initDb } from "@/lib/db";

async function getConsultations() {
  await initDb();
  return sql`
    SELECT id, name, email, category, message, created_at
    FROM consultations
    ORDER BY created_at DESC
  `;
}

const CATEGORY_COLORS: Record<string, string> = {
  "채용 문의":   "#9146ff",
  "교육 프로그램": "#1db3ff",
  "조직 문화":   "#00f593",
  "기타":       "#ffca5f",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("ko-KR", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  });
}

export default async function AdminPage() {
  const rows = await getConsultations();

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--color-background-base)",
      color: "var(--color-text-base)",
      fontFamily: "var(--font-base)",
    }}>
      {/* Header */}
      <header style={{
        height: "var(--nav-height)",
        background: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-background-input)",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--space-6)",
        gap: "var(--space-3)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-nav)",
      }}>
        <a href="/" style={{ color: "var(--color-twitch-purple)", textDecoration: "none", fontSize: "20px" }}>←</a>
        <span style={{ fontWeight: 700, fontSize: "var(--font-size-md)" }}>상담 관리</span>
        <span className="live-badge" style={{ marginLeft: "4px" }}>LIVE</span>
        <div style={{ flex: 1 }} />
        <span style={{
          background: "var(--color-background-input)",
          color: "var(--color-twitch-purple-light)",
          fontWeight: 700,
          fontSize: "var(--font-size-sm)",
          padding: "4px 12px",
          borderRadius: "var(--radius-pill)",
        }}>
          총 {rows.length}건
        </span>
      </header>

      <main style={{ padding: "var(--space-6)", maxWidth: "1100px", margin: "0 auto" }}>
        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "var(--space-3)",
          marginBottom: "var(--space-6)",
        }}>
          {Object.entries(
            rows.reduce<Record<string, number>>((acc, r) => {
              const cat = String(r.category);
              acc[cat] = (acc[cat] ?? 0) + 1;
              return acc;
            }, {})
          ).map(([cat, count]) => (
            <div key={cat} style={{
              background: "var(--color-background-alt)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-3) var(--space-4)",
              borderLeft: `3px solid ${CATEGORY_COLORS[cat] ?? "#9146ff"}`,
            }}>
              <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-alt)", marginBottom: "4px" }}>{cat}</div>
              <div style={{ fontSize: "24px", fontWeight: 700, color: CATEGORY_COLORS[cat] ?? "#9146ff" }}>{count}</div>
            </div>
          ))}
        </div>

        {rows.length === 0 ? (
          <div style={{
            background: "var(--color-background-alt)",
            borderRadius: "var(--radius-lg)",
            padding: "80px var(--space-4)",
            textAlign: "center",
            color: "var(--color-text-alt)",
          }}>
            <div style={{ fontSize: "48px", marginBottom: "var(--space-3)" }}>📭</div>
            <p style={{ fontSize: "var(--font-size-md)" }}>아직 접수된 상담이 없습니다.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {rows.map((row) => (
              <div key={String(row.id)} style={{
                background: "var(--color-background-alt)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-background-input)",
                padding: "var(--space-4)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "var(--space-3)",
              }}>
                {/* Left */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-2)", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, fontSize: "var(--font-size-body)", color: "var(--color-text-base)" }}>
                      {String(row.name)}
                    </span>
                    <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-alt)" }}>
                      {String(row.email)}
                    </span>
                    <span style={{
                      fontSize: "var(--font-size-xs)",
                      fontWeight: 600,
                      padding: "2px 10px",
                      borderRadius: "var(--radius-pill)",
                      background: `${CATEGORY_COLORS[String(row.category)] ?? "#9146ff"}22`,
                      color: CATEGORY_COLORS[String(row.category)] ?? "#9146ff",
                    }}>
                      {String(row.category)}
                    </span>
                  </div>
                  <p style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-text-alt)",
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}>
                    {String(row.message)}
                  </p>
                </div>

                {/* Right */}
                <div style={{
                  fontSize: "var(--font-size-xs)",
                  color: "var(--color-text-alt-2)",
                  whiteSpace: "nowrap",
                  textAlign: "right",
                  paddingTop: "2px",
                }}>
                  #{String(row.id)}<br />
                  {formatDate(String(row.created_at))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
