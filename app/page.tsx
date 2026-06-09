export default function Home() {
  const services = [
    {
      icon: "💡",
      tag: "기획",
      title: "교육 프로그램 기획",
      description:
        "임직원의 역량 강화를 위한 교육 과정을 체계적으로 기획하고 운영합니다. 개인 성장과 조직 목표를 연결하는 최적의 학습 경험을 설계합니다.",
      viewers: "기획 · 운영",
    },
    {
      icon: "🚀",
      tag: "채용",
      title: "인재 채용 및 온보딩",
      description:
        "뛰어난 인재를 발굴하고 조직에 빠르게 적응할 수 있도록 지원합니다. 데이터 기반 채용 프로세스로 최적의 인재를 선발합니다.",
      viewers: "채용 · 온보딩",
    },
    {
      icon: "📈",
      tag: "성장",
      title: "조직 문화 및 성과 관리",
      description:
        "건강한 조직 문화를 구축하고 성과 체계를 설계합니다. 구성원이 몰입하고 성장할 수 있는 환경을 만들어 갑니다.",
      viewers: "문화 · 성과",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-background-base)", color: "var(--color-text-base)", fontFamily: "var(--font-base)" }}>

      {/* Top Navigation */}
      <nav style={{
        height: "var(--nav-height)",
        background: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-background-input)",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--space-6)",
        gap: "var(--space-4)",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-nav)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <svg width="20" height="24" viewBox="0 0 40 48" fill="var(--color-twitch-purple)" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L0 10.667V42.667H13.333V48H20L25.333 42.667H34.667L40 37.333V0H4ZM36 35.333L28.667 42.667H20L14.667 48V42.667H5.333V4H36V35.333ZM30.667 12H26.667V24H30.667V12ZM20 12H16V24H20V12Z" />
          </svg>
          <span style={{ fontWeight: 700, fontSize: "var(--font-size-md)", color: "var(--color-text-base)" }}>
            인재개발팀
          </span>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
          {["소개", "업무", "채용"].map((label) => (
            <span
              key={label}
              style={{
                fontSize: "var(--font-size-body)",
                fontWeight: 600,
                color: "var(--color-text-alt)",
                padding: "6px 10px",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
              }}
            >
              {label}
            </span>
          ))}
          <a
            href="#faq"
            className="btn-primary"
            style={{ height: "32px", fontSize: "var(--font-size-body)", textDecoration: "none" }}
          >
            FAQ
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: "80px var(--space-6) 64px",
        textAlign: "center",
        animation: "slideUp 400ms ease-out",
      }}>
        <span className="live-badge" style={{ marginBottom: "var(--space-4)", display: "inline-flex" }}>
          LIVE
        </span>
        <div style={{ marginBottom: "var(--space-4)" }} />
        <h1 style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          color: "var(--color-text-base)",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginBottom: "var(--space-3)",
        }}>
          인재개발팀에{" "}
          <span style={{ color: "var(--color-twitch-purple)" }}>오신 것을</span>
          <br />환영합니다
        </h1>
        <p style={{
          fontSize: "var(--font-size-md)",
          color: "var(--color-text-alt)",
          maxWidth: "520px",
          margin: "0 auto var(--space-5)",
          lineHeight: 1.7,
        }}>
          더 나은 인재를 발굴하고, 함께 성장하는 문화를 만들어갑니다.
          <br />구성원 한 명 한 명의 가능성을 발견합니다.
        </p>

        <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:contact@team.com" className="btn-primary" style={{ height: "42px", fontSize: "15px", padding: "0 24px", textDecoration: "none" }}>
            ♥ 팔로우
          </a>
          <a href="#faq" className="btn-secondary" style={{ height: "42px", fontSize: "15px", padding: "0 24px", textDecoration: "none" }}>
            FAQ 보기
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: "var(--space-6)",
          justifyContent: "center",
          marginTop: "56px",
          flexWrap: "wrap",
        }}>
          {[
            { value: "1,200+", label: "교육 이수 인원" },
            { value: "98%", label: "구성원 만족도" },
            { value: "32명", label: "팀 규모" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "var(--color-twitch-purple-light)" }}>{value}</div>
              <div style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-alt)", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: "0 var(--space-6) 80px", maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
          <span style={{
            fontSize: "var(--font-size-sm)",
            fontWeight: 600,
            color: "var(--color-text-alt)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}>
            우리 팀이 하는 일
          </span>
          <hr className="divider" style={{ flex: 1 }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "var(--space-4)",
        }}>
          {services.map((service) => (
            <div key={service.title} className="card" style={{ padding: "var(--space-4)" }}>
              {/* Card Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                <span style={{ fontSize: "32px" }}>{service.icon}</span>
                <span className="tag">{service.tag}</span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "var(--font-size-md)",
                fontWeight: 600,
                color: "var(--color-text-base)",
                marginBottom: "var(--space-2)",
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-alt)",
                lineHeight: 1.7,
                marginBottom: "var(--space-3)",
              }}>
                {service.description}
              </p>

              {/* Footer */}
              <div style={{
                borderTop: "1px solid var(--color-background-input)",
                paddingTop: "var(--space-2)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}>
                <span style={{ width: "8px", height: "8px", background: "var(--color-twitch-purple)", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-alt-2)" }}>{service.viewers}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: "80px var(--space-6)", maxWidth: "760px", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
          <span style={{
            fontSize: "var(--font-size-sm)",
            fontWeight: 600,
            color: "var(--color-text-alt)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}>
            FAQ
          </span>
          <hr className="divider" style={{ flex: 1 }} />
        </div>

        <h2 style={{
          fontSize: "var(--font-size-2xl)",
          fontWeight: 700,
          color: "var(--color-text-base)",
          marginBottom: "40px",
        }}>
          자주 묻는 질문
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {[
            {
              q: "채용 관련 문의는 어떻게 하나요?",
              a: "채용 공고는 공식 채용 페이지에서 확인하실 수 있습니다. 지원서 제출 후 담당자가 검토 후 2주 이내에 연락드립니다.",
            },
            {
              q: "교육 프로그램은 누구나 신청할 수 있나요?",
              a: "전 임직원을 대상으로 운영됩니다. 직무 교육, 리더십 과정, 외부 교육 지원 등 다양한 프로그램이 있으니 사내 포털에서 신청하세요.",
            },
            {
              q: "인턴십 또는 신입 채용 프로그램이 있나요?",
              a: "상·하반기 정기 공채와 수시 채용을 진행합니다. 인턴십은 매년 상반기에 모집하며 우수 인턴은 정규직 전환 기회가 주어집니다.",
            },
            {
              q: "팀 문화와 근무 환경은 어떤가요?",
              a: "자율과 책임을 바탕으로 수평적인 소통 문화를 지향합니다. 유연 근무제와 재택 근무를 병행하며 구성원의 워라밸을 중요하게 생각합니다.",
            },
            {
              q: "인재개발팀에 직접 문의하고 싶어요.",
              a: "contact@team.com 으로 이메일을 보내주시면 근무일 기준 1~2일 이내에 답변드립니다.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              style={{
                background: "var(--color-background-alt)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-background-input)",
                overflow: "hidden",
              }}
            >
              <summary style={{
                padding: "var(--space-4)",
                fontSize: "var(--font-size-body)",
                fontWeight: 600,
                color: "var(--color-text-base)",
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "var(--space-3)",
              }}>
                {q}
                <span style={{ color: "var(--color-twitch-purple)", flexShrink: 0, fontSize: "18px" }}>＋</span>
              </summary>
              <div style={{
                padding: "0 var(--space-4) var(--space-4)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-alt)",
                lineHeight: 1.7,
                borderTop: "1px solid var(--color-background-input)",
                paddingTop: "var(--space-3)",
              }}>
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--color-background-alt)",
        borderTop: "1px solid var(--color-background-input)",
        padding: "var(--space-4) var(--space-6)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "var(--space-2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <svg width="14" height="16" viewBox="0 0 40 48" fill="var(--color-twitch-purple)" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L0 10.667V42.667H13.333V48H20L25.333 42.667H34.667L40 37.333V0H4ZM36 35.333L28.667 42.667H20L14.667 48V42.667H5.333V4H36V35.333ZM30.667 12H26.667V24H30.667V12ZM20 12H16V24H20V12Z" />
          </svg>
          <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-alt)" }}>
            © 2026 인재개발팀
          </span>
        </div>
        <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-alt-2)" }}>
          All rights reserved.
        </span>
      </footer>
    </div>
  );
}
