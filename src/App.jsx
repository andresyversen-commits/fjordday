import React from "react";

const SITE_BRIEF = {"companyName":"Fjordday","industry":null,"websiteUrl":"fjordday.net","matchTrigger":"Relatert selskap (Proff/eier)","snippet":null,"audit":{"deliverabilityScore":0,"domainAgeDays":584},"existingSite":{"url":"fjordday.net","logoUrl":null,"primaryColor":null,"fetchOk":false,"fetchNote":"fetch failed"},"aiBlueprint":{"title":"Fjordday - Oppdag Norges Naturskatter","tone":"naturlig-entusiastisk","ctaPrimary":"Utforsk Fjordene","sections":[{"id":"hero","name":"Hero","description":"Storslått bilde av norsk fjordlandskap med overlappende tekst 'Opplev fjordenes magi'. CTA for booking/utforsking."},{"id":"om-oss","name":"Om Fjordday","description":"Kort introduksjon om Fjordday, virksomhetens formål og hva de tilbyr besøkende i fjordområdene."},{"id":"opplevelser","name":"Våre Opplevelser","description":"Kategorisert visning av tilgjengelige aktiviteter/turer med bilder, kort beskrivelse og pris. Filtreringsmuligheter."},{"id":"destinasjoner","name":"Populære Destinasjoner","description":"Kart eller grid-visning av fjorder/områder med høydepunkter og særpreg for hver destinasjon."},{"id":"testimonials","name":"Gjestenes Opplevelser","description":"Karusell med kundevurderinger, bilder fra tidligere turer og sitater fra fornøyde gjester."},{"id":"baerekraft","name":"Bærekraftig Turisme","description":"Fjordday's tilnærming til miljøvennlig turisme, lokale partnerskap og bevaring av naturområdene."},{"id":"booking","name":"Bestill Din Opplevelse","description":"Integrert bookingsystem med kalender, gruppestørrelser og tilgjengelighetsoversikt."},{"id":"kontakt","name":"Kontakt Oss","description":"Kontaktskjema, kart til kontorlokalitet, telefonnummer og e-post. Også nødkontakt for pågående turer."}],"recommendations":["Implementer sesongbasert innhold som fremhever ulike aktiviteter basert på årstid","Inkluder værinformasjon-widget for destinasjonene","Legg til språkvalg for internasjonale turister","Integrer virtuell fjordopplevelse eller 360° visninger av populære steder","Fremhev sikkerhetsinformasjon og nødvendige forberedelser for aktivitetene"],"parseNote":null,"rawFallback":null},"uspLines":["Struktur og innhold tilpasses bedriftens profil og målgruppe.","Forslaget tar utgangspunkt i eksisterende nettside — logo og farger er forsøkt hentet automatisk.","Ekstra fokus på lead-signalet «Relatert selskap (Proff/eier)» fra kilden."],"generatedAt":"2026-04-14T06:25:43.686Z","layoutKey":null};

function anchorId(sec, idx) {
  var raw = sec && sec.id ? String(sec.id) : "s-" + idx;
  return "sec-" + raw.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
}

function withProtocol(url) {
  if (!url || typeof url !== "string") return "#";
  var u = url.trim();
  if (!u) return "#";
  return u.startsWith("http://") || u.startsWith("https://") ? u : "https://" + u;
}

