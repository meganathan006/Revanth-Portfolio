// =============================================
//  Central Data File – Edit your real details
//  here and the entire site updates automatically
// =============================================

export const PERSON = {
  name: 'Revanth M',
  role: 'Automation Test Engineer',
  tagline: 'Manual + Automation Testing',
  summary:
    'Dedicated QA engineer delivering dependable test automation frameworks and thorough test coverage. Specialised in Selenium WebDriver, Playwright, API testing, and robust end-to-end regression suites.',
  email: 'revanthsrj004@gmail.com',
  // Phone stored as segments – prevents plain-text scraping
  phoneParts: ['8600', '995863'],
  location: '[add city]',         // ← Replace with your city e.g. "Bengaluru, India"
  linkedin: '[add link]',         // ← Replace with your LinkedIn profile URL
  github: '[add link]',           // ← Replace with your GitHub profile URL
  experience: '2.7 Years',
  company: 'Axess Technology Pvt Ltd',
};

export const SKILLS = [
  {
    category: 'Automation Testing',
    icon: 'monitor',
    tags: [
      'Selenium WebDriver (Java)',
      'Playwright (JS/TS)',
      'TestNG',
      'JUnit',
      'Cucumber / BDD',
      'Page Object Model (POM)',
      'Data-Driven Testing',
      'Cross-Browser Testing',
    ],
  },
  {
    category: 'Languages',
    icon: 'code',
    tags: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'API Testing',
    icon: 'rss',
    tags: [
      'Postman',
      'REST API Testing',
      'Status Code Validation',
      'Response Body Validation',
      'REST Assured',
    ],
  },
  {
    category: 'Manual Testing',
    icon: 'file-text',
    tags: [
      'Test Case Design',
      'Test Plans',
      'Regression Testing',
      'Smoke & Sanity',
      'Functional Testing',
      'Exploratory Testing',
      'UAT Testing',
      'Defect Lifecycle',
      'Bug Reporting',
    ],
  },
  {
    category: 'Tools & CI/CD',
    icon: 'settings',
    tags: [
      'Jira',
      'Git / GitHub',
      'Maven',
      'Jenkins (CI/CD)',
      'Allure Reports',
      'Extent Reports',
      'VS Code',
      'IntelliJ IDEA',
    ],
  },
  {
    category: 'QA Practices',
    icon: 'users',
    tags: ['Agile / Scrum', 'SDLC & STLC', 'Requirement Analysis', 'Traceability Matrix (RTM)'],
  },
];

export const EXPERIENCE = {
  role: 'Automation Test Engineer',
  company: 'Axess Technology Pvt Ltd',
  duration: '2.7 Years',
  bullets: [
    {
      strong: 'Developed and maintained automated test scripts',
      text:
        'using Selenium WebDriver with Java and TestNG, adhering to the Page Object Model (POM) pattern to maximise script reusability and reduce maintenance costs.',
    },
    {
      strong: 'Executed comprehensive manual and functional testing',
      text:
        'across sprint cycles—including smoke, sanity, regression, and exploratory suites—to validate critical user journeys prior to production deployments.',
    },
    {
      strong: 'Validated RESTful API endpoints',
      text:
        'using Postman and REST Assured, verifying HTTP status codes, JSON response schemas, headers, and parameterised test datasets.',
    },
    {
      strong: 'Logged and monitored defects in Jira',
      text:
        'throughout the defect lifecycle, providing developers with reproducible steps, expected vs actual outcomes, console logs, and screenshots.',
    },
    {
      strong: 'Collaborated actively in Agile/Scrum ceremonies',
      text:
        'including sprint planning, daily standups, backlog refinement, and retrospectives while generating test execution reports with Extent and Allure.',
    },
  ],
  tags: ['Selenium WebDriver', 'Java', 'TestNG', 'Page Object Model', 'Postman', 'Jira', 'Maven', 'Extent Reports', 'Agile / Scrum'],
};

export type ProjectCategory = 'ui' | 'api' | 'manual';

