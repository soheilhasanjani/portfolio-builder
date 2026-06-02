# Resume Diagnosis — Soheil Hasanjani Mir

Source reviewed: `app/data/en.ts` (the live portfolio/resume data). Below is a recruiter-grade audit.

---

## 1. Weaknesses & Missing Information

### [HIGH] No quantified achievements anywhere
**Explanation:** Across 8 companies and ~25 projects, there is not a single number — no users served, latency improvements, bundle size reduced, conversion uplift, team size, revenue impact, or load-time wins. For a senior candidate, this is the #1 reason recruiters downgrade to "mid-level."
**Fix:** Add at least 1 metric per role. Even rough estimates: "reduced bundle size ~35%", "supported 50k+ MAU", "led team of 4", "cut TTI from 4.2s → 1.8s", "shipped 12 features/quarter".

### [HIGH] `achievements: []` is empty
**Explanation:** Schema reserves a top-level achievements slot — it's blank. Senior engineers are expected to have *some* signal: certifications, conference talks, OSS contributions, internal awards, hackathon wins, published articles.
**Fix:** Populate with anything credible — GitHub stars on personal projects, blog posts, internal "engineer of the quarter" type recognitions, contributions to libraries you use.

### [HIGH] English proficiency: `reading_and_basic_communication`
**Explanation:** For a candidate targeting remote roles in UAE/Armenia/Canada (where you've already worked remotely!), self-declaring "basic communication" is a recruiter red flag and likely auto-filters you out of international roles. Your Coinlocally + Elegant Hoopoe + Local Influencers history proves you communicate in English professionally.
**Fix:** Upgrade to `"professional working proficiency"` or `"fluent"`. The work history already substantiates it.

### [HIGH] Status: `OpenToWork` with a `2026-01` end date for current role
**Explanation:** Elegant Hoopoe end date is set to `2026-01` — today is `2026-06-02`. Either you've been unemployed for 5 months (gap unexplained) or the data is stale.
**Fix:** Update the end date or set it to `present`. If there's a genuine gap, address it in summary (sabbatical, contracting, upskilling).

### [MEDIUM] Phone number is Iran-format only
**Explanation:** `09390286828` — no country code (+98). International recruiters won't dial it; ATS may also fail to parse as a phone.
**Fix:** Use `+98 939 028 6828`.

### [MEDIUM] No GitHub/portfolio activity signal
**Explanation:** You list `github.com/soheilhasanjani` and `soheilhasanjani.dev` but nothing in the resume points to a specific repo, OSS lib, or featured project that a recruiter can click and verify in 30s.
**Fix:** Add 1–2 "featured projects" with live URLs (the `projects.featured` array is empty). Highlight this portfolio-builder repo itself — it's good signal.

### [MEDIUM] No location flexibility / visa stance
**Explanation:** Recruiters in EU/UAE/Canada need to know: remote-only? Open to relocation? Visa sponsorship needed?
**Fix:** Add a line in the summary or a `work_authorization` field: "Open to remote globally / relocation to UAE / EU".

### [LOW] Telegram contact above LinkedIn
**Explanation:** For Western recruiters, Telegram is unusual as a primary contact and may be perceived as unprofessional in some markets.
**Fix:** Keep Telegram, but ensure LinkedIn is rendered higher in the contact list.

---

## 2. ATS Issues

### [HIGH] Resume lives in a TypeScript file rendered as a Next.js site
**Explanation:** Most ATS systems parse PDF/DOCX. A live portfolio site is great for humans, but if you submit `soheilhasanjani.dev` as your resume, ATS will return zero parseable text. Headlines like "Senior Frontend Engineer | Backend Developer (NestJS)" with the `|` pipe also confuse some ATS parsers.
**Fix:** Generate a clean single-column PDF export. Avoid icons-as-images for contact info; keep them as plain text (`Email: ...`, `Phone: ...`).

### [HIGH] Headline uses `|` separator + parentheses
**Explanation:** ATS keyword scoring works better with comma- or bullet-separated keywords. `Senior Frontend Engineer | Backend Developer (NestJS)` may match "Frontend Engineer" but miss "Backend Developer" depending on the parser.
**Fix:** `Senior Frontend Engineer, Backend Developer (NestJS, Prisma)` — and add a Skills section with discrete keywords.

### [HIGH] No dedicated "Skills" section with raw keywords
**Explanation:** Technologies live inside per-project `stacks[]` arrays — invisible to ATS keyword matching once exported to PDF (they likely render as badges/images). ATS scores you on plain-text presence of "React", "TypeScript", "Next.js", "GraphQL", etc.
**Fix:** Add an explicit "Technical Skills" section grouped: *Languages*, *Frontend*, *Backend*, *State Management*, *Tooling*, *Cloud/DevOps*. Plain text, comma-separated.

### [MEDIUM] Job titles inconsistent
**Explanation:** "Senior Frontend Engineer" (Elegant Hoopoe, Coinlocally) vs "Senior Frontend Developer (Frontend Lead)" (ICCS, Saminray). ATS title-matching prefers consistency.
**Fix:** Standardize on "Senior Frontend Engineer" or "Frontend Lead" — pick one schema and stick to it. The parenthetical "(Frontend Lead)" is a leadership signal but should also be the primary title for lead roles.

### [MEDIUM] Company name "Innovation Center of Cognitive Sciences and Technologies, IUST" too long
**Explanation:** May truncate in ATS columns; obscures that you worked at a recognized university R&D lab.
**Fix:** Use "IUST Cognitive Sciences Innovation Center (Iran University of Science & Technology)".

### [LOW] Date format `2025-06` may render oddly in PDF
**Explanation:** Recruiters scan-read "Jun 2025 – Jan 2026". ISO strings are fine for ATS but cold for humans.
**Fix:** Render as `Jun 2025 – Present` in the exported view.

---

## 3. Career Progression Issues

### [HIGH] Lead-then-Senior-Engineer drop is unexplained
**Explanation:** Career arc reads: Frontend Dev → **Frontend Lead (2y at ICCS) → Frontend Lead (1.5y at Saminray)** → back to **Senior Frontend Engineer** (no "Lead") at Coinlocally and Elegant Hoopoe. A recruiter sees a regression from leadership.
**Fix:** Either (a) re-title Coinlocally/Hoopoe roles to reflect leadership ("Senior Frontend Engineer, Tech Lead") if you led any work, or (b) add one bullet at each role explaining the deliberate move ("Chose IC-heavy role to ship X" / "Led architecture decisions despite IC title").

### [HIGH] Two short, overlapping recent stints
**Explanation:** Coinlocally (7 months: Nov 2024 – Jun 2025) → Elegant Hoopoe (7 months: Jun 2025 – Jan 2026). Two sub-1-year recent stints back-to-back triggers "job hopper" filter, especially after 2y+ stints earlier in your career.
**Fix:** Add a one-line context for each ("contract role", "company restructure", "completed scoped engagement"). Otherwise expect to be asked in every interview.

### [MEDIUM] Freelance spans 2020 → present, overlapping every full-time role
**Explanation:** A 6-year freelance band running concurrently with 4 full-time jobs raises "was this allowed?" / "was this real?" questions and confuses chronology.
**Fix:** Either (a) move Freelance to a separate "Side Projects" section, (b) clarify it as "after-hours/side contracts", or (c) collapse it to specific dated engagements.

### [LOW] Local Influencers (Dec 2020 – Sep 2021) overlaps Ertebat Sabz (Mar 2020 – May 2021)
**Explanation:** 5-month overlap between two full-time roles. Looks like either parallel employment (problematic for some employers) or a data error.
**Fix:** Clarify dates. If one was part-time, mark it `employment_type: PartTime`.

---

## 4. Weak Bullet Points

### [HIGH] Generic "shaped/served/drove" verbs with no outcomes
Examples:
- "Shaped cross-functional architecture decisions with product, design, and backend teams" — *what decisions? what impact?*
- "Drove performance optimization across patient-facing and internal clinical tools" — *by how much? on what metric?*
- "Served as Frontend Lead, coordinating development across multiple concurrent product teams" — *how many teams? how many engineers?*

**Fix:** Use the **Action → Tech → Outcome** formula. Example rewrite:
> "Led a 4-engineer frontend team across 4 product lines; introduced a shared component library that cut new-feature delivery time by ~30% and eliminated duplicate auth/layout code across products."

### [HIGH] "First X" framing reads junior
- "First international, fully remote engineering role"
- "Built the company's first React application"
- "First end-to-end full-stack ownership"

**Explanation:** These read as *your* milestones, not *business* outcomes. Recruiters care what the company got.
**Fix:** Re-frame: "Established React as the company's primary frontend stack, replacing legacy jQuery codebases" instead of "Built the company's first React application".

### [MEDIUM] Vague tooling bullets
- "Integrated AI-assisted development workflows (GitHub Copilot) to accelerate feature delivery cycles" — every engineer uses Copilot now; this is noise.
- "Collaborated with DevOps to Dockerize frontend apps" — collaborating is table stakes.

**Fix:** Remove or replace with concrete wins. Drop the Copilot line entirely.

### [MEDIUM] Repetitive opener verbs
Many bullets start with "Built", "Delivered", "Implemented". Recruiters skim — variety helps.
**Fix:** Mix in: *Architected, Led, Shipped, Reduced, Migrated, Mentored, Owned, Scaled, Standardized, Eliminated*.

---

## 5. Missing Achievements & Metrics

| Where | Add a Metric Like |
|---|---|
| Elegant Hoopoe — shared component library | "% code reuse across 4 products, dev-time savings" |
| Coinlocally — micro-frontend migration | "Build time before/after, deployment frequency uplift, # of independently deployable apps" |
| Coinlocally — design system | "# components shipped, % UI coverage" |
| ICCS — dashboards | "# of concurrent users, chart render time, dataset size (rows/MB)" |
| Saminray — first crypto exchange | "Go-live users, WS messages/sec handled, SEO traffic ranking" |
| Local Influencers — rebuild | "Lighthouse score before/after, TTI, # of features re-shipped" |
| Abar Rayane — Gulp/Grunt pipelines | "% bundle reduction, # of client sites maintained" |
| MS Cosmetic — full-stack solo | "uptime, # SKUs, monthly orders processed" |

**Also missing as sections:**
- Open-source contributions
- Conference talks / meetups / writing
- Certifications (AWS, GCP, even Frontend Masters — anything credentialed)
- Mentorship / interviewing / hiring activities (you led teams — surface this)

---

## 6. Sections That Could Hurt You

### [HIGH] Empty `projects.featured: []` + empty `achievements: []`
The schema *advertises* these sections; rendering with them empty actively communicates "nothing to show here." Worse than not having the section at all.
**Fix:** Populate or remove from render.

### [HIGH] "Limited but real backend experience" in summary
**Explanation:** Self-deprecation in the opening paragraph. The summary is the 6-second first impression. "Limited" is the only word a tired recruiter remembers.
**Fix:** Reframe positively: *"Frontend specialist with hands-on full-stack delivery experience using NestJS, Prisma, and Docker (most recently shipping a production e-commerce backend solo)."*

### [MEDIUM] 25+ project entries
**Explanation:** Senior resumes should curate to ~10–12 strongest projects. Including "Sazeh For You — Landing page for an industrial-products manufacturer" alongside a crypto exchange dilutes signal.
**Fix:** Move ≤2017–2020 small landing pages into a collapsed "Earlier Work" section. Keep top 2–3 projects per company.

### [MEDIUM] Domain list reads like keyword stuffing
Seven distinct domains (FinTech, E-commerce, Enterprise, Education, Healthcare, Social Media Analytics, Influencer Marketing). For a senior engineer, focused depth in 2–3 domains is more credible than breadth in 7.
**Fix:** Lead with the 2–3 strongest (FinTech + Healthcare + Enterprise) and mention others in passing.

### [LOW] `headline` includes both "Senior Frontend Engineer" and "Backend Developer (NestJS)"
**Explanation:** Diluted positioning. You'll be filtered into neither pool cleanly.
**Fix:** Pick the role you're optimizing for and lead with it. Backend can come second or in summary.

---

## Final Scores

| Score | Value | Reasoning |
|---|---|---|
| **ATS Score** | **62 / 100** | Strong keyword density inside `stacks[]`, but those render as badges/images in the live site. No flat Skills section. Date inconsistencies, missing country code, weak title standardization. Once exported to a properly-formatted PDF with a Skills block, this jumps to ~80. |
| **Seniority Score** | **68 / 100** | The *work* shows senior (micro-frontends, design systems, R&D lead, full-stack ownership), but the *writing* underrepresents it: zero metrics, lead-to-IC regression unexplained, two short recent stints, self-described "limited" backend, "basic" English. The content is senior; the framing reads mid-level. |

---

## Top 10 Improvements (Ranked by Impact)

1. **Quantify every role** — add at least 1 metric per company (users, perf %, team size, $ impact). Single biggest credibility lever.
2. **Rewrite the summary** — remove "limited"; lead with concrete positioning, ~8 years senior frontend + production full-stack delivery.
3. **Fix the Elegant Hoopoe end date** — either `present` or explain the 5-month gap; a phantom unemployment gap is a silent killer.
4. **Add a flat "Technical Skills" section** — plain-text, comma-separated, grouped by category. Critical for ATS parsing once exported.
5. **Upgrade English proficiency** — your remote international history already proves it; "basic communication" is filtering you out of jobs you'd get the interview for.
6. **Address the lead → IC regression** — re-title or explicitly explain in bullets that you continued leading at Coinlocally/Hoopoe.
7. **Curate down to 10–12 projects** — collapse 2018–2020 landing pages into "Earlier Work"; keep 2–3 flagship projects per recent role.
8. **Populate `achievements`** — OSS, talks, certs, internal recognition, this portfolio-builder repo itself. Empty sections actively hurt.
9. **Standardize titles and add `+98` country code** — small ATS/recruiter-hygiene wins with zero downside.
10. **Replace generic verbs** ("drove", "shaped", "served") **with outcome verbs** ("reduced", "shipped", "migrated", "scaled") and pair each with a number or a concrete artifact.
