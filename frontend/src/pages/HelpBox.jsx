import { useState, useEffect } from "react";

const CATEGORIES = [
  { id: "girl_education",    label: "Girl Education",              icon: "📚", desc: "Access to schooling, scholarships & literacy" },
  { id: "child_labour",      label: "Child Labour",                icon: "🚸", desc: "Protection from exploitation & forced work" },
  { id: "financial_condition",label: "Financial Condition",        icon: "💳", desc: "Economic support & livelihood assistance" },
  { id: "girl_empowerment",  label: "Girl Empowerment Campaign",   icon: "✊", desc: "Awareness drives & community programs" },
  { id: "domestic_violence", label: "Domestic Violence",           icon: "🛡️", desc: "Safety, shelter & legal protection" },
  { id: "early_marriage",    label: "Early Marriage Prevention",   icon: "💍", desc: "Rights & freedom from forced marriage" },
  { id: "health_hygiene",    label: "Women Health & Hygiene",      icon: "🏥", desc: "Menstrual health, maternal care & nutrition" },
  { id: "skill_development", label: "Skill Development",           icon: "🛠️", desc: "Vocational training & employment support" },
  { id: "legal_awareness",   label: "Legal Awareness",             icon: "⚖️", desc: "Know your rights & legal aid" },
  { id: "digital_literacy",  label: "Digital Literacy",            icon: "💻", desc: "Tech access & online safety" },
  { id: "mental_health",     label: "Mental Health Support",       icon: "🧠", desc: "Counselling & psychological well-being" },
  { id: "other",             label: "Other",                       icon: "➕", desc: "Any other gender-related concern" },
];

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh","Other",
];

const URGENCY = [
  "Low – Awareness needed",
  "Medium – Needs attention soon",
  "High – Urgent intervention required",
  "Critical – Immediate action needed",
];

/* ── shared input style (light theme) ── */
const inputBase = {
  width: "100%", padding: "10px 14px", borderRadius: "8px",
  background: "#f9fafb", border: "1px solid #e5e7eb",
  color: "#111827", fontSize: "13px", outline: "none",
  transition: "border-color 0.2s", boxSizing: "border-box",
  fontFamily: "'Segoe UI', system-ui, sans-serif",
};

const selectBase = {
  ...inputBase,
  appearance: "none", WebkitAppearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
  backgroundSize: "auto",
  cursor: "pointer",
};

/* ── sub-components ── */
function SectionTitle({ children, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
      <div style={{ width: "3px", height: "16px", background: accent, borderRadius: "2px", flexShrink: 0 }} />
      <h3 style={{ color: "#374151", fontSize: "11px", fontWeight: "700", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
        {children}
      </h3>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label style={{ color: "#6b7280", fontSize: "12px", fontWeight: "500", display: "block", marginBottom: "5px" }}>
        {label}
      </label>
      <input
        type={type} value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputBase}
      />
    </div>
  );
}

function NavButtons({ onBack, onNext, canNext, accent, isLast }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
      {onBack && (
        <button onClick={onBack} style={{
          padding: "11px 22px", borderRadius: "8px",
          background: "#fff", border: "1px solid #e5e7eb",
          color: "#374151", fontSize: "13px", fontWeight: "600", cursor: "pointer",
        }}>
          ← Back
        </button>
      )}
      <button onClick={onNext} disabled={!canNext} style={{
        flex: 1, padding: "12px", borderRadius: "8px", border: "none",
        background: canNext ? accent : "#f3f4f6",
        color: canNext ? "#fff" : "#9ca3af",
        fontSize: "13px", fontWeight: "700",
        cursor: canNext ? "pointer" : "not-allowed",
        transition: "all 0.2s",
      }}>
        {isLast ? "Submit & Generate Report →" : "Continue →"}
      </button>
    </div>
  );
}

