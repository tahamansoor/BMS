# Contributing to BMS

We're excited that you're interested in contributing to the BMS project! 

## Base Branch

The primary branch for development is `develop`. Please always base your work on this branch.

## Making Changes

1. Fork the repository to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch from the `develop` branch:
     ```bash
     git checkout -b <your-branch-name> develop
     ```
4. Make your changes and commit them with clear and descriptive messages.
5. Follow the commit message format: `<type>(<scope>): <description>`
    - **Types:** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`
    - **Scope:** The affected area of the code (optional)
    - **Description:** A concise summary of the changes
    - **Example:** `feat(auth): added login functionality`

## Submitting a Pull Request

1. Push your changes to your fork:
     ```bash
     git push origin <your-branch-name>
     
2. Open a pull request from your branch to the `develop` branch of the main repository.
3. Provide a clear title and description for your pull request, explaining the changes you made and why.
4. If you've addressed any issues, mention them in the pull request description using keywords like `Closes #<issue-number>`.

## Commit Message Format

We use a specific commit message format to keep the project's history organized and informative. Please follow this format:
