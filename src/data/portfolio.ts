// =============================================
//  Central Data File – Real details loaded directly
//  from Revanth M's resume
// =============================================

export const PERSON = {
  name: 'Revanth M',
  role: 'Software QA Automation Engineer',
  tagline: 'Manual + Automation Testing | Selenium · Playwright · API Testing',
  summary:
    'Software QA Automation Engineer with 2-3 years of experience in manual and automation testing of web applications and APIs. Hands-on experience developing and executing automated test scripts using Selenium with Java, TestNG, Cucumber, and Playwright with TypeScript. Skilled in functional, regression, smoke, sanity, integration, and end-to-end testing.',
  email: 'revanthsrj004@gmail.com',
  // Phone stored as segments – prevents plain-text scraping
  phoneParts: ['9600', '995863'],
  location: 'Chennai, India',
  linkedin: 'https://linkedin.com/in/revanth-srj',
  github: 'https://github.com/Revanthsrj',
  experience: '2-3 Years',
  company: 'V-Accel AI Dynamic Private Limited',
};

export const EDUCATION = {
  degree: 'Bachelor of Engineering (B.E.) - Mechanical Engineering',
  institution: 'The Kavery Engineering College, Anna University',
  year: '2018',
};

export const CORE_STRENGTHS = [
  'Manual & Automation Testing',
  'Selenium (Java)',
  'Playwright (TypeScript)',
  'Cucumber BDD',
  'TestNG',
  'API Testing (Postman)',
  'Jira Defect Tracking',
];

