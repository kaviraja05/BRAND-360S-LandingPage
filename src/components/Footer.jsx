"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid rgba(4,129,162,0.15)",
        color: "rgb(10, 37, 64)",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1400px] px-6 md:px-12 xl:px-16"
        style={{
          paddingTop: "40px",
          paddingBottom: "44px",
        }}
      >
        <div className="ft-grid">

          {/* ── Col 1: Logo + Description ── */}
          <div>
            <div style={{ marginBottom: "14px" }}>
              <Image
                src="/image/Brand.webp"
                alt="Brand360s Logo"
                width={160}
                height={50}
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  width: "auto",
                  height: "40px",
                  display: "block",
                }}
                priority
              />
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.75,
                color: "rgb(10, 37, 64)",
                maxWidth: "240px",
              }}
            >
              We believe that every client deserves honest premium{" "}
              <span style={{ color: "rgb(4,129,162)", fontWeight: 600 }}>service</span>{" "}
              and{" "}
              <span style={{ color: "rgb(4,129,162)", fontWeight: 600 }}>
                absolute reliability
              </span>{" "}
              and{" "}
              <span style={{ color: "rgb(4,129,162)", fontWeight: 600 }}>integrity.</span>
            </p>
          </div>

          {/* ── Col 2: Company ── */}
          <div>
            <p className="ft-col-title">Company</p>
            <div className="ft-col-line" />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Home", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontSize: "13.5px",
                      color: "rgb(10, 37, 64)",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1.9,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(4,129,162)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(10,37,64)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact Info ── */}
          <div>
            <p className="ft-col-title">Contact Info</p>
            <div className="ft-col-line" />

            {/* Phone */}
            <div className="ft-contact-row">
              <svg className="ft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.43 2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <a href="tel:+918778166492" className="ft-contact-text">+91 999 901 1777</a>
                <a href="tel:+41767335757"  className="ft-contact-text">+91 877 816 6492</a>
              </div>
            </div>

            {/* Email */}
            <div className="ft-contact-row">
              <svg className="ft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href="mailto:contact@brand360s.com" className="ft-contact-text">
                contact@brand360s.com
              </a>
            </div>

            {/* Address — India */}
            <div className="ft-contact-row">
              <svg className="ft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="ft-contact-text" style={{ cursor: "default" }}>
                AMARIS, North Wing, 1st Floor,<br />
                25 Church Road, Golden George Nagar,<br />
                Mogappair East, Chennai 600107
              </span>
            </div>

            {/* Address — Switzerland */}
            <div className="ft-contact-row">
              <svg className="ft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chem.+du+Ch%C3%A2teau+13%2C+1422+Grandson%2C+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-contact-text"
              >
                Chem. du Château 13,<br />
                1422 Grandson, Switzerland
              </a>
            </div>
          </div>

          {/* ── Col 4: CTA ── */}
          <div>
            <p
              style={{
                fontSize: "10.5px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "oklch(0.6 0.01 250)",
                marginBottom: "7px",
              }}
            >
              LET&apos;S BUILD SOMETHING
            </p>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "10px",
                color: "rgb(10, 37, 64)",
              }}
            >
              <span style={{ color: "rgb(4,129,162)" }}>Amazing</span> Together.
            </h3>

            <p
              style={{
                fontSize: "12.5px",
                color: "rgb(10, 37, 64)",
                lineHeight: 1.7,
                opacity: 0.78,
                marginBottom: 0,
              }}
            >
              We combine vision, creativity and strategy to deliver measurable
              growth and long-term brand value.
            </p>

            <a href="#" className="ft-cta-btn">
              Let&apos;s work together
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
