const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    AlignmentType, BorderStyle, WidthType, ShadingType, LevelFormat,
    ExternalHyperlink, VerticalAlign
  } = require('docx');
  const fs = require('fs');
  
  // ── Color palette ──
  const GOLD   = "B8860B";
  const NAVY   = "0A1628";
  const GRAY   = "4A5568";
  const LGRAY  = "718096";
  const SILVER = "F0F0F0";
  const WHITE  = "FFFFFF";
  
  const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
  const thinBottom = { top: noBorder, left: noBorder, right: noBorder,
    bottom: { style: BorderStyle.SINGLE, size: 4, color: "B8860B" } };
  
  // ── Helpers ──
  function gap(pt = 6) {
    return new Paragraph({ children: [new TextRun("")], spacing: { before: 0, after: pt * 20 } });
  }
  
  function sectionHeader(text) {
    return new Paragraph({
      children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 22, color: NAVY, font: "Arial" })],
      spacing: { before: 240, after: 80 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD } },
    });
  }
  
  function jobTitle(role, company, period) {
    return new Table({
      width: { size: 9026, type: WidthType.DXA },
      columnWidths: [5800, 3226],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              borders: noBorders,
              width: { size: 5800, type: WidthType.DXA },
              children: [new Paragraph({
                children: [
                  new TextRun({ text: role, bold: true, size: 22, color: NAVY, font: "Arial" }),
                  new TextRun({ text: "  ·  ", size: 20, color: LGRAY, font: "Arial" }),
                  new TextRun({ text: company, size: 20, color: GOLD, bold: true, font: "Arial" }),
                ], spacing: { before: 120, after: 40 }
              })]
            }),
            new TableCell({
              borders: noBorders,
              width: { size: 3226, type: WidthType.DXA },
              children: [new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: period, size: 18, color: LGRAY, italics: true, font: "Arial" })],
                spacing: { before: 120, after: 40 }
              })]
            }),
          ]
        })
      ]
    });
  }
  
  function bullet(text, bold_prefix = "") {
    const children = [];
    if (bold_prefix) {
      children.push(new TextRun({ text: bold_prefix + " ", bold: true, size: 20, color: NAVY, font: "Arial" }));
      children.push(new TextRun({ text, size: 20, color: GRAY, font: "Arial" }));
    } else {
      children.push(new TextRun({ text, size: 20, color: GRAY, font: "Arial" }));
    }
    return new Paragraph({
      numbering: { reference: "bullets", level: 0 },
      children,
      spacing: { before: 40, after: 40 },
    });
  }
  
  function skillRow(category, skills) {
    return new Table({
      width: { size: 9026, type: WidthType.DXA },
      columnWidths: [2000, 7026],
      rows: [new TableRow({
        children: [
          new TableCell({
            borders: noBorders,
            width: { size: 2000, type: WidthType.DXA },
            children: [new Paragraph({
              children: [new TextRun({ text: category, bold: true, size: 19, color: NAVY, font: "Arial" })],
              spacing: { before: 60, after: 60 }
            })]
          }),
          new TableCell({
            borders: noBorders,
            width: { size: 7026, type: WidthType.DXA },
            children: [new Paragraph({
              children: [new TextRun({ text: skills, size: 19, color: GRAY, font: "Arial" })],
              spacing: { before: 60, after: 60 }
            })]
          }),
        ]
      })]
    });
  }
  
  // ── Header band (name + contact) ──
  function headerSection() {
    // Top gold accent bar - using a table with gold background
    const accentBar = new Table({
      width: { size: 9026, type: WidthType.DXA },
      columnWidths: [9026],
      rows: [new TableRow({
        children: [new TableCell({
          shading: { fill: GOLD, type: ShadingType.CLEAR },
          borders: noBorders,
          width: { size: 9026, type: WidthType.DXA },
          margins: { top: 60, bottom: 60, left: 200, right: 200 },
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "OPEN TO OPPORTUNITIES IN DUBAI, UAE", bold: true, size: 16, color: WHITE, font: "Arial" })],
          })]
        })]
      })]
    });
  
    const nameBlock = new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 60 },
      children: [new TextRun({ text: "RAHUL KUMAR", bold: true, size: 52, color: NAVY, font: "Arial" })]
    });
  
    const titleBlock = new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 80 },
      children: [new TextRun({ text: "Senior Full Stack Developer", size: 26, color: GOLD, font: "Arial", bold: true })]
    });
  
    const contactLine = new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 80 },
        children: [
          new TextRun({ text: "📧 ", size: 18, font: "Segoe UI Emoji" }),
          new TextRun({ text: "rahul.javascript1@gmail.com", size: 18, color: GRAY, font: "Arial" }),
      
          new TextRun({ text: "   |   📞 ", size: 18, font: "Segoe UI Emoji" }),
          new TextRun({ text: "+91 8050829105", size: 18, color: GRAY, font: "Arial" }),
      
          new TextRun({ text: "   |   💬 ", size: 18, font: "Segoe UI Emoji" }),
          new ExternalHyperlink({
            link: "https://wa.me/918050829105",
            children: [new TextRun({ text: "WhatsApp", size: 18, color: "25D366", font: "Arial" })], // ✅ WhatsApp green
          }),
      
          new TextRun({ text: "   |   🌐 ", size: 18, font: "Segoe UI Emoji" }),
          new ExternalHyperlink({
            link: "https://www.rahuljavascript.xyz/",
            children: [new TextRun({ text: "Portfolio", size: 18, color: GOLD, font: "Arial" })],
          }),
      
          new TextRun({ text: "   |   💼 ", size: 18, font: "Segoe UI Emoji" }),
          new ExternalHyperlink({
            link: "https://www.linkedin.com/in/devmantrarahulkumar/",
            children: [new TextRun({ text: "linkedin.com/in/devmantrarahulkumar", size: 18, color: GOLD, font: "Arial" })],
          }),
        ]
      });
      
      
  
    const locationLine = new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 160 },
      children: [
        new TextRun({ text: "📍 Bengaluru, India  →  Targeting Dubai, UAE  |  Available for Relocation  |  Open to UAE Employment Visa Sponsorship", size: 18, color: LGRAY, italics: true, font: "Arial" }),
      ]
    });
  
    return [accentBar, nameBlock, titleBlock, contactLine, locationLine];
  }
  
  // ── Document ──
  const doc = new Document({
    numbering: {
      config: [{
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "▸",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 440, hanging: 280 } } }
        }]
      }]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 720, right: 1080, bottom: 720, left: 1080 }
        }
      },
      children: [
        // ── HEADER ──
        ...headerSection(),
  
        // ── PROFESSIONAL SUMMARY ──
        sectionHeader("Professional Summary"),
        gap(2),
        new Paragraph({
          spacing: { before: 60, after: 60 },
          children: [new TextRun({
            text: "Results-driven Senior Full Stack Developer with 8+ years of experience architecting and delivering enterprise-scale web applications. Currently a Senior Technical Consultant at EY (Ernst & Young), with a proven track record across fintech, HR-tech, and large enterprise domains. Expert in React.js, Next.js, NestJS, GraphQL, and TypeScript. Seeking to bring world-class engineering capability to Dubai's thriving technology ecosystem — contributing to smart city initiatives, fintech innovation, and digital transformation projects across the UAE.",
            size: 20, color: GRAY, font: "Arial"
          })]
        }),
        gap(4),
  
        // ── SKILLS ──
        sectionHeader("Technical Skills"),
        gap(2),
        skillRow("Frontend",   "React.js · Next.js · TypeScript · JavaScript (ES6+) · Redux · Tailwind CSS · HTML5 · CSS3"),
        skillRow("Backend",    "Node.js · NestJS · GraphQL (Apollo) · REST APIs · Express.js"),
        skillRow("Tools",      "Git · GitHub · Jira · Figma · Postman · VS Code · Webpack · Vite"),
        skillRow("Architecture", "System Design · Microservices · API Design · Performance Optimization · Code Reviews"),
        skillRow("Soft Skills", "Technical Consulting · Team Leadership · Client Communication · Agile / Scrum"),
        gap(4),
  
        // ── EXPERIENCE ──
        sectionHeader("Professional Experience"),
        gap(2),
  
        // EY
        jobTitle("Senior Technical Consultant", "Ernst & Young (EY)", "Dec 2022 – Present"),
        bullet("Lead frontend architecture and full-stack development for high-value enterprise clients across banking, consulting, and government verticals — experience highly relevant to Dubai's enterprise and government tech sector."),
        bullet("Architect and deliver scalable React.js / Next.js applications with GraphQL APIs and NestJS backends, serving thousands of concurrent users in production."),
        bullet("Drive code quality standards, conduct architecture reviews, and mentor junior developers across distributed teams."),
        bullet("Spearhead performance optimization initiatives reducing load times by 40%+ on critical client-facing dashboards."),
        bullet("Collaborate directly with C-suite stakeholders to translate business requirements into technical roadmaps."),
        gap(4),
  
        // HCL
        jobTitle("Lead Engineer", "HCL Technologies", "Apr 2021 – Dec 2022"),
        bullet("Led a team of 6 engineers building high-performance web platforms, overseeing design, development, and delivery."),
        bullet("Architected reusable component libraries and design systems in React.js, reducing development time by 30% across projects."),
        bullet("Implemented advanced state management patterns with Redux and Apollo Client for complex data-heavy applications."),
        bullet("Actively collaborated with product and UX teams to ship customer-facing features on time across Agile sprints."),
        gap(4),
  
        // IIFL
        jobTitle("Software Developer", "IIFL Wealth", "Jan 2020 – Apr 2021"),
        bullet("Built responsive, data-rich fintech dashboards for wealth management, handling real-time financial data feeds and complex user workflows — directly applicable to Dubai's financial services sector."),
        bullet("Developed RESTful API integrations and optimized frontend rendering for high-frequency data visualizations."),
        bullet("Delivered features for a platform serving HNI (High Net-Worth Individual) clients with strict UX and performance SLAs."),
        gap(4),
  
        // CrewKarma
        jobTitle("Software Developer", "CrewKarma Networks", "Mar 2018 – Dec 2019"),
        bullet("Full-stack development for an early-stage startup — contributed across frontend (React.js), backend (Node.js), and database layers."),
        bullet("Shipped core product features from ideation to production, including real-time notification systems and user onboarding flows."),
        gap(4),
  
        // ── FEATURED PROJECTS ──
        sectionHeader("Featured Projects"),
        gap(2),
  
        new Paragraph({
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({ text: "iTrip.pro", bold: true, size: 21, color: NAVY, font: "Arial" }),
            new TextRun({ text: "  —  Travel & Trip Management Platform", size: 20, color: GRAY, font: "Arial" }),
            new TextRun({ text: "   ", size: 20, font: "Arial" }),
            new ExternalHyperlink({ link: "https://itrip.pro",
              children: [new TextRun({ text: "itrip.pro ↗", size: 19, color: GOLD, font: "Arial" })] }),
          ]
        }),
        bullet("Modern travel management platform built with Next.js, React.js, TypeScript, and Tailwind CSS. Focused on scalable architecture, responsive UI, and premium UX."),
        gap(4),
  
        new Paragraph({
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({ text: "TalentXO", bold: true, size: 21, color: NAVY, font: "Arial" }),
            new TextRun({ text: "  —  Enterprise HR-Tech & Recruitment Platform", size: 20, color: GRAY, font: "Arial" }),
            new TextRun({ text: "   ", size: 20, font: "Arial" }),
            new ExternalHyperlink({ link: "https://talentxo.com",
              children: [new TextRun({ text: "talentxo.com ↗", size: 19, color: GOLD, font: "Arial" })] }),
          ]
        }),
        bullet("Enterprise recruitment platform serving companies, recruiters, and candidates — built with React.js, Next.js, GraphQL, and TypeScript. Handles complex multi-role workflows and high-traffic job matching."),
        gap(4),
  
        // ── EDUCATION ──
        sectionHeader("Education"),
        gap(2),
        new Table({
          width: { size: 9026, type: WidthType.DXA },
          columnWidths: [6500, 2526],
          rows: [new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                width: { size: 6500, type: WidthType.DXA },
                children: [new Paragraph({
                  children: [
                    new TextRun({ text: "Bachelor of Technology (B.Tech)", bold: true, size: 21, color: NAVY, font: "Arial" }),
                    new TextRun({ text: "  ·  Computer Science & Engineering", size: 20, color: GRAY, font: "Arial" }),
                  ],
                  spacing: { before: 80, after: 40 }
                })]
              }),
              new TableCell({
                borders: noBorders,
                width: { size: 2526, type: WidthType.DXA },
                children: [new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [new TextRun({ text: "Graduated 2017", size: 19, color: LGRAY, italics: true, font: "Arial" })],
                  spacing: { before: 80, after: 40 }
                })]
              }),
            ]
          })]
        }),
        gap(4),
  
        // ── WHY DUBAI ──
        sectionHeader("Why Dubai"),
        gap(2),
        new Paragraph({
          spacing: { before: 60, after: 60 },
          children: [new TextRun({
            text: "Dubai's Vision 2030 smart city agenda, world-class fintech ecosystem, and position as the Middle East's premier technology hub align perfectly with my expertise in enterprise web development. I bring 8+ years of global delivery experience and am ready to relocate immediately. I welcome UAE Employment Visa Sponsorship and am familiar with the DIFC and Dubai Internet City (DIC) tech communities.",
            size: 20, color: GRAY, font: "Arial"
          })]
        }),
        gap(2),
  
        // ── FOOTER NOTE ──
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 0 },
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: GOLD } },
          children: [new TextRun({
            text: "References available upon request  ·  rahul.javascript1@gmail.com  ·  Open to Dubai, Abu Dhabi & wider UAE",
            size: 17, color: LGRAY, italics: true, font: "Arial"
          })]
        }),
      ]
    }]
  });
  
  Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("rahul_kumar_resume_dubai.docx", buffer);
    console.log("✅ Resume created: rahul_kumar_resume_dubai.docx");
  });