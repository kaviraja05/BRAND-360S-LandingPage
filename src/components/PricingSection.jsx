// "use client";

// const plans = [
//   {
//     id: "starter",
//     title: "Starter",
//     subtitle: "Website Package",
//     price: "from ₹25,000+",
//     priceColor: "#0481a2",
//     isCustom: false,
//     accent: "#0481a2",
//     features: [
//       "Up to 5 Pages",
//       "Responsive Design",
//       "Basic SEO",
//       "Contact Form",
//       "1 Month Support",
//     ],
//     cta: "Enquire",
//   },
//   {
//     id: "growth",
//     title: "Growth",
//     subtitle: "Website Package",
//     price: "from ₹45,000+",
//     priceColor: "rgb(36,62,118)",
//     isCustom: false,
//     accent: "rgb(36,62,118)",
//     features: [
//       "Up to 10 Pages",
//       "Responsive Design",
//       "On-page SEO",
//       "WhatsApp Integration",
//       "Google Maps",
//       "3 Months Support",
//     ],
//     cta: "Enquire",
//   },
//   {
//     id: "professional",
//     title: "Professional",
//     subtitle: "Website Package",
//     price: "from ₹75,000+",
//     priceColor: "#0481a2",
//     isCustom: false,
//     accent: "#0481a2",
//     features: [
//       "Up to 20 Pages",
//       "Responsive Design",
//       "Advanced SEO",
//       "WhatsApp Integration",
//       "Google Maps",
//       "Custom Integrations",
//       "6 Months Support",
//     ],
//     cta: "Enquire",
//   },
//   {
//     id: "custom",
//     title: "Custom",
//     subtitle: "Website Package",
//     price: "Let's Discuss",
//     priceColor: "rgb(36,62,118)",
//     isCustom: true,
//     accent: "rgb(36,62,118)",
//     features: [
//       "Unlimited Pages",
//       "Custom Features",
//       "Advanced SEO",
//       "API Integrations",
//       "Priority Support",
//       "Dedicated Assistance",
//     ],
//     cta: "Contact Us",
//   },
// ];

// export default function PricingSection() {
//   return (
//     <>
//       <style>{`
//         .ps-section {
//           background: oklch(0.97 0.005 250);
//           padding: 60px 0 76px;
//         }
//         .ps-container {
//           max-width: 1260px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* ── Top badge ── */
//         .ps-top-badge {
//           display: flex;
//           justify-content: center;
//           margin-bottom: 18px;
//         }
//         .ps-top-badge-inner {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           background: #ffffff;
//           border: 1.5px solid #0481a2;
//           border-radius: 50px;
//           padding: 6px 18px;
//           font-size: 10.5px;
//           font-weight: 700;
//           letter-spacing: 1.4px;
//           text-transform: uppercase;
//           color: #0481a2;
//         }

//         /* ── Heading ── */
//         .ps-heading {
//           text-align: center;
//           margin-bottom: 16px;
//         }
//         .ps-heading h2 {
//           font-size: 40px;
//           font-weight: 800;
//           color: rgb(10,37,64);
//           line-height: 1.2;
//           letter-spacing: -0.5px;
//           margin: 0;
//         }
//         .ps-heading h2 .gradient-text {
//           background-image: linear-gradient(90deg, rgb(10,37,64), rgb(4,129,162));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         /* ── Subtitle ── */
//         .ps-subtitle {
//           text-align: center;
//           font-size: 14.5px;
//           color: #4a5a6a;
//           line-height: 1.7;
//           margin: 0 auto 44px;
//           max-width: 540px;
//         }
//         .ps-subtitle a {
//           color: #0481a2;
//           font-weight: 700;
//           text-decoration: none;
//         }

//         /* ── Grid ── */
//         .ps-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 18px;
//           align-items: stretch;
//         }

//         /* ── Card ── */
//         .ps-card {
//           background: oklch(0.95 0.006 250);
//           border-radius: 14px;
//           border: 1px solid #d6e4ee;
//           box-shadow: 0 2px 16px rgba(0,0,0,0.06);
//           display: flex;
//           flex-direction: column;
//           overflow: visible;
//           position: relative;
//           transition: transform 0.35s ease, box-shadow 0.35s ease;
//         }
//         .ps-card:hover {
//           transform: scale(1.03);
//           box-shadow: 0 16px 36px rgba(0,0,0,0.11);
//         }