export const SKILLS = [
  {
    category: 'Automation Testing',
    icon: 'monitor',
    tags: [
      { label: 'Selenium WebDriver', icon: 'selenium' },
      { label: 'Playwright', icon: 'playwright' },
      { label: 'TestNG', icon: 'testng' },
      { label: 'Cucumber (BDD)', icon: 'cucumber' },
      { label: 'Pytest', icon: 'pytest' },
      { label: 'Page Object Model', icon: 'pom' },
      { label: 'Data-Driven Testing', icon: 'data' },
      { label: 'Cross-Browser Testing', icon: 'browser' },
    ],
  },
  {
    category: 'Languages',
    icon: 'code',
    tags: [
      { label: 'Java', icon: 'java' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'Python', icon: 'python' },
    ],
  },
  {
    category: 'API Testing',
    icon: 'rss',
    tags: [
      { label: 'Postman', icon: 'postman' },
      { label: 'REST API Testing', icon: 'api' },
      { label: 'Status Code Validation', icon: 'check' },
      { label: 'Response Validation', icon: 'check' },
      { label: 'Data Integrity Testing', icon: 'data' },
    ],
  },
  {
    category: 'Testing Types',
    icon: 'file-text',
    tags: [
      { label: 'Manual Testing', icon: 'doc' },
      { label: 'Functional Testing', icon: 'check' },
      { label: 'Regression Testing', icon: 'refresh' },
      { label: 'Smoke & Sanity', icon: 'fire' },
      { label: 'Integration Testing', icon: 'cycle' },
      { label: 'End-to-End (E2E)', icon: 'browser' },
      { label: 'Retesting', icon: 'refresh' },
    ],
  },
  {
    category: 'Tools & Practices',
    icon: 'settings',
    tags: [
      { label: 'Jira', icon: 'jira' },
      { label: 'Git / GitHub', icon: 'github' },
      { label: 'Maven', icon: 'maven' },
      { label: 'Test Case Design', icon: 'doc' },
      { label: 'Defect Tracking', icon: 'bug' },
      { label: 'Bug Reporting', icon: 'bug' },
      { label: 'VS Code', icon: 'vscode' },
      { label: 'IntelliJ IDEA', icon: 'intellij' },
    ],
  },
  {
    category: 'QA Management',
    icon: 'users',
    tags: [
      { label: 'Agile / Scrum', icon: 'agile' },
      { label: 'SDLC & STLC', icon: 'cycle' },
      { label: 'User Story Analysis', icon: 'doc' },
      { label: 'Test Execution', icon: 'check' },
    ],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: { strong: string; text: string }[];
  tags: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Software QA Automation Engineer',
    company: 'V-Accel AI Dynamic Private Limited',
    location: 'Chennai, India',
    duration: 'June 2025 - Present',
    bullets: [
      {
        strong: 'End-to-End LMS & HRMS Validation:',
        text: 'Spearheaded functional, regression, UI, and integration testing for enterprise Learning Management (LMS) and People Accel web applications.',
      },
      {
        strong: 'API Testing & Authentication:',
        text: 'Validated RESTful APIs using Postman, evaluating endpoints, status codes, payload structures, authentication tokens, and backend data integrity.',
      },
      {
        strong: 'Test Case & Scenario Design:',
        text: 'Authored and executed comprehensive test plans, test cases, and test scenarios mapped to business requirements and user stories.',
      },
      {
        strong: 'Defect Lifecycle in Jira:',
        text: 'Logged, documented, and tracked defects in Jira with reproducible steps and screenshots, collaborating with developers for fast resolution.',
      },
      {
        strong: 'Retesting & Stability Assurance:',
        text: 'Conducted rigorous smoke, sanity, and regression testing cycles across sprint releases to validate defect fixes and prevent regressions.',
      },
    ],
    tags: ['Postman', 'REST API Testing', 'Jira', 'Functional Testing', 'Regression Testing', 'Manual QA', 'Integration Testing'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Axess Technology Private Limited',
    location: 'Chennai, India',
    duration: 'March 2024 - June 2025',
    bullets: [
      {
        strong: 'Selenium UI Automation:',
        text: 'Engineered and executed automated UI test scripts using Selenium WebDriver with Java across core e-commerce workflows for Tractor Supply.',
      },
      {
        strong: 'Cucumber BDD Framework:',
        text: 'Developed and maintained automated feature scenarios using Cucumber (BDD) with Gherkin syntax for transparent business-readable test specifications.',
      },
      {
        strong: 'Reusable Automation Architecture:',
        text: 'Constructed modular, reusable test scripts following Page Object Model (POM) principles, streamlining test maintenance as UI updated.',
      },
      {
        strong: 'Continuous Quality & Regression:',
        text: 'Executed automated regression suites, analyzed execution logs, identified UI bugs, and verified fixes across sprint releases.',
      },
      {
        strong: 'Cross-Functional QA Collaboration:',
        text: 'Participated in sprint planning, defect triage, test execution, defect reporting, and retesting with development and product teams.',
      },
    ],
    tags: ['Selenium WebDriver', 'Java', 'Cucumber BDD', 'TestNG', 'Maven', 'Git', 'Jira', 'Regression Testing'],
  },
];

// Backward-compatible alias for existing imports
export const EXPERIENCE = EXPERIENCES[0];

export type ProjectCategory = 'ui' | 'api' | 'manual';

export interface Project {
  id: number;
  name: string;
  domain: string;
  type: string;
  category: ProjectCategory;
  testedModules: string;
  bullets: { strong: string; text: string }[];
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Learning Management System (LMS)',
    domain: 'EdTech / Enterprise Learning',
    type: 'Manual QA & E2E Testing',
    category: 'manual',
    testedModules: 'User Management, Course Enrollment, Session Scheduling, Attendance Tracking, Assessments & Notifications',
    bullets: [
      {
        strong: 'End-to-End Workflow Testing:',
        text: 'Performed comprehensive manual testing of an enterprise LMS application involving role-based access control and multi-user sessions.',
      },
      {
        strong: 'Core Feature Validation:',
        text: 'Tested critical modules including user onboarding, course enrollment workflows, session scheduling, attendance tracking, and assessments.',
      },
      {
        strong: 'Cross-Module Integration:',
        text: 'Executed functional, regression, UI, and integration testing across interconnected application modules to verify system stability.',
      },
      {
        strong: 'Test Case Authoring:',
        text: 'Authored and executed detailed test cases, test scenarios, and scripts strictly mapped to business requirements and user stories.',
      },
      {
        strong: 'Defect Lifecycle in Jira:',
        text: 'Identified, documented, and tracked defects in Jira, actively collaborating with developers and business teams for swift resolution.',
      },
      {
        strong: 'Retesting & Fix Verification:',
        text: 'Conducted systematic retesting and regression rounds on bug fixes to ensure complete defect resolution without side effects.',
      },
    ],
    stack: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'Jira', 'Test Case Design', 'STLC'],
  },
  {
    id: 2,
    name: 'People Accel - Web Application',
    domain: 'HRMS / Enterprise Workforce',
    type: 'API & Functional Testing',
    category: 'api',
    testedModules: 'Authentication, Biometric Login/Logout, Attendance Tracking, Payroll Processing, Holiday Configurations',
    bullets: [
      {
        strong: 'API Testing with Postman:',
        text: 'Validated RESTful APIs with Postman, verifying HTTP status codes, request/response JSON schemas, authentication tokens, and data integrity.',
      },
      {
        strong: 'Biometrics & Security Authentication:',
        text: 'Performed thorough functional validation of login workflows, biometric login/logout mechanisms, and role-based permissions.',
      },
      {
        strong: 'Payroll & Attendance Calculations:',
        text: 'Verified business logic for employee attendance logs, overtime calculations, holiday rules, and automated payroll generation.',
      },
      {
        strong: 'HR Workflows Coverage:',
        text: 'Validated end-to-end workflows for employee record management, leave requests/approvals, and holiday calendar configurations.',
      },
      {
        strong: 'Release Readiness & Defect Resolution:',
        text: 'Collaborated with cross-functional teams to identify root causes of defects and certify builds for production deployment.',
      },
    ],
    stack: ['Postman', 'REST API Testing', 'Status Code Validation', 'JSON Validation', 'Jira', 'Functional QA'],
  },
  {
    id: 3,
    name: 'E-Commerce Website - Tractor Supply',
    domain: 'E-Commerce / Retail',
    type: 'Selenium UI Automation & BDD',
    category: 'ui',
    testedModules: 'User Authentication, Product Search & Catalog, Cart & Checkout, Order Management, Payment Workflows',
    bullets: [
      {
        strong: 'Selenium WebDriver Automation:',
        text: 'Engineered automated UI regression scripts using Selenium WebDriver with Java to validate high-volume e-commerce customer journeys.',
      },
      {
        strong: 'Cucumber BDD Implementation:',
        text: 'Authored and maintained automated test scenarios using Cucumber BDD with Gherkin feature files for readable test specifications.',
      },
      {
        strong: 'Page Object Model Architecture:',
        text: 'Structured test suites with Page Object Model (POM) design pattern and Maven build tool, ensuring clean code reusability.',
      },
      {
        strong: 'Regression & Defect Lifecycle:',
        text: 'Identified, reported, and tracked UI defects in Jira; performed retesting and regression testing to safeguard release quality.',
      },
      {
        strong: 'Continuous Test Execution:',
        text: 'Executed TestNG test suites, analyzed test failures, and updated automation scripts in response to frequent application updates.',
      },
    ],
    stack: ['Selenium WebDriver', 'Java', 'Cucumber BDD', 'TestNG', 'Maven', 'Git', 'Jira', 'POM'],
  },
  {
    id: 4,
    name: 'Playwright Modern E2E Test Suite',
    domain: 'Modern Web Applications / SaaS',
    type: 'Playwright & TypeScript E2E',
    category: 'ui',
    testedModules: 'Dynamic Web Forms, Asynchronous Components, Interactive Dashboards, Cross-Browser Compatibility',
    bullets: [
      {
        strong: 'Playwright Test Automation:',
        text: 'Developed robust end-to-end automated test suites using Playwright with TypeScript for modern reactive web interfaces.',
      },
      {
        strong: 'Cross-Browser Parallel Execution:',
        text: 'Configured automated test runs across Chromium, Firefox, and WebKit rendering engines to guarantee cross-browser consistency.',
      },
      {
        strong: 'Auto-Wait & Resilient Selectors:',
        text: 'Leveraged built-in auto-waiting mechanisms and user-facing locator strategies to eliminate test flakiness on dynamic async content.',
      },
      {
        strong: 'Trace & Failure Debugging:',
        text: 'Utilized Playwright Trace Viewer, video recordings, and console logs to pinpoint failure causes and verify bug fixes rapidly.',
      },
    ],
    stack: ['Playwright', 'TypeScript', 'Cross-Browser Testing', 'E2E Automation', 'TestNG / Pytest Concepts'],
  },
];
