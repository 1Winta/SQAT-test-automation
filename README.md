# SQAT Playwright Project

This project uses [Playwright](https://playwright.dev/) for end-to-end testing. Below are the steps to set up and run the tests locally and in a GitLab CI environment.

---

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v16 or later)
- **npm** or **pnpm** (as specified in `package.json`)
- **Git** (for version control)

---

## Local Setup

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd sqat-test-automation
   ```

2. **Install Dependencies**:
   Use `pnpm` (as specified in `package.json`) or `npm`:
   ```bash
   pnpm install
   ```

3. **Start the Local Server**:
   Use the `start` script defined in `package.json`:
   ```bash
   pnpm start
   ```
   This will start a live server on `http://localhost:5500`.

4. **Run Tests**:
   Execute the Playwright tests:
   ```bash
   npx playwright test
   ```
   This will run all tests in the `tests` directory.

5. **Debug Tests** (Optional):
   To debug tests with a browser UI:
   ```bash
   npx playwright test --debug
   ```

---

## GitLab CI Setup

The project is configured to run tests in GitLab CI using the `.gitlab-ci.yml` file.

### Steps in CI Pipeline

1. **Install Dependencies**:
   The pipeline installs all dependencies using:
   ```bash
   npm ci
   ```

2. **Install Playwright Browsers**:
   Playwright browsers are installed with:
   ```bash
   npx playwright install --with-deps
   ```

3. **Run Tests**:
   The tests are executed using:
   ```bash
   npx playwright test
   ```

### GitLab CI Configuration

The `.gitlab-ci.yml` file is already configured as follows:
```yaml
stages:
  - test

test-e2e:
  image: mcr.microsoft.com/playwright:v1.43.1-jammy
  stage: test
  script:
    - npm ci
    - npx playwright install --with-deps
    - npx playwright test
```

---

## Directory Structure

```
sqat-test-automation/
├── public/                # Static files served by the server
│   ├── index.html         # Main HTML file
│   └── ...                # Other assets (CSS, JS, etc.)
├── tests/                 # Playwright test files
│   └── login.spec.ts      # Example test file
├── .gitlab-ci.yml         # GitLab CI configuration
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

---

## Troubleshooting

### Common Issues

1. **Server Not Reachable**:
   - Ensure the `public` directory exists and contains `index.html`.
   - Verify the server is running on the correct port (`5500`).

2. **Port Conflicts**:
   - If port `5500` is already in use, stop any other processes using the port or change the port in `playwright.config.ts` and `package.json`.

3. **Timeouts in CI**:
   - Increase the `webServer.timeout` in `playwright.config.ts` if the server takes longer to start in CI.

---

## Additional Commands

### Run a Specific Test File
```bash
npx playwright test tests/login.spec.ts
```

### Generate Playwright Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

---

