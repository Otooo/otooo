(function () {
    "use strict";

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* =========================
       I18N (PT is the markup default, EN lives here)
    ========================= */

    const EN = {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Stack",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",
        "cv": "Download CV",
        "hero.badge": "Senior Full Stack Engineer • Tech Lead",
        "hero.hello": "Hi, I'm",
        "hero.text": "Senior Full Stack Engineer and Tech Lead. I build production web systems with Laravel, React/Next.js and Node.js, owning the architecture from code to infrastructure.",
        "hero.cta1": "See experience",
        "hero.cta2": "Get in touch",
        "stat.years": "years of experience",
        "stat.team": "developers on the team I lead",
        "stat.awards": "1st places in competitions",
        "about.tag": "About me",
        "about.title": "My journey",
        "about.text": "I'm a <strong>Senior Full Stack Engineer</strong> with <strong>8+ years of experience</strong> building production web systems. I'm currently <strong>Tech Lead</strong> at Join Tecnologia, where I lead a team of 5 developers and own technical planning, code review and <strong>infrastructure architecture</strong>.<br><br>My current focus is <strong>PHP (Laravel)</strong>, <strong>TypeScript (React, Next.js)</strong> and using <strong>AI</strong> in software development. Beyond the code, I take part in the system and data architecture: <strong>Docker</strong> containers, automated deployment with <strong>CI/CD</strong>, storage on <strong>Google Cloud Storage</strong> and <strong>MySQL</strong> and <strong>MongoDB</strong> databases. I also have experience with Vue.js, Angular, Node.js, Go, Java and AWS.<br><br>I hold an <strong>M.Sc. in Computer Science</strong> and a B.Eng. in Computer Engineering from UEFS. Day to day, I use <strong>AI agents and LLMs</strong> to speed up planning, implementation and code review.",
        "focus.label": "current focus",
        "card.ai": "AI",
        "card.ai.text": "Agents · LLMs",
        "tldr.title": "recruiter-summary.md",
        "tldr.1": "<strong>Tech Lead</strong> of a 5-developer team",
        "tldr.2": "<strong>8+ years</strong> building production web systems",
        "tldr.3": "Focused on <strong>Laravel</strong> and <strong>React/Next.js</strong>, with AI in the development workflow",
        "tldr.4": "Architecture and infrastructure: <strong>Docker</strong>, <strong>GCP/GCS</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong> and <strong>CI/CD</strong>",
        "tldr.5": "<strong>M.Sc.</strong> in Computer Science (UEFS)",
        "tldr.6": "Portuguese (native) · English (intermediate)",
        "tldr.copy": "Copy email",
        "arch.title": "architecture.yml",
        "arch.status": "in production",
        "arch.cicd": "Automated CI/CD",
        "arch.step.tests": "tests",
        "arch.front": "Front-end",
        "arch.api": "API & services",
        "arch.mysql": "relational",
        "arch.mongo": "documents",
        "arch.gcs": "files",
        "arch.caption": "A simplified view of the kind of architecture I help design and maintain.",
        "skills.title": "Technologies",
        "skills.text": "Tools I use to build, scale and ship systems from the back-end to the cloud.",
        "exp.tag": "Experience",
        "exp.title": "Where I've worked",
        "exp.text": "From trainee to Tech Lead: technical leadership, architecture and product delivery.",
        "exp.1.period": "Apr 2025 – Present",
        "exp.1.a": "Lead a team of 5 developers, owning technical planning, code review and infrastructure architecture for the platform.",
        "exp.1.b": "Design and review infrastructure and system architecture decisions.",
        "exp.1.c": "Develop new features, improvements and fixes with Laravel, React/Next.js, Node.js and Python.",
        "exp.2.role": "Senior Full Stack Developer",
        "exp.2.period": "Apr 2025 – Jan 2026",
        "exp.2.a": "Planned and led the refactoring of a core system module, backed by automated tests.",
        "exp.2.b": "Delivered improvements and fixes across the platform with Angular and Laravel.",
        "exp.3.role": "Full Stack Developer",
        "exp.3.period": "Jun 2021 – Apr 2025",
        "exp.3.a": "Built and maintained front-end features with Vue.js and JavaScript.",
        "exp.3.b": "Developed back-end services in Go and Java.",
        "exp.3.c": "Designed and built serverless APIs with AWS Lambda and API Gateway.",
        "exp.4.period": "Aug 2022 – Sep 2023",
        "exp.4.a": "Developed front-end features with React and TypeScript.",
        "exp.4.b": "Built back-end services with Laravel and Node.js.",
        "exp.4.c": "Maintained relational and NoSQL databases.",
        "exp.5.role": "Development Manager",
        "exp.5.period": "Oct 2019 – Jun 2021",
        "exp.5.a": "Managed the development project and led the engineering team.",
        "exp.5.b": "Led the adoption of automated testing and the deployment process.",
        "exp.5.c": "Developed and maintained the system and its database with Laravel and Vue.js.",
        "exp.6.period": "Mar 2019 – Oct 2019",
        "exp.6.a": "Developed and maintained the payment system with Laravel and Vue.js.",
        "exp.6.b": "Maintained part of the automation system in Python.",
        "exp.earlier": "Earlier roles",
        "exp.earlier.a": "<strong>SoftwareDATA</strong> — Systems Analyst · Laravel, Ionic, databases · Jan 2018 – Apr 2019",
        "exp.earlier.b": "<strong>3Soft Sistemas</strong> — Development Trainee · Delphi, Ionic, Angular · Aug 2016 – Jul 2017",
        "edu.tag": "Education",
        "edu.title": "Education & Awards",
        "edu.academic": "education",
        "edu.1.title": "M.Sc. in Computer Science",
        "edu.1.text": "Research on association rule mining techniques.",
        "edu.2.title": "B.Eng. in Computer Engineering",
        "edu.2.text": "Undergraduate research fellow (PIBIC/CNPq) on UAVs for inspection and monitoring; built a simulation module for performance measurement in wireless sensor networks.",
        "edu.lang": "Languages",
        "edu.lang.text": "Portuguese (native) · English (intermediate, working knowledge)",
        "edu.awards": "awards",
        "award.first": "1st",
        "award.1": "Agro Feira de Santana Hackathon",
        "award.2": "StartupDay Feira Hackathon",
        "award.3": "PROGBASE Programming Marathon",
        "contact.tag": "Contact",
        "contact.title": "Let's talk",
        "contact.text": "I'm open to opportunities, projects and professional connections.",
        "country": "Brazil",
        "footer": "Built by"
    };

    const STRINGS = {
        pt: {
            roles: ["Tech Lead", "Full Stack Sênior", "Laravel + React/Next.js", "Arquitetura de Software"],
            title: "Oto Lopes | Desenvolvedor Full Stack Sênior",
            cv: "docs/OtoLopes_Curriculo.pdf",
            copied: "E-mail copiado!",
            backToTop: "Voltar ao topo"
        },
        en: {
            roles: ["Tech Lead", "Senior Full Stack Engineer", "Laravel + React/Next.js", "Software Architecture"],
            title: "Oto Lopes | Senior Full Stack Engineer",
            cv: "docs/OtoLopes_Resume.pdf",
            copied: "Email copied!",
            backToTop: "Back to top"
        }
    };

    const STORAGE_KEY = "oto-lang";
    let lang = "pt";

    function storedLang() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function applyLang(next) {
        lang = next;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            if (el.dataset.pt === undefined) el.dataset.pt = el.innerHTML;
            const key = el.dataset.i18n;
            el.innerHTML = lang === "en" && EN[key] ? EN[key] : el.dataset.pt;
        });

        document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
        document.title = STRINGS[lang].title;

        document.querySelectorAll("[data-lang-label]").forEach((el) => {
            const active = el.dataset.langLabel === lang;
            const tag = active ? "B" : "SPAN";
            if (el.tagName !== tag) {
                const swap = document.createElement(tag);
                swap.dataset.langLabel = el.dataset.langLabel;
                swap.textContent = el.textContent;
                el.replaceWith(swap);
            }
        });

        document.querySelectorAll("#downloadCv, #tldrCv").forEach((cv) => cv.setAttribute("href", STRINGS[lang].cv));

        const backToTop = document.getElementById("backToTop");
        if (backToTop) backToTop.setAttribute("aria-label", STRINGS[lang].backToTop);

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* storage unavailable */ }
    }

    function initI18n() {
        const saved = storedLang();
        const browserPt = (navigator.language || "pt").toLowerCase().startsWith("pt");
        const initial = saved || (browserPt ? "pt" : "en");

        if (initial !== "pt") applyLang(initial);

        const toggle = document.getElementById("langToggle");
        if (toggle) {
            toggle.addEventListener("click", () => applyLang(lang === "pt" ? "en" : "pt"));
        }
    }

    /* =========================
       NAV
    ========================= */

    function initNav() {
        const menuToggle = document.getElementById("menuToggle");
        const nav = document.getElementById("nav");
        if (!menuToggle || !nav) return;

        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    function initNavActive() {
        const sections = document.querySelectorAll("main section[id]");
        const links = document.querySelectorAll('.nav a[href^="#"]');
        if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    links.forEach((link) => link.classList.remove("active"));
                    const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
                    if (active) active.classList.add("active");
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
    }

    /* =========================
       SCROLL REVEAL
    ========================= */

    function initReveal() {
        const reveals = document.querySelectorAll(".reveal");
        if (!reveals.length) return;

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            reveals.forEach((el) => el.classList.add("active"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
        );

        reveals.forEach((el) => observer.observe(el));
    }

    /* =========================
       TYPEWRITER
    ========================= */

    function initTypewriter() {
        const target = document.getElementById("typedRole");
        if (!target) return;

        if (prefersReducedMotion) {
            target.textContent = STRINGS[lang].roles[0];
            return;
        }

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function tick() {
            const roles = STRINGS[lang].roles;
            const current = roles[roleIndex % roles.length];

            if (!deleting) {
                charIndex++;
                target.textContent = current.slice(0, charIndex);
                if (charIndex >= current.length) {
                    deleting = true;
                    setTimeout(tick, 1600);
                    return;
                }
                setTimeout(tick, 90);
            } else {
                charIndex--;
                target.textContent = current.slice(0, charIndex);
                if (charIndex <= 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
                setTimeout(tick, 45);
            }
        }

        tick();
    }

    /* =========================
       COPY EMAIL
    ========================= */

    function initCopyEmail() {
        const button = document.getElementById("copyEmail");
        if (!button) return;

        const done = button.querySelector(".copy-done");
        let timer = null;

        function fallbackCopy(text) {
            const field = document.createElement("textarea");
            field.value = text;
            field.setAttribute("readonly", "");
            field.style.position = "absolute";
            field.style.left = "-9999px";
            document.body.appendChild(field);
            field.select();
            const ok = document.execCommand("copy");
            field.remove();
            return ok;
        }

        button.addEventListener("click", async () => {
            const email = button.dataset.email;
            let ok = false;

            try {
                await navigator.clipboard.writeText(email);
                ok = true;
            } catch (e) {
                ok = fallbackCopy(email);
            }

            if (!ok) {
                window.location.href = `mailto:${email}`;
                return;
            }

            done.textContent = STRINGS[lang].copied;
            button.classList.add("copied");
            clearTimeout(timer);
            timer = setTimeout(() => button.classList.remove("copied"), 2000);
        });
    }

    /* =========================
       CURSOR GLOW / SCROLL PROGRESS / BACK TO TOP
    ========================= */

    function initCursorGlow() {
        const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
        if (isTouch || prefersReducedMotion) return;

        const glow = document.createElement("div");
        glow.className = "cursor-glow";
        document.body.appendChild(glow);

        let rafId = null;

        window.addEventListener("mousemove", (event) => {
            glow.classList.add("active");
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
            });
        });

        document.addEventListener("mouseleave", () => glow.classList.remove("active"));
    }

    function initScrollProgress() {
        const bar = document.getElementById("scrollProgress");
        if (!bar) return;

        function update() {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = `${docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0}%`;
        }

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        update();
    }

    function initBackToTop() {
        const button = document.getElementById("backToTop");
        if (!button) return;

        function toggle() {
            button.classList.toggle("visible", window.scrollY > 500);
        }

        window.addEventListener("scroll", toggle, { passive: true });
        toggle();

        button.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
        });
    }

    initI18n();
    initNav();
    initNavActive();
    initReveal();
    initTypewriter();
    initCopyEmail();
    initCursorGlow();
    initScrollProgress();
    initBackToTop();
})();