//         /* J-curve: tiny rounded corner only */
//         .ps-card::after {
//           content: "";
//           position: absolute;
//           right: -1px;
//           bottom: -1px;
//           width: 10px;
//           height: 55px;
//           border-right: 1px solid #0481a2;
//           border-bottom: 1px solid #0481a2;
//           border-bottom-right-radius: 24px;
//           pointer-events: none;
//           z-index: 2;
//         }

//         /* ── Card body ── */
//         .ps-card-body {
//           padding: 20px 20px 16px;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         /* Title */
//         .ps-plan-title {
//           font-size: 16px;
//           font-weight: 700;
//           color: rgb(10,37,64);
//           margin: 0 0 2px 0;
//           line-height: 1.2;
//         }
//         .ps-plan-subtitle {
//           font-size: 12px;
//           font-weight: 600;
//           margin: 0 0 9px 0;
//           line-height: 1.2;
//         }
//         .ps-rule {
//           width: 26px;
//           height: 2px;
//           border-radius: 2px;
//           margin-bottom: 14px;
//           border: none;
//         }

//         /* Features */
//         .ps-features {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }
//         .ps-feature {
//           display: flex;
//           align-items: flex-start;
//           gap: 7px;
//           font-size: 12.5px;
//           color: #3d4f60;
//           line-height: 1.4;
//         }
//         .ps-check {
//           flex-shrink: 0;
//           color: #0481a2;
//           font-size: 12px;
//           line-height: 1.4;
//           font-weight: 700;
//         }

//         /* ── Bottom price bar ── */
//         .ps-card-footer {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 10px;
//           padding: 12px 16px;
//           background: #ffffff;
//           border-top: 1px solid #d6e4ee;
//           border-radius: 0 0 14px 14px;
//           overflow: hidden;
//         }

//         /* Price label */
//         .ps-price-label {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.1px;
//           text-transform: uppercase;
//           color: #9ab0c0;
//           margin: 0 0 2px 0;
//           line-height: 1;
//         }

//         /* Price amount */
//         .ps-price-amount {
//           font-size: 19px;
//           font-weight: 700;
//           white-space: nowrap;
//           line-height: 1.1;
//           margin: 0;
//         }

//         /* CTA button — compact */
//         .ps-footer-btn {
//           flex-shrink: 0;
//           padding: 8px 16px;
//           border-radius: 10px;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           font-family: inherit;
//           border: none;
//           color: #ffffff;
//           white-space: nowrap;
//           transition: filter 0.25s ease, box-shadow 0.25s ease;
//           line-height: 1;
//         }
//         .ps-footer-btn:hover {
//           filter: brightness(1.1);
//           box-shadow: 0 4px 14px rgba(4,129,162,0.28);
//         }

//         /* SVG curve overlay — removed, using ::after instead */

//         /* ── Responsive ── */
//         @media (max-width: 1060px) {
//           .ps-grid { grid-template-columns: repeat(2, 1fr); }
//         }
//         @media (max-width: 580px) {
//           .ps-grid { grid-template-columns: 1fr; }
//           .ps-heading h2 { font-size: 28px; }
//         }
//       `}</style>

//       <section className="ps-section">
//         <div className="ps-container">

//           {/* Badge */}
//           <div className="ps-top-badge">
//             <div className="ps-top-badge-inner">
//               <span style={{ fontSize: "11px" }}>★</span>
//               WEBSITES BUILT FOR GROWTH
//             </div>
//           </div>

//           {/* Heading */}
//           <div className="ps-heading">
//             <h2>
//               Choose the Website That<br />
//               Fits Your{" "}
//               <span className="gradient-text">Business Goals</span>
//             </h2>
//           </div>

//           {/* Subtitle */}
//           <p className="ps-subtitle">
//             Whether you&apos;re starting out, scaling up, or building a custom platform,
//             Brand360s creates websites designed to{" "}
//             <a href="#">attract visitors and convert them into customers.</a>
//           </p>

//           {/* Cards */}
//           <div className="ps-grid">
//             {plans.map((plan) => (
//               <div key={plan.id} className="ps-card">

//                 {/* Body: title + features */}
//                 <div className="ps-card-body">
//                   <h3 className="ps-plan-title">{plan.title}</h3>
//                   <p className="ps-plan-subtitle" style={{ color: plan.accent }}>
//                     {plan.subtitle}
//                   </p>
//                   <hr className="ps-rule" style={{ background: plan.accent }} />