export default function App() {
  var b = SITE_BRIEF;
  var accent = (b.existingSite && b.existingSite.primaryColor) || "#a67c52";
  var linen = "#f7f4ef";
  var ink = "#1e293b";
  var muted = "#64748b";
  var white = "#ffffff";
  var initial = (b.companyName || "?").charAt(0).toUpperCase();

  var bp = b.aiBlueprint;
  var hasStructured = bp && !bp.parseNote && Array.isArray(bp.sections) && bp.sections.length > 0;
  var sections = hasStructured
    ? bp.sections
    : [
        {
          id: "om",
          name: "Om oss",
          description:
            "Her presenterer vi bedriften — hvem dere er, hva dere står for, og hvorfor kunder bør velge dere. Tekst og bilder tilpasses i neste runde.",
        },
        {
          id: "tilbud",
          name: "Tjenester / produkter",
          description:
            "Oversikt over tilbud med tydelige beskrivelser, priser eller «fra-pris», og knapper videre til bestilling eller kontakt.",
        },
        {
          id: "kontakt",
          name: "Kontakt",
          description:
            "Kontaktskjema, telefon, e-post og eventuelt kart — slik at besøkende enkelt når dere.",
        },
      ];

  var heroTitle = bp && bp.title ? bp.title : b.companyName;
  var parts = [];
  if (b.industry) parts.push(b.industry);
  if (bp && bp.tone) parts.push(bp.tone);
  var heroSub =
    parts.length > 0
      ? parts.join(" · ")
      : "Førsteutkast til nettside — struktur og innhold tilpasses i samarbeid med dere.";
  var ctaLabel = bp && bp.ctaPrimary ? bp.ctaPrimary : "Kontakt oss";

  var navSections = sections.slice(0, 6);

  return (
    <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', background: linen, color: ink, minHeight: "100vh" }}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "0.85rem 1.5rem",
          background: "rgba(247, 244, 239, 0.94)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(166, 124, 82, 0.28)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {b.existingSite && b.existingSite.logoUrl ? (
            <img src={b.existingSite.logoUrl} alt="" style={{ height: 40, maxWidth: 160, objectFit: "contain" }} />
          ) : (
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: accent,
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {initial}
            </div>
          )}
          <span style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>{b.companyName}</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem 1.1rem", alignItems: "center", fontSize: "0.88rem" }}>
          <a href="#top" style={{ color: ink, textDecoration: "none", fontWeight: 600 }}>
            Hjem
          </a>
          {navSections.map(function (sec, idx) {
            return (
              <a key={sec.id || idx} href={"#" + anchorId(sec, idx)} style={{ color: muted, textDecoration: "none" }}>
                {sec.name}
              </a>
            );
          })}
          {b.existingSite && b.existingSite.url ? (
            <a href={withProtocol(b.existingSite.url)} style={{ color: accent, textDecoration: "none", fontWeight: 600 }} target="_blank" rel="noreferrer">
              Dagens nettside ↗
            </a>
          ) : null}
        </div>
      </nav>

      <header
        id="top"
        style={{
          padding: "3.25rem 1.5rem 3.75rem",
          textAlign: "center",
          background: "linear-gradient(165deg, " + linen + " 0%, rgba(166,124,82,0.14) 48%, " + linen + " 100%)",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.16em", color: muted }}>Nettsideutkast</p>
        <h1 style={{ margin: "0.65rem auto 0", maxWidth: 920, fontSize: "clamp(1.65rem, 4.2vw, 2.85rem)", fontWeight: 700, lineHeight: 1.12 }}>
          {heroTitle}
        </h1>
        <p style={{ margin: "1.15rem auto 0", maxWidth: 640, fontSize: "1.08rem", lineHeight: 1.62, color: muted }}>{heroSub}</p>
        <div style={{ marginTop: "1.85rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <a
            href="#kontakt-utkast"
            style={{
              display: "inline-block",
              padding: "0.82rem 1.65rem",
              background: accent,
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.98rem",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(166,124,82,0.32)",
            }}
          >
            {ctaLabel}
          </a>
          <a
            href={"#" + anchorId(sections[0], 0)}
            style={{
              display: "inline-block",
              padding: "0.82rem 1.2rem",
              color: ink,
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            Se sidestruktur
          </a>
        </div>
      </header>

      {bp && bp.parseNote ? (
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem 1.5rem" }}>
          <p
            style={{
              padding: "1rem 1.1rem",
              background: "#fff8e8",
              borderRadius: 10,
              border: "1px solid rgba(166,124,82,0.28)",
              color: ink,
              fontSize: "0.9rem",
              lineHeight: 1.55,
            }}
          >
            <strong>Merk:</strong> AI-planen kunne ikke leses fullt ut ({bp.parseNote}). Siden viser et standardutkast — kjør audit på nytt i Asyvers og generer forslaget på nytt for rikere innhold.
          </p>
        </div>
      ) : null}

      <main>
        {sections.map(function (sec, idx) {
          return (
            <section
              key={sec.id || "x" + idx}
              id={anchorId(sec, idx)}
              style={{
                padding: "2.85rem 1.5rem",
                background: idx % 2 === 0 ? white : linen,
                borderTop: idx > 0 ? "1px solid rgba(30,41,59,0.06)" : "none",
              }}
            >
              <div style={{ maxWidth: 960, margin: "0 auto" }}>
                <h2 style={{ margin: 0, fontSize: "1.48rem", fontWeight: 700, color: ink }}>{sec.name}</h2>
                <p style={{ margin: "0.95rem 0 0", fontSize: "1.04rem", lineHeight: 1.65, color: muted, maxWidth: 720 }}>{sec.description}</p>
                <div
                  style={{
                    marginTop: "1.65rem",
                    borderRadius: 12,
                    minHeight: 188,
                    background: "linear-gradient(135deg, rgba(166,124,82,0.12) 0%, rgba(30,41,59,0.05) 100%)",
                    border: "1px dashed rgba(166,124,82,0.32)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: muted,
                    fontSize: "0.88rem",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  Plassholder for bilde, video eller produktgrid
                </div>
              </div>
            </section>
          );
        })}

        {b.snippet ? (
          <section style={{ padding: "2.85rem 1.5rem", background: white }}>
            <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "1.12rem", lineHeight: 1.68, fontStyle: "italic", color: ink }}>«{b.snippet}»</p>
              {b.matchTrigger ? (
                <p style={{ margin: "1rem 0 0", fontSize: "0.84rem", color: muted }}>— Fra markedskilden ({b.matchTrigger})</p>
              ) : null}
            </div>
          </section>
        ) : null}

        {bp && bp.recommendations && bp.recommendations.length > 0 ? (
          <section style={{ padding: "2.85rem 1.5rem", background: linen }}>
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
              <h2 style={{ margin: 0, fontSize: "1.22rem", fontWeight: 700 }}>Videre muligheter</h2>
              <p style={{ margin: "0.45rem 0 1.35rem", color: muted, fontSize: "0.94rem" }}>
                Forslag til funksjoner og innhold dere kan ta med i neste versjon:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.7rem", gridTemplateColumns: "repeat(auto-fill, minmax(252px, 1fr))" }}>
                {bp.recommendations.map(function (rec, ri) {
                  return (
                    <li
                      key={ri}
                      style={{
                        padding: "0.95rem 1rem",
                        background: white,
                        borderRadius: 10,
                        border: "1px solid rgba(0,0,0,0.06)",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        color: ink,
                      }}
                    >
                      {rec}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ) : null}

        <section
          id="kontakt-utkast"
          style={{
            padding: "3.25rem 1.5rem",
            background: "linear-gradient(100deg, " + ink + " 0%, #2c3b52 100%)",
            color: "#f1f5f9",
          }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: "1.45rem", fontWeight: 700 }}>Kontakt</h2>
            <p style={{ margin: "0.95rem 0 0", opacity: 0.9, lineHeight: 1.62, fontSize: "0.98rem" }}>
              I den ferdige nettsiden legger vi inn ekte skjema, telefonlenker og integrasjoner — dette er et visuelt utkast til struktur og budskap.
            </p>
            <p style={{ margin: "1.65rem 0 0", fontSize: "1.75rem", fontWeight: 700, color: accent }}>{b.companyName}</p>
            {b.websiteUrl ? <p style={{ margin: "0.45rem 0 0", opacity: 0.88, fontSize: "0.95rem" }}>{b.websiteUrl}</p> : null}
          </div>
        </section>
      </main>

      <footer style={{ padding: "1.75rem 1.5rem 2.25rem", textAlign: "center", fontSize: "0.78rem", color: muted, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <p style={{ margin: 0 }}>Utkast {b.generatedAt.slice(0, 10)} · Tekst og seksjoner endres fritt før dere sier go.</p>
        <p style={{ margin: "0.45rem 0 0", opacity: 0.88 }}>
          Forslag levert av <span style={{ color: accent, fontWeight: 600 }}>Asyvers</span>
        </p>
      </footer>
    </div>
  );
}