/* ── main component ── */
export default function GenderGapPortal() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [mode,      setMode]      = useState(null);   // 'help' | 'complaint'
  const [step,      setStep]      = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [ticketId,  setTicketId]  = useState("");
  const [animateIn, setAnimateIn] = useState(false);
  const [copied,    setCopied]    = useState(false);

  const [form, setForm] = useState({
    name: "", gender: "", age: "", email: "", mobile: "",
    state: "", district: "", village: "",
    categories: [], urgency: "", description: "",
    anonymous: false, consent: false,
    helpType: "",
    complaintAgainst: "", relationship: "", incidentDate: "",
  });

  useEffect(() => {
    if (isOpen) setTimeout(() => setAnimateIn(true), 10);
    else setAnimateIn(false);
  }, [isOpen]);

  const open = (selectedMode) => {
    setMode(selectedMode); setIsOpen(true);
    setStep(1); setSubmitted(false); setCopied(false);
  };

  const close = () => {
    setIsOpen(false); setMode(null); setStep(1);
    setSubmitted(false); setCopied(false);
    setForm({
      name: "", gender: "", age: "", email: "", mobile: "",
      state: "", district: "", village: "",
      categories: [], urgency: "", description: "",
      anonymous: false, consent: false,
      helpType: "", complaintAgainst: "", relationship: "", incidentDate: "",
    });
    setGeneratedMessage("");
  };

  const toggleCategory = (id) =>
    setForm(f => ({
      ...f,
      categories: f.categories.includes(id)
        ? f.categories.filter(c => c !== id)
        : [...f.categories, id],
    }));

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const generateMessage = () => {
    const catLabels = form.categories.map(c => CATEGORIES.find(x => x.id === c)?.label).join(", ");
    const dateStr   = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
    const tid       = "BGG-" + Date.now().toString(36).toUpperCase();
    setTicketId(tid);

    const block = (title, value) => `${title.padEnd(15)}: ${value}`;

    if (mode === "help") {
      setGeneratedMessage(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        BRIDGING THE GENDER GAP — HELP REGISTRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${block("TICKET ID", tid)}
${block("DATE", dateStr)}
${block("TYPE", "Help / Support Request")}

── REGISTRANT DETAILS ──────────────────────────────
${block("Name", form.anonymous ? "Anonymous" : form.name || "Not provided")}
${block("Gender", form.gender || "Not specified")}
${block("Age", form.age || "Not specified")}
${block("Mobile", form.mobile || "Not provided")}
${block("Email", form.email || "Not provided")}

── LOCATION ────────────────────────────────────────
${block("State", form.state || "Not specified")}
${block("District", form.district || "Not specified")}
${block("Village/Area", form.village || "Not specified")}

── ISSUE CATEGORIES ────────────────────────────────
${catLabels || "Not specified"}

── URGENCY LEVEL ───────────────────────────────────
${form.urgency || "Not specified"}

── TYPE OF HELP SOUGHT ─────────────────────────────
${form.helpType || "Not specified"}

── DESCRIPTION OF NEED ─────────────────────────────
${form.description || "No additional details provided."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This request will be forwarded to relevant NGOs and
local authorities matching the issue categories.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim());
    } else {
      setGeneratedMessage(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     BRIDGING THE GENDER GAP — COMPLAINT REGISTRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${block("TICKET ID", tid)}
${block("DATE", dateStr)}
${block("TYPE", "Formal Complaint")}

── COMPLAINANT DETAILS ─────────────────────────────
${block("Name", form.anonymous ? "Anonymous (Identity Protected)" : form.name || "Not provided")}
${block("Gender", form.gender || "Not specified")}
${block("Age", form.age || "Not specified")}
${block("Mobile", form.mobile || "Not provided")}
${block("Email", form.email || "Not provided")}

── LOCATION OF INCIDENT ────────────────────────────
${block("State", form.state || "Not specified")}
${block("District", form.district || "Not specified")}
${block("Village/Area", form.village || "Not specified")}

── COMPLAINT CATEGORIES ────────────────────────────
${catLabels || "Not specified"}

── URGENCY LEVEL ───────────────────────────────────
${form.urgency || "Not specified"}

── COMPLAINT AGAINST ───────────────────────────────
${block("Against", form.complaintAgainst || "Not specified")}
${block("Relationship", form.relationship || "Not specified")}
${block("Incident Date", form.incidentDate || "Not specified")}

── DESCRIPTION OF COMPLAINT ────────────────────────
${form.description || "No additional details provided."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This complaint will be forwarded to relevant local
authorities and NGOs for immediate review and action.
All personal information will be handled with strict
confidentiality as per applicable law.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim());
    }
    setSubmitted(true);
    setStep(4);
  };

  /* ── derived theme colours ── */
  const accent    = mode === "complaint" ? "#dc2626" : "#059669";
  const accentBg  = mode === "complaint" ? "#fef2f2" : "#f0fdf4";
  const accentBorder = mode === "complaint" ? "#fecaca" : "#bbf7d0";

  const canProceed1 = form.categories.length > 0 && form.urgency;
  const canProceed2 = form.anonymous || (form.name && form.mobile);
  const canProceed3 = form.state && form.description && form.consent;

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        input::placeholder,textarea::placeholder { color:#d1d5db; }
        input:focus,textarea:focus,select:focus   { border-color:#6b7280 !important; background:#fff !important; }
        option { background:#fff; color:#111827; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#f3f4f6; }
        ::-webkit-scrollbar-thumb { background:#d1d5db; border-radius:3px; }
      `}</style>

      {/* ══ TRIGGER SECTION ══ */}
      <div style={{
        background: "#ffffff", padding: "48px 24px",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        fontFamily: "'Segoe UI', system-ui, sans-serif", gap: "16px",
        marginTop: "150px"
      }}>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "13px", fontWeight: "500", letterSpacing: "0.3px" }}>
          Bridging the Gender Gap Initiative
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => open("complaint")}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 26px", borderRadius: "8px", border: "none", cursor: "pointer",
              background: "#dc2626", color: "#fff",
              fontSize: "14px", fontWeight: "700",
              boxShadow: "0 2px 8px rgba(220,38,38,0.25)",
              transition: "opacity 0.2s, transform 0.2s",
            }}>
            🚨 Register Complaint
          </button>
          <button
            onClick={() => open("help")}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 26px", borderRadius: "8px", border: "none", cursor: "pointer",
              background: "#059669", color: "#fff",
              fontSize: "14px", fontWeight: "700",
              boxShadow: "0 2px 8px rgba(5,150,105,0.25)",
              transition: "opacity 0.2s, transform 0.2s",
            }}>
            🤝 Register Help
          </button>
        </div>
      </div>

      {/* ══ MODAL OVERLAY ══ */}
      {isOpen && (
        <div
          onClick={e => e.target === e.currentTarget && close()}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(17,24,39,0.45)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
            opacity: animateIn ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <div style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "20px",
            width: "100%", maxWidth: "740px",
            maxHeight: "92vh", overflowY: "auto",
            boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 1px 0 rgba(0,0,0,0.04)",
            transform: animateIn ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}>

            {/* ── Modal Header ── */}
            <div style={{
              padding: "24px 28px 16px",
              borderBottom: "1px solid #f3f4f6",
              position: "sticky", top: 0, zIndex: 10,
              background: "#ffffff",
              borderRadius: "20px 20px 0 0",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: accentBg, border: `1px solid ${accentBorder}`,
                    borderRadius: "100px", padding: "4px 12px", marginBottom: "8px",
                  }}>
                    <span style={{ fontSize: "11px", color: accent, fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                      {mode === "complaint" ? "🚨 Complaint Registration" : "🤝 Help Registration"}
                    </span>
                  </div>
                  <h2 style={{ color: "#111827", fontSize: "18px", fontWeight: "700", margin: 0 }}>
                    {mode === "complaint" ? "File a Formal Complaint" : "Register a Help Request"}
                  </h2>
                </div>
                <button onClick={close} style={{
                  background: "#f9fafb", border: "1px solid #e5e7eb",
                  borderRadius: "8px", width: "34px", height: "34px", flexShrink: 0,
                  color: "#6b7280", cursor: "pointer", fontSize: "15px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>✕</button>
              </div>

              {/* Step progress */}
              {!submitted && (
                <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                  {["Issue Details", "Personal Info", "Location & Details"].map((label, i) => (
                    <div key={i} style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }}>
                        <div style={{
                          width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                          background: step > i + 1 ? accent : step === i + 1 ? accent : "#f3f4f6",
                          border: `2px solid ${step >= i + 1 ? accent : "#e5e7eb"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "9px", fontWeight: "800",
                          color: step >= i + 1 ? "#fff" : "#9ca3af",
                        }}>
                          {step > i + 1 ? "✓" : i + 1}
                        </div>
                        <span style={{
                          fontSize: "11px", fontWeight: step === i + 1 ? "600" : "400",
                          color: step >= i + 1 ? "#374151" : "#9ca3af",
                        }}>
                          {label}
                        </span>
                      </div>
                      <div style={{
                        height: "3px", borderRadius: "2px",
                        background: step > i + 1 ? accent : step === i + 1 ? accent : "#f3f4f6",
                        opacity: step > i + 1 ? 1 : step === i + 1 ? 0.5 : 1,
                      }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Modal Body ── */}
            <div style={{ padding: "24px 28px 28px" }}>

              {/* ═ STEP 1 ═ */}
              {step === 1 && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  <SectionTitle accent={accent}>Select Issue Categories</SectionTitle>
                  <p style={{ color: "#9ca3af", fontSize: "12px", marginBottom: "14px", marginTop: "-4px" }}>
                    Select all relevant categories — your submission will be routed to matching NGOs & authorities
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(186px,1fr))", gap: "8px", marginBottom: "22px" }}>
                    {CATEGORIES.map(cat => {
                      const sel = form.categories.includes(cat.id);
                      return (
                        <button key={cat.id} onClick={() => toggleCategory(cat.id)} style={{
                          background: sel ? accentBg : "#f9fafb",
                          border: `1.5px solid ${sel ? accent : "#e5e7eb"}`,
                          borderRadius: "10px", padding: "11px 12px",
                          cursor: "pointer", textAlign: "left", transition: "all 0.18s",
                        }}>
                          <div style={{ fontSize: "17px", marginBottom: "4px" }}>{cat.icon}</div>
                          <div style={{ color: sel ? accent : "#1f2937", fontSize: "12px", fontWeight: "600" }}>{cat.label}</div>
                          <div style={{ color: "#9ca3af", fontSize: "11px", marginTop: "2px", lineHeight: "1.4" }}>{cat.desc}</div>
                        </button>
                      );
                    })}
                  </div>

                  <SectionTitle accent={accent}>Urgency Level</SectionTitle>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "4px" }}>
                    {URGENCY.map(u => (
                      <button key={u} onClick={() => update("urgency", u)} style={{
                        background: form.urgency === u ? accentBg : "#f9fafb",
                        border: `1.5px solid ${form.urgency === u ? accent : "#e5e7eb"}`,
                        borderRadius: "8px", padding: "10px 12px",
                        cursor: "pointer", textAlign: "left", transition: "all 0.18s",
                        color: form.urgency === u ? accent : "#374151",
                        fontSize: "12px", fontWeight: "500",
                      }}>
                        {u}
                      </button>
                    ))}
                  </div>

                  {/* Complaint-specific */}
                  {mode === "complaint" && (
                    <div style={{ marginTop: "20px" }}>
                      <SectionTitle accent={accent}>Complaint Details</SectionTitle>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <Field label="Complaint Against" value={form.complaintAgainst} onChange={v => update("complaintAgainst", v)} placeholder="Person / Institution / Authority" />
                        <Field label="Your Relationship to Them" value={form.relationship} onChange={v => update("relationship", v)} placeholder="e.g. Family, Employer, Stranger" />
                        <Field label="Date of Incident" type="date" value={form.incidentDate} onChange={v => update("incidentDate", v)} />
                      </div>
                    </div>
                  )}

                  {/* Help-specific */}
                  {mode === "help" && (
                    <div style={{ marginTop: "20px" }}>
                      <SectionTitle accent={accent}>Type of Help Sought</SectionTitle>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(148px,1fr))", gap: "8px" }}>
                        {["NGO Intervention","Awareness Campaign","Legal Aid","Financial Support","Medical Help","Counselling","Skill Training","Government Scheme","Shelter & Safety","Other"].map(h => (
                          <button key={h} onClick={() => update("helpType", h)} style={{
                            background: form.helpType === h ? accentBg : "#f9fafb",
                            border: `1.5px solid ${form.helpType === h ? accent : "#e5e7eb"}`,
                            borderRadius: "8px", padding: "9px 10px",
                            cursor: "pointer", transition: "all 0.18s",
                            color: form.helpType === h ? accent : "#374151",
                            fontSize: "12px", fontWeight: "500",
                          }}>
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <NavButtons onNext={() => setStep(2)} canNext={canProceed1} accent={accent} />
                </div>
              )}

              {/* ═ STEP 2 ═ */}
              {step === 2 && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  {/* Anonymous toggle */}
                  <div style={{
                    background: "#f9fafb", border: "1px solid #e5e7eb",
                    borderRadius: "12px", padding: "14px 16px", marginBottom: "20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <div>
                      <div style={{ color: "#111827", fontSize: "13px", fontWeight: "600" }}>Submit Anonymously</div>
                      <div style={{ color: "#9ca3af", fontSize: "11px", marginTop: "2px" }}>Your identity will be completely protected</div>
                    </div>
                    <div onClick={() => update("anonymous", !form.anonymous)} style={{
                      width: "42px", height: "23px", borderRadius: "12px",
                      background: form.anonymous ? accent : "#d1d5db",
                      position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0,
                    }}>
                      <div style={{
                        width: "17px", height: "17px", borderRadius: "50%", background: "#fff",
                        position: "absolute", top: "3px",
                        left: form.anonymous ? "22px" : "3px",
                        transition: "left 0.2s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                      }} />
                    </div>
                  </div>

                  {!form.anonymous && (
                    <>
                      <SectionTitle accent={accent}>Personal Information</SectionTitle>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                        <Field label="Full Name *" value={form.name} onChange={v => update("name", v)} placeholder="Your full name" />
                        <Field label="Mobile Number *" value={form.mobile} onChange={v => update("mobile", v)} placeholder="+91 XXXXX XXXXX" />
                        <Field label="Email Address" value={form.email} onChange={v => update("email", v)} placeholder="your@email.com" />
                        <Field label="Age" value={form.age} onChange={v => update("age", v)} placeholder="Your age" />
                        <div style={{ gridColumn: "1/-1" }}>
                          <label style={{ color: "#6b7280", fontSize: "12px", fontWeight: "500", display: "block", marginBottom: "6px" }}>Gender</label>
                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {["Female", "Male", "Non-binary", "Prefer not to say"].map(g => (
                              <button key={g} onClick={() => update("gender", g)} style={{
                                flex: 1, minWidth: "110px", padding: "9px 8px",
                                borderRadius: "8px",
                                border: `1.5px solid ${form.gender === g ? accent : "#e5e7eb"}`,
                                background: form.gender === g ? accentBg : "#f9fafb",
                                color: form.gender === g ? accent : "#374151",
                                fontSize: "12px", fontWeight: "500", cursor: "pointer", transition: "all 0.18s",
                              }}>
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <NavButtons onBack={() => setStep(1)} onNext={() => setStep(3)} canNext={canProceed2} accent={accent} />
                </div>
              )}

              {/* ═ STEP 3 ═ */}
              {step === 3 && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  <SectionTitle accent={accent}>Location Details</SectionTitle>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ color: "#6b7280", fontSize: "12px", fontWeight: "500", display: "block", marginBottom: "5px" }}>State *</label>
                      <select value={form.state} onChange={e => update("state", e.target.value)} style={selectBase}>
                        <option value="">Select State</option>
                        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <Field label="District" value={form.district} onChange={v => update("district", v)} placeholder="Your district" />
                    <div style={{ gridColumn: "1/-1" }}>
                      <Field label="Village / Town / Locality" value={form.village} onChange={v => update("village", v)} placeholder="Specific area or landmark" />
                    </div>
                  </div>

                  <SectionTitle accent={accent}>
                    {mode === "complaint" ? "Describe the Complaint *" : "Describe the Situation / Need *"}
                  </SectionTitle>
                  <textarea
                    value={form.description}
                    onChange={e => update("description", e.target.value)}
                    placeholder={mode === "complaint"
                      ? "Describe the incident clearly — what happened, when, what action you expect from authorities or NGOs..."
                      : "Describe who needs help, the challenges they face, and what kind of support would make a real difference..."
                    }
                    rows={5}
                    style={{ ...inputBase, resize: "vertical", lineHeight: "1.65", marginBottom: "16px" }}
                  />

                  {/* Consent */}
                  <div
                    onClick={() => update("consent", !form.consent)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "12px",
                      padding: "13px 15px", borderRadius: "10px", cursor: "pointer",
                      background: form.consent ? accentBg : "#f9fafb",
                      border: `1.5px solid ${form.consent ? accentBorder : "#e5e7eb"}`,
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{
                      width: "17px", height: "17px", borderRadius: "4px", flexShrink: 0, marginTop: "1px",
                      background: form.consent ? accent : "#fff",
                      border: `2px solid ${form.consent ? accent : "#d1d5db"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}>
                      {form.consent && <span style={{ color: "#fff", fontSize: "10px", fontWeight: "800" }}>✓</span>}
                    </div>
                    <span style={{ color: "#6b7280", fontSize: "12px", lineHeight: "1.6" }}>
                      I confirm the information provided is accurate to the best of my knowledge. I consent to sharing this with relevant NGOs and local authorities for follow-up action. *
                    </span>
                  </div>

                  <NavButtons onBack={() => setStep(2)} onNext={generateMessage} canNext={canProceed3} accent={accent} isLast />
                </div>
              )}

              {/* ═ STEP 4: SUCCESS ═ */}
              {step === 4 && submitted && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "50%",
                      background: accentBg, border: `2px solid ${accentBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "28px", margin: "0 auto 14px",
                    }}>
                      {mode === "complaint" ? "🚨" : "✅"}
                    </div>
                    <h3 style={{ color: "#111827", fontSize: "19px", fontWeight: "700", margin: "0 0 6px" }}>
                      {mode === "complaint" ? "Complaint Successfully Registered" : "Help Request Successfully Submitted"}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <span style={{ color: "#9ca3af", fontSize: "13px" }}>Ticket ID:</span>
                      <span style={{
                        color: accent, fontWeight: "700", fontSize: "13px",
                        background: accentBg, border: `1px solid ${accentBorder}`,
                        borderRadius: "6px", padding: "2px 10px",
                      }}>{ticketId}</span>
                    </div>
                  </div>

                  {/* Forwarding panel */}
                  <div style={{
                    background: "#f9fafb", border: "1px solid #e5e7eb",
                    borderRadius: "12px", padding: "14px 16px", marginBottom: "20px",
                  }}>
                    <div style={{ color: "#9ca3af", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                      Will be forwarded to
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {(mode === "complaint"
                        ? ["Relevant NGOs", "District Magistrate", "Child Welfare Committee", "State Women Commission", "Local Police (if critical)"]
                        : ["Relevant NGOs", "District Authority", "State Social Welfare Dept", "Community Mobilisers", "Voluntary Organisations"]
                      ).map(a => (
                        <div key={a} style={{
                          background: accentBg, border: `1px solid ${accentBorder}`,
                          borderRadius: "100px", padding: "3px 12px",
                          color: accent, fontSize: "11px", fontWeight: "500",
                        }}>{a}</div>
                      ))}
                    </div>
                  </div>

                  {/* Generated message */}
                  <SectionTitle accent={accent}>Generated Report Message</SectionTitle>
                  <div style={{
                    background: "#f9fafb", border: "1px solid #e5e7eb",
                    borderRadius: "10px", padding: "14px 16px",
                    fontFamily: "'Courier New', monospace", fontSize: "11px",
                    color: "#374151", whiteSpace: "pre-wrap",
                    lineHeight: "1.75", maxHeight: "280px", overflowY: "auto",
                    marginBottom: "16px",
                  }}>
                    {generatedMessage}
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(generatedMessage);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      style={{
                        flex: 1, padding: "11px", borderRadius: "8px",
                        border: `1.5px solid ${accentBorder}`, background: accentBg,
                        color: accent, fontSize: "13px", fontWeight: "600", cursor: "pointer",
                      }}>
                      {copied ? "✓ Copied!" : "📋 Copy Message"}
                    </button>
                    <button onClick={close} style={{
                      flex: 1, padding: "11px", borderRadius: "8px", border: "none",
                      background: accent, color: "#fff",
                      fontSize: "13px", fontWeight: "700", cursor: "pointer",
                    }}>
                      Done ✓
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