//                   <ul className="ps-features">
//                     {plan.features.map((f) => (
//                       <li key={f} className="ps-feature">
//                         <span className="ps-check" style={{ color: plan.accent }}>✓</span>
//                         {f}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Footer: PRICE label + amount left, button right */}
//                 <div className="ps-card-footer">
//                   <div>
//                     <p className="ps-price-label">Price:</p>
//                     <p
//                       className="ps-price-amount"
//                       style={{ color: plan.priceColor }}
//                     >
//                       {plan.price}
//                     </p>
//                   </div>
//                   <button
//                     type="button"
//                     className="ps-footer-btn"
//                     style={{ background: plan.accent }}
//                   >
//                     {plan.cta}
//                   </button>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "starter",
    title: "Starter",
    subtitle: "Website Package",
    price: "from ₹25,000+",
    priceColor: "#0481a2",
    accent: "#0481a2",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO",
      "Contact Form",
      "1 Month Support",
    ],
    cta: "Enquire",
  },
  {
    id: "growth",
    title: "Growth",
    subtitle: "Website Package",
    price: "from ₹45,000+",
    priceColor: "rgb(36,62,118)",
    accent: "rgb(36,62,118)",
    features: [
      "Up to 10 Pages",
      "Responsive Design",
      "On-page SEO",
      "WhatsApp Integration",
      "Google Maps",
      "3 Months Support",
    ],
    cta: "Enquire",
  },
  {
    id: "professional",
    title: "Professional",
    subtitle: "Website Package",
    price: "from ₹75,000+",
    priceColor: "#0481a2",
    accent: "#0481a2",
    features: [
      "Up to 20 Pages",
      "Responsive Design",
      "Advanced SEO",
      "WhatsApp Integration",
      "Google Maps",
      "Custom Integrations",
      "6 Months Support",
    ],
    cta: "Enquire",
  },
  {
    id: "custom",
    title: "Custom",
    subtitle: "Website Package",
    price: "Let's Discuss",
    priceColor: "rgb(36,62,118)",
    accent: "rgb(36,62,118)",
    features: [
      "Unlimited Pages",
      "Custom Features",
      "Advanced SEO",
      "API Integrations",
      "Priority Support",
      "Dedicated Assistance",
    ],
    cta: "Contact Us",
  },
];

