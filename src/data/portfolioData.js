// All editable site content lives in this one file.
// Update these values to change what shows up on the site —
// the components below just render whatever is here.

export const profile = {
  name: "Sumanta",
  role: "Data Analyst — turning raw data into business decisions",
  tagline:
    "I clean messy datasets, query them for real answers, and build dashboards people actually use. My focus is customer analytics — spending, engagement, retention and churn — from raw rows to a decision someone can act on.",
  status: "Open to data analyst roles",
  email: "sumanta2k16@gmail.com",
  linkedin: "https://www.linkedin.com/in/sumantachowdhury-2k26/",
  github: "https://github.com/sumanta28",
};

export const about = [
  "I'm building toward a career as a data analyst, working end-to-end — from cleaning raw data to querying it for answers to presenting it in a dashboard someone will actually open again next week.",
  "My most recent work is a full customer analytics project: cleaning and exploring a 5,000-record dataset in Python, writing business queries in PostgreSQL, and building an interactive Power BI dashboard to track spending, acquisition, engagement, conversion, retention and churn.",
];

export const skillGroups = [
  { category: "Languages", items: ["Python", "SQL"] },
  {
    category: "Analysis",
    items: ["pandas", "NumPy", "Data cleaning", "Exploratory data analysis"],
  },
  { category: "Databases", items: ["PostgreSQL", "Business querying"] },
  {
    category: "Visualization",
    items: ["Power BI", "Dashboard design", "matplotlib"],
  },
  {
    category: "Concepts",
    items: [
      "Customer segmentation",
      "Cohort & retention analysis",
      "Churn analysis",
      "Funnel & conversion analysis",
    ],
  },
  {
    category: "2026 toolkit",
    items: [
      "AI-assisted analysis (Copilot in Excel/Power BI)",
      "Git & version control",
      "Jupyter",
      "Cloud warehouses (BigQuery/Snowflake basics)",
    ],
  },
];

export const project = {
  name: "E-Commerce Customer Analytics",
  summary:
    "An end-to-end analysis of a 5,000-record synthetic Indian e-commerce customer dataset — from raw data to a business-ready dashboard.",
  tags: ["Python", "PostgreSQL", "SQL", "Power BI"],
  stats: [
    { value: "5,000", label: "Customer records" },
    { value: "7", label: "Metric areas tracked" },
    { value: "3", label: "Tools end-to-end" },
    { value: "1", label: "Live dashboard" },
  ],
  covers: [
    "Data cleaning and exploratory analysis in Python",
    "Business querying in PostgreSQL to answer specific stakeholder questions",
    "An interactive Power BI dashboard covering spending, acquisition, engagement, conversion, retention, returns and churn",
  ],
  goals: [
    "Turning raw customer data into insight for segmentation and loyalty strategy",
    "Flagging where revenue is being left on the table",
    "Giving a non-technical stakeholder a dashboard they can explore themselves, not just a static report",
  ],
  githubUrl: "https://github.com/sumanta28",
};

// Illustrative retention curve for the hero chart.
// Swap these numbers for a real export from your Power BI dashboard when you have one.
export const retentionCurve = {
  points: [95, 80, 74, 62, 60, 50, 52, 45, 48],
  months: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"],
};
