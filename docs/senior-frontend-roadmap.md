# Senior Frontend Engineer — Growth Roadmap

A concrete, prioritized list of work that will fill the gaps in your current portfolio and credibly position you for senior (and eventually staff) frontend engineer roles in international markets.

Based on the resume audit (`docs/resume-diagnosis.md`), your strongest signals today are: 8+ years shipping production web apps, FinTech depth (crypto exchange, forex, wallet), micro-frontend + design-system architecture at Coinlocally, multi-product cross-architecture at Hoopoe, recent end-to-end full-stack delivery at MS Cosmetic. Your weakest signals are: no public artifacts (OSS, talks, writing), no certifications, no quantified performance/scale numbers from your roles, and no public-facing engineering voice. This roadmap targets those gaps.

---

## 1. Build a public artifact trail (highest leverage)

Recruiters and hiring managers look for verifiable signal outside the resume. Right now your `achievements` section is empty. Three artifacts in the next 90 days move the needle the most.

### 1.1 Ship & maintain 1–2 public OSS projects
- This portfolio-builder repo itself counts. Polish the README, add screenshots, add a deployed live URL, write a short "why I built this" intro. Pin it on GitHub.
- Pick one focused library you'd actually use day-to-day — examples that align with your background:
  - A typed React hook library for WebSocket reconnection / heartbeat (you have crypto exchange experience).
  - A tiny Zod ↔ form-state bridge for a specific UI library you use.
  - A Nx generator/preset for one of the architectures you've shipped (design system + Storybook + shared lib).
- Aim for: ≥50 GitHub stars on at least one repo within 6 months. Stars are weak signal in isolation but presence of a maintained repo is strong.

### 1.2 Write 3–5 technical posts
- Topics where you have unique, hard-won knowledge that few mid-level engineers can write:
  - "Splitting a legacy crypto exchange into an Nx micro-frontend monorepo — what worked, what didn't"
  - "Cross-product design systems for a 4-product wellness ecosystem (Hoopoe case study)"
  - "Bidirectional waveform ↔ transcript sync — implementing it in the browser" (your AI Podcast work)
  - "FFmpeg.wasm for client-side video frame splitting — when it makes sense"
  - "React Query + Zustand: dividing server and client state without overlap"
- Publish on a personal blog (use `soheilhasanjani.dev`) and cross-post to dev.to and Medium for reach. Link from LinkedIn.

### 1.3 Speak once
- A meetup talk (in-person or virtual) is faster than a conference submission. Any 20-minute talk to ≥20 people counts as signal.
- Topics from §1.2 translate directly. The video recording is the artifact you list under achievements.

---

## 2. Quantify what you've already done (zero-effort, high-impact)

You did the work. The resume just doesn't show the numbers. As you do new work, instrument from day one:

- Lighthouse before/after on perf-critical pages.
- Bundle size with `next-bundle-analyzer` or `webpack-bundle-analyzer` — record the delta when you cut.
- TTI / LCP / INP from CrUX or a real-user-monitoring tool (Vercel Analytics, Sentry, Datadog RUM).
- Build time before/after Nx migrations or Turbopack moves.
- WebSocket message rate, dropped-message count, p99 latency on financial UIs.

The first metric you instrument on a current project goes into the resume the same week. Don't accumulate then dump.

---

## 3. Deepen 1–2 specializations (vs. broaden 7)

Your domain list (`domains` in en.ts) reads as 7 areas, which dilutes seniority. Pick the two deepest:

### 3.1 FinTech / real-time financial UI (clear strength)
Build a public demo or case study that goes deeper than employer NDAs allow:
- Real-time order book with virtualization for 10k+ rows.
- Chart performance with progressive loading and decimation.
- Reconnection state machines for trading WebSockets.

This becomes a portfolio item *and* a talk *and* a blog post — one effort, three artifacts.

### 3.2 Multi-product frontend architecture / design systems (Coinlocally + Hoopoe strength)
- Open-source a stripped-down version of the Nx + Storybook + shared-library template you've built privately. Even a starter is valuable.
- Write a case study comparing your two real-world architectures (Hoopoe shared-library vs. Coinlocally micro-frontends): when each is correct.

Three artifacts in this lane (template + case study + lightning talk) make you a credible "frontend architect" candidate, not just a senior engineer.

---

## 4. Technical depth areas where you're currently invisible

The resume shows breadth but not depth in the following areas that staff-level interviewers probe. Pick 1–2 and build deliberate proof.

### 4.1 Web performance engineering
- Read *Core Web Vitals* docs end-to-end (web.dev), then audit and improve one real site.
- Demonstrate INP ≤ 200ms on a complex interactive page in your portfolio.
- Tools to be fluent with: Chrome DevTools Performance/Memory tabs, React Profiler, Lighthouse CI, WebPageTest, `web-vitals` library.
- Artifact: "Cutting INP from 380ms to 120ms on the Coinlocally order book" blog post.

### 4.2 Accessibility (a11y)
- Largely missing from the resume. Read the WCAG 2.2 AA quick reference; ship one component library or feature that passes axe + keyboard-nav audit publicly.
- Especially valuable for healthcare (Hoopoe) and government/banking targets.
- Artifact: a11y audit thread or post for one shipped product.

