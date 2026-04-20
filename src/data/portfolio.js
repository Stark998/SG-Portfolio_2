export const portfolioData = {
  // Updated portfolio data
  personal: {
    name: "Shasank Gupta B N",
    firstName: "Shasank",
    lastName: "Gupta B N",
    title: "Technical Consultant",
    subtitle: "Microsoft Dynamics 365 Business Central technical consultant specializing in AL customizations, integrations, and end-to-end ERP delivery.",
    email: "shasank998@gmail.com",
    phone: "+91 8688888249",
    location: "India",
    currentCompany: "Deloitte Touche Tohmatsu India LLP",
    status: "Open to Work",
    yearsExperience: ">3",
    deployments: "6+",
  },

  skills: [
    {
      icon: "⚙️",
      category: "Business Central",
      color: "cyan",
      tags: ["Microsoft Dynamics 365 Business Central", "AL", "CAL", "SQL", "JavaScript"],
    },
    {
      icon: "🌐",
      category: "Integrations",
      color: "purple",
      tags: ["REST APIs", "SOAP", "OData", "Azure Functions", "Microsoft Graph", "Power Automate"],
    },
    {
      icon: "🛠️",
      category: "Tools",
      color: "green",
      tags: ["Visual Studio Code", "Postman", "Azure DevOps", "Git", "Power BI", "Microsoft Office 365", "Microsoft Azure"],
    },
    {
      icon: "📄",
      category: "Reporting",
      color: "cyan",
      tags: ["RDLC Reports", "Word Layouts", "Excel Layouts", "Document Attachments", "Blob Storage"],
    },
    {
      icon: "🚀",
      category: "Methodologies",
      color: "purple",
      tags: ["Agile Methodology", "Waterfall Model", "ERP Lifecycle", "UAT Support", "Production Support"],
    },
  ],

  experience: [
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      role: "Analyst",
      period: "Nov 2025 — Present",
      type: "Full-time",
      description:
        "Working as an Analyst at Deloitte India on Microsoft Dynamics 365 Business Central implementations, supporting technical customizations, integrations, and post go-live support. Responsible for requirement analysis, design, deployment, and production stability for Business Central extensions and integrations.",
      highlights: [
        "Support end-to-end Business Central implementation lifecycle",
        "Develop AL extensions, reports, APIs, codeunits, and page customizations",
        "Implement secure integrations with Azure Functions, REST APIs, Microsoft Graph, and SharePoint",
        "Manage production issue resolution, UAT coordination, and release stabilization",
        "Collaborate with functional consultants and business users on technical requirements",
      ],
    },
    {
      company: "Dhyey Consulting Pvt. Ltd.",
      role: "Application Developer",
      period: "Jan 2024 — Nov 2025",
      type: "Full-time",
      description:
        "Delivered Business Central solutions for ERP implementations, custom integrations, and document management. Built robust AL solutions, reports, and workflows for scalable, secure business processes.",
      highlights: [
        "Implemented SharePoint and Azure Blob document storage integrations for Business Central",
        "Automated XML-based transaction processing using SFTP, Power Automate, and Azure",
        "Created digital signature workflows using PKCS#7, Base64, and Azure Functions",
        "Built custom reports with RDLC, Word, and Excel layouts",
        "Supported Sales, Purchase, Finance, Inventory, Production, and Warehouse modules",
      ],
    },
  ],

  projects: [
    {
      num: "01",
      title: "SharePoint Document Management Integration",
      environment: "Business Central, Microsoft Graph, SharePoint, Azure, Postman",
      teamSize: 1,
      role: "Techno-Functional Consultant",
      description:
        "Built a secure external document storage integration between Business Central and SharePoint using Microsoft Graph APIs and Azure AD authentication. The solution reduced database footprint while preserving role-based access and secure attachment retrieval.",
      stack: [
        { label: "Business Central", color: "cyan" },
        { label: "SharePoint", color: "purple" },
        { label: "Microsoft Graph", color: "green" },
        { label: "Azure", color: "purple" },
        { label: "REST API", color: "green" },
      ],
    },
    {
      num: "02",
      title: "Azure Blob Document Management",
      environment: "Business Central, Azure Blob Storage, Postman",
      teamSize: 1,
      role: "Technical Consultant & Solution Architect",
      description:
        "Designed a scalable document management solution by integrating Azure Blob Storage with Business Central. Documents were stored securely in the cloud while metadata and links remained available in Business Central for seamless user access.",
      stack: [
        { label: "Business Central", color: "cyan" },
        { label: "Azure Blob Storage", color: "purple" },
        { label: "Postman", color: "green" },
        { label: "AL", color: "cyan" },
      ],
    },
    {
      num: "03",
      title: "Automated XML Transaction Processing System",
      environment: "Business Central, SFTP, Power Automate, Azure",
      teamSize: 1,
      role: "Technical Consultant & Solution Architect",
      description:
        "Implemented an automated EDI solution to process XML files over SFTP into Business Central. The workflow parsed XML transactions, created sales orders, and reduced manual handling while improving accuracy.",
      stack: [
        { label: "Business Central", color: "cyan" },
        { label: "SFTP", color: "purple" },
        { label: "Power Automate", color: "green" },
        { label: "XML", color: "cyan" },
      ],
    },
    {
      num: "04",
      title: "Digital Signature Integration",
      environment: "Business Central, Azure Functions, Python, Postman",
      teamSize: 2,
      role: "Technical Consultant",
      description:
        "Delivered a PKCS#7 digital signature workflow for Business Central using Azure Functions and Python. The solution encoded report data into Base64, embedded authorized signatures, and automated secure document signing.",
      stack: [
        { label: "Business Central", color: "cyan" },
        { label: "Azure Functions", color: "purple" },
        { label: "Python", color: "green" },
        { label: "Digital Signature", color: "cyan" },
      ],
    },
    {
      num: "05",
      title: "Enterprise ERP Module Customizations",
      environment: "Business Central, Postman, O365",
      teamSize: "Multiple",
      role: "AL Developer",
      description:
        "Delivered core Business Central customizations across Sales, Purchase, Production Orders and General Journals. Developed business-critical reports and supported two end-to-end company implementations through deployment and stabilization.",
      stack: [
        { label: "Business Central", color: "cyan" },
        { label: "RDLC Reports", color: "purple" },
        { label: "Word Layouts", color: "green" },
        { label: "Excel Layouts", color: "cyan" },
      ],
    },
    {
  "num": "06",
  "title": "Kotak Bank SFTP Integration",
  "environment": "Business Central, Postman, Microsoft Azure, .NET Functions",
  "teamSize": "4",
  "role": "AL Developer",
  "description":
    "Collaborated in a team of 4 to design and implement a secure SFTP-based integration with Kotak Bank. Configured an isolated SFTP environment with IP whitelisting to ensure secure file transmission. Developed functionality in Microsoft Dynamics 365 Business Central to generate XML files based on bank-defined specifications and automatically upload them to the SFTP location. Integrated API-based validation to confirm transaction receipt by the bank, retrieving transaction IDs for successful submissions. Ensured reliable file processing, secure communication, and improved automation of banking transactions.",
  "stack": [
    { "label": "Business Central", "color": "cyan" },
    { "label": "SFTP Integration", "color": "purple" },
    { "label": "Azure Functions", "color": "green" },
    { "label": ".NET", "color": "cyan" },
    { "label": "XML Processing", "color": "purple" }
  ]
}
  ],

  certifications: [
    // {
    //   name: "Microsoft Dynamics 365 Business Central",
    //   issuer: "Training & Practice",
    //   icon: "🎓",
    // },
  ],

  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Parul University",
      year: "2024",
      icon: "🎓",
    },
  ],

  responsibilities: [
    "Gather business requirements and translate them into Business Central solutions",
    "Prepare FDD, TDD, and SDD documents for customizations and integrations",
    "Design and develop AL extensions, pages, reports, APIs, and codeunits",
    "Implement secure integrations using REST, OData, Graph APIs, and Azure Functions",
    "Develop and customize RDLC, Word, and Excel report layouts",
    "Support testing, UAT, deployment, and post go-live stabilization",
    "Monitor application behavior and resolve technical issues in production",
    "Provide enhancements and change requests based on evolving business needs",
    "Coordinate with business users and functional consultants for UAT",
    "Participate in daily stand-ups and sprint meetings using Azure DevOps",
  ],
};