export interface Project {
  id: number;
  name: string;           // placeholder if not ready
  domain: string;         // placeholder if not ready
  type: string;
  category: ProjectCategory;
  testedModules: string;  // placeholder if not ready
  bullets: { strong: string; text: string }[];
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: '[add project name]',
    domain: '[add domain e.g., Banking / E-Commerce]',
    type: 'UI Automation & Regression',
    category: 'ui',
    testedModules: '[add modules or features, e.g., User Auth, Search, Checkout]',
    bullets: [
      {
        strong: 'Architected modular test scripts',
        text: 'using Selenium WebDriver (Java) with Page Object Model (POM) and TestNG assertions for clean, reusable code.',
      },
      {
        strong: 'Authored automated test cases:',
        text: 'created [add number] test scripts covering end-to-end user workflows.',
      },
      {
        strong: 'Saved regression time:',
        text: 'reduced manual regression cycle by [add number]% across release cycles.',
      },
      {
        strong: 'Discovered and logged',
        text: '[add number] critical and major defects in Jira before production releases.',
      },
    ],
    stack: ['Selenium WebDriver', 'Java', 'TestNG', 'Page Object Model', 'Maven', 'Extent Reports'],
  },
  {
    id: 2,
    name: '[add project name]',
    domain: '[add domain e.g., Fintech / Telecom]',
    type: 'API Testing',
    category: 'api',
    testedModules: '[add modules e.g., Customer Onboarding, Payment Processing API]',
    bullets: [
      {
        strong: 'Validated REST API endpoints',
        text: 'using Postman and REST Assured for status codes (200, 201, 400, 404, 500) and headers.',
      },
      {
        strong: 'Executed structured test suites:',
        text: 'validated [add number] endpoints with parameterised JSON payloads.',
      },
      {
        strong: 'Identified and reported',
        text: '[add number] backend response mismatches and schema contract breakages.',
      },
      {
        strong: 'Accelerated bug detection:',
        text: 'verified API stability prior to front-end integration testing.',
      },
    ],
    stack: ['Postman', 'REST Assured', 'Java', 'JSON Schema Validation', 'TestNG'],
  },
  {
    id: 3,
    name: '[add project name]',
    domain: '[add domain e.g., SaaS / Web Portal]',
    type: 'UI Automation & Cross-Browser',
    category: 'ui',
    testedModules: '[add features e.g., Dynamic Filters, User Dashboard, Form Submissions]',
    bullets: [
      {
        strong: 'Constructed cross-browser automation suite',
        text: 'with Playwright (TypeScript/JavaScript) covering Chromium, Firefox, and WebKit.',
      },
      {
        strong: 'Leveraged Playwright auto-waiting',
        text: 'to eliminate flaky tests and handle dynamic asynchronous UI state changes.',
      },
      {
        strong: 'Automated test coverage:',
        text: 'implemented [add number] end-to-end regression scenarios.',
      },
      {
        strong: 'Generated rich execution reports',
        text: 'with Allure Reports including embedded screenshots and network tracing on failure.',
      },
    ],
    stack: ['Playwright', 'TypeScript', 'JavaScript', 'Allure Reports', 'Cross-Browser Testing'],
  },
  {
    id: 4,
    name: '[add project name]',
    domain: '[add domain e.g., Healthcare / Enterprise]',
    type: 'Manual & UAT QA',
    category: 'manual',
    testedModules: '[add modules e.g., Role-Based Access Control, Data Exports, Audit Logs]',
    bullets: [
      {
        strong: 'Designed detailed test plans and test cases',
        text: 'from business requirements, boundary conditions, and user acceptance criteria.',
      },
      {
        strong: 'Maintained Traceability Matrix (RTM)',
        text: 'to ensure 100% test coverage across all functional requirements.',
      },
      {
        strong: 'Authored [add number] manual test cases',
        text: 'and executed smoke, functional, and UAT cycles.',
      },
      {
        strong: 'Facilitated defect triage meetings',
        text: 'with developers and product managers to resolve [add number] bugs before release.',
      },
    ],
    stack: ['Test Case Design', 'Jira', 'STLC / SDLC', 'RTM', 'UAT Testing', 'Defect Lifecycle'],
  },
];