### 4.3 Build tooling / module systems
- Already touched Nx, Webpack, Vite, Gulp, Grunt. The gap: Rspack, Turbopack, esbuild internals, ESM-vs-CJS migration, custom Vite plugins.
- Artifact: one production migration write-up (e.g., "Migrating a Vite admin panel to Rspack — results").

### 4.4 Testing rigor
- The resume lists no testing framework. For senior roles, expect this to come up.
- Build muscle on: Vitest + Testing Library, Playwright (component + e2e), Storybook interaction tests, MSW for network mocks.
- Add tests to the portfolio-builder repo and to MS Cosmetic. They become a directly demonstrable artifact.

---

## 5. Full-stack credibility (you already have a start)

You positioned full-stack as "comfortable extending into backend" — keep that framing, but make the proof stronger:

- MS Cosmetic is your strongest evidence. Add real metrics to its bullets: uptime, orders processed, average response time.
- Build one more end-to-end project, ideally with: PostgreSQL + Prisma + NestJS + a webhook / background-job integration (BullMQ, Inngest, or Trigger.dev). Real production deploys (Railway, Fly, or AWS).
- Add basic observability: structured logs, error tracking (Sentry), and a `/health` endpoint. These small details signal "ships production systems," not "side-project hobbyist."

---

## 6. Cloud & infra exposure

For international remote roles, baseline cloud literacy is expected even on frontend tracks.

- AWS: at minimum be conversant with S3, CloudFront, IAM, Lambda, and one of (RDS / DynamoDB). The AWS Certified Cloud Practitioner is a low-effort credential if you want a recruiter-visible signal. AWS Solutions Architect — Associate is the next step.
- Cloudflare Workers / R2 / D1 — increasingly relevant for modern frontend deploys; cheap to learn via a side project.
- Vercel — you use it; learn the edge runtime, ISR, and on-demand revalidation deeply enough to talk about them in interviews.

---

## 7. AI integration (current market priority)

You already have AI exposure (AI Podcast project, Copilot in workflow). To turn this into a recruiter-visible signal:

- Ship one production-ish feature using the Anthropic or OpenAI SDK with prompt caching, streaming, tool use, and at least one safety check (output validation / rate limiting).
- Build a small Claude Agent SDK or LangGraph-style agent for a real use case (e.g., a portfolio-data validator that flags resume issues).
- Write the corresponding blog post / case study. AI feature delivery is the single most asked-for senior FE capability in the 2026 market.

---

## 8. Engineering leadership signals (Staff track)

You already lead architecturally without the title (per the Coinlocally/Hoopoe framing). To make this visible:

- Mentor publicly: answer Stack Overflow questions in your domain consistently (≥1/week); become a reviewer on at least one OSS repo.
- Document an architecture decision you made at a previous job as a public ADR (Architecture Decision Record) — sanitize details. Hiring managers love seeing real ADRs.
- Run one internal RFC process at your next job and reference it on the resume ("Authored 3 RFCs adopted across the team").

---

## 9. Public profile hygiene

These are quick wins that raise your conversion rate from first-contact to interview:

- LinkedIn — set the headline and About section to match the resume verbatim. Post 1–2 short technical takes per month (a paragraph + a takeaway is enough).
- GitHub — pin 4–6 repos. Add a profile README with your positioning. Make sure the green squares aren't all empty for the last 90 days.
- soheilhasanjani.dev — host this portfolio with a clear /resume PDF link and a /writing index.
- Personal Twitter/X or Bluesky — optional, but if you want US/EU recruiter inbound, posting technical takes there is the single highest-leverage discovery channel.

---

## 10. Domain-specific positioning

Pick the headline domain for your next role and lean in:

- **FinTech**: Read *Trading Systems and Methods* basics, follow exchange architecture writeups from Binance / Coinbase eng blogs, build the order-book demo from §3.1.
- **Healthcare / EMR**: Learn HL7 FHIR fundamentals (relevant after Hoopoe). One blog post on "Frontend considerations for FHIR-compliant patient records" instantly differentiates you.
- **DevTools / Infrastructure-adjacent**: Contribute small fixes to Vite / Next.js / Storybook / Nx. Even one merged PR is a recruiter conversation starter.

---

## Suggested 6-month plan

Treat this as a forcing function. Concrete, dated, measurable.

| Month | Focus |
|---|---|
| 1 | Polish portfolio-builder README + deploy live. Write blog post #1 (Nx migration). Set up personal blog at soheilhasanjani.dev. |
| 2 | Ship 1 OSS micro-library. Add Vitest + Playwright to portfolio-builder and MS Cosmetic. Instrument Lighthouse + bundle metrics. |
| 3 | Build the public order-book / WebSocket demo (§3.1). Blog post #2. Apply to first batch of senior FE roles using updated resume. |
| 4 | Pass AWS Cloud Practitioner OR ship one AI-integrated feature (§7) — whichever serves applications better. Blog post #3. |
| 5 | Deliver one meetup talk (recorded). Write the case-study comparing Hoopoe vs Coinlocally architectures. |
| 6 | Review: count GitHub stars, post engagement, recruiter inbounds. Iterate on the weak axes. |

If you can't do everything, do §1.1 (one OSS repo), §1.2 (three blog posts), §2 (instrument metrics on current work), and §7 (one AI feature). Those four alone move you from "senior FE with private impact" to "senior FE with public proof."
