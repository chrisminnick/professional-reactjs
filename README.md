# Professional ReactJS (Admin)

Source materials and build scripts for the Professional ReactJS course by Chris Minnick.

This repository uses the shared markdown → PDF build system, just like the other courses in this monorepo.

## Build outputs

- PDFs are generated from the markdown directories:
  - `professional-react-slides-<version>/`
  - `professional-react-labs-<version>/`
- Built files and course assets are written to either:
  - A sibling `professional-reactjs-public/` repo if it exists next to this folder, or
  - A local `dist/` directory here.

## Generate PDFs and prepare public artifacts

1.  Ensure Python 3 is installed and the shared `pdf-generator` exists at the repo root.
2.  From this folder, run:

    - Install nothing required; simply run the build script:

            npm run build

    The script will:

    - Clean the distribution folder
    - Generate PDFs for Slides and Labs
    - Copy `setup-test/`, `demos/`, `starter/`, `solutions/`, and `solutions-typescript/`
    - Create `labs/` and `labs-typescript/` placeholders with README.md files

## To Test Whether Your Computer is Set Up Correctly

1.  Change the current directory to `setup-test`.

        `cd setup-test`

1.  Install the dependencies.

    `npm install`

1.  Run the test script.

    `npm test`

If the tests pass, you're ready to move on.