export default function PricingSection() {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCards(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ps-section {
          background: oklch(0.97 0.005 250);
          padding: 60px 0 76px;
          overflow: hidden;
        }

        .ps-container {
          max-width: 1260px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Badge */
        .ps-top-badge {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }

        .ps-top-badge-inner {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ffffff;
          border: 1.5px solid #0481a2;
          border-radius: 50px;
          padding: 6px 18px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #0481a2;
        }

        /* Heading */
        .ps-heading {
          text-align: center;
          margin-bottom: 16px;
        }

        .ps-heading h2 {
          font-size: 40px;
          font-weight: 800;
          color: rgb(10,37,64);
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .gradient-text {
          background-image: linear-gradient(
            90deg,
            rgb(10,37,64),
            rgb(4,129,162)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Subtitle */
        .ps-subtitle {
          text-align: center;
          font-size: 14.5px;
          color: #4a5a6a;
          line-height: 1.7;
          margin: 0 auto 44px;
          max-width: 540px;
        }

        .ps-subtitle a {
          color: #0481a2;
          font-weight: 700;
          text-decoration: none;
        }

        /* Grid */
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        /* Animation */
        .ps-card {
          background: oklch(0.95 0.006 250);
          border-radius: 14px;
          border: 1px solid #d6e4ee;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);

          display: flex;
          flex-direction: column;

          overflow: visible;
          position: relative;

          transition:
            transform 1.6s ease,
            opacity 1.6s ease,
            box-shadow 0.35s ease;

          opacity: 0;
          transform: translateX(-120px);
        }

        /* show animation */
        .ps-card.show {
          opacity: 1;
          transform: translateX(0);
        }

        /* stagger */
        .ps-card:nth-child(1) {
          transition-delay: 0.2s;
        }

        .ps-card:nth-child(2) {
          transition-delay: 0.5s;
        }

        .ps-card:nth-child(3) {
          transition-delay: 0.8s;
        }

        .ps-card:nth-child(4) {
          transition-delay: 1.1s;
        }

        .ps-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 36px rgba(0,0,0,0.11);
        }

        /* J curve */
        .ps-card::after {
          content: "";
          position: absolute;
          right: -1px;
          bottom: -1px;

          width: 10px;
          height: 55px;

          border-right: 1px solid #0481a2;
          border-bottom: 1px solid #0481a2;

          border-bottom-right-radius: 24px;

          pointer-events: none;
          z-index: 2;
        }

        /* Body */
        .ps-card-body {
          padding: 20px 20px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Title */
        .ps-plan-title {
          font-size: 16px;
          font-weight: 700;
          color: rgb(10,37,64);
          margin: 0 0 2px 0;
          line-height: 1.2;
        }

        .ps-plan-subtitle {
          font-size: 12px;
          font-weight: 600;
          margin: 0 0 9px 0;
          line-height: 1.2;
        }

        .ps-rule {
          width: 26px;
          height: 2px;
          border-radius: 2px;
          margin-bottom: 14px;
          border: none;
        }

        /* Features */
        .ps-features {
          list-style: none;
          padding: 0;
          margin: 0;

          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ps-feature {
          display: flex;
          align-items: flex-start;
          gap: 7px;

          font-size: 12.5px;
          color: #3d4f60;
          line-height: 1.4;
        }

        .ps-check {
          flex-shrink: 0;
          color: #0481a2;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* Footer */
        .ps-card-footer {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          padding: 12px 16px;

          background: #ffffff;

          border-top: 1px solid #d6e4ee;
          border-radius: 0 0 14px 14px;

          overflow: hidden;
        }

        .ps-price-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          color: #9ab0c0;

          margin: 0 0 2px 0;
          line-height: 1;
        }

        .ps-price-amount {
          font-size: 19px;
          font-weight: 700;
          white-space: nowrap;
          line-height: 1.1;
          margin: 0;
        }

        /* Button */
        .ps-footer-btn {
          flex-shrink: 0;

          padding: 8px 16px;

          border-radius: 10px;

          font-size: 13px;
          font-weight: 700;

          cursor: pointer;

          border: none;

          color: #ffffff;

          white-space: nowrap;

          transition:
            filter 0.25s ease,
            box-shadow 0.25s ease;

          line-height: 1;
        }

        .ps-footer-btn:hover {
          filter: brightness(1.1);
          box-shadow: 0 4px 14px rgba(4,129,162,0.28);
        }

        /* Responsive */
        @media (max-width: 1060px) {
          .ps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .ps-grid {
            grid-template-columns: 1fr;
          }

          .ps-heading h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="ps-section">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 xl:px-16">

          {/* Badge */}
          <div className="ps-top-badge">
            <div className="ps-top-badge-inner">
              <span style={{ fontSize: "11px" }}>★</span>
              WEBSITES BUILT FOR GROWTH
            </div>
          </div>

          {/* Heading */}
          <div className="ps-heading">
            <h2>
              Choose the Website That
              <br />
              Fits Your{" "}
              <span className="gradient-text">
                Business Goals
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="ps-subtitle">
            Whether you're starting out, scaling up,
            or building a custom platform,
            Brand360s creates websites designed to{" "}
            <a href="#">
              attract visitors and convert them into customers.
            </a>
          </p>

          {/* Cards */}
          <div className="ps-grid">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`ps-card ${
                  showCards ? "show" : ""
                }`}
              >
                {/* Body */}
                <div className="ps-card-body">
                  <h3 className="ps-plan-title">
                    {plan.title}
                  </h3>

                  <p
                    className="ps-plan-subtitle"
                    style={{ color: plan.accent }}
                  >
                    {plan.subtitle}
                  </p>

                  <hr
                    className="ps-rule"
                    style={{ background: plan.accent }}
                  />

                  <ul className="ps-features">
                    {plan.features.map((f) => (
                      <li key={f} className="ps-feature">
                        <span
                          className="ps-check"
                          style={{ color: plan.accent }}
                        >
                          ✓
                        </span>

                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="ps-card-footer">
                  <div>
                    <p className="ps-price-label">
                      Price:
                    </p>

                    <p
                      className="ps-price-amount"
                      style={{ color: plan.priceColor }}
                    >
                      {plan.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="ps-footer-btn"
                    style={{ background: plan.accent }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}