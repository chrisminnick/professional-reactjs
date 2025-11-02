#!/usr/bin/env node

/**
 * Build script for Professional ReactJS Course
 *
 * This script recreates the distribution directory from scratch by:
 * 1. Completely removing and recreating the dist directory (or sibling public repo if present)
 * 2. Generating PDFs from markdown source directories using the shared PDF generator
 *    - PDF names are automatically assigned from directory names
 *    - Combines markdown files from directories
 *    - Handles title pages and table of contents
 *    - Ignores README files automatically
 * 3. Copying fresh setup-test, demos, starter, solutions, and solutions-typescript from admin repo
 * 4. Creating labs directories with README stubs based on solutions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const ADMIN_ROOT = __dirname;

// Prefer sibling public repo if it exists, otherwise use local dist/
// If you keep a separate public repo next to this folder, name it "professional-reactjs-public"
const SIBLING_PUBLIC = path.resolve(
  ADMIN_ROOT,
  '..',
  'professional-reactjs-public'
);
const DEFAULT_DIST = path.join(ADMIN_ROOT, 'dist');
const PUBLIC_ROOT = fs.existsSync(SIBLING_PUBLIC)
  ? SIBLING_PUBLIC
  : DEFAULT_DIST;

// Create separate directories for student and instructor materials
const STUDENT_ROOT = path.join(PUBLIC_ROOT, 'dist-student');
const INSTRUCTOR_ROOT = path.join(PUBLIC_ROOT, 'dist-instructor');

// Resolve PDF generator path (prefer shared root-level generator, fallback to legacy local path)
function getPdfGeneratorPath() {
  const SHARED = path.resolve(
    ADMIN_ROOT,
    '..',
    'pdf-generator',
    'scripts',
    'generate_pdf.py'
  );
  const LEGACY = path.resolve(
    ADMIN_ROOT,
    'pdf-generator',
    'scripts',
    'generate_pdf.py'
  );
  if (fs.existsSync(SHARED)) return SHARED;
  if (fs.existsSync(LEGACY)) return LEGACY;
  console.error('❌ PDF generator not found. Checked:');
  console.error('   ', SHARED);
  console.error('   ', LEGACY);
  process.exit(1);
}

console.log('🏗️  Professional ReactJS - Build Script');
console.log('=======================================');

/**
 * Copy directory recursively
 */
function copyDirectory(src, dest) {
  console.log(`📋 Copying ${path.basename(src)}/ → ${path.basename(dest)}/`);

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Copy using system cp command for better handling of symlinks, permissions, etc.
  try {
    execSync(`cp -R "${src}/." "${dest}/"`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Error copying ${src} to ${dest}:`, error.message);
    process.exit(1);
  }
}

/**
 * Execute shell command with error handling
 */
function executeCommand(command, description) {
  console.log(`⚡ ${description}...`);
  try {
    execSync(command, {
      stdio: 'inherit',
      cwd: ADMIN_ROOT,
    });
  } catch (error) {
    console.error(`❌ Error ${description.toLowerCase()}:`, error.message);
    process.exit(1);
  }
}

/**
 * Generate PDF from markdown directory
 */
function generatePdf(inputDir, outputName, hasInstructorNotes = true) {
  if (!fs.existsSync(inputDir)) {
    console.log(
      `⚠️  Directory not found: ${path.basename(
        inputDir
      )}, skipping PDF generation`
    );
    return;
  }

  const pdfGeneratorPath = getPdfGeneratorPath();

  if (hasInstructorNotes) {
    // Generate both student and instructor versions
    console.log(`📄 Generating Student PDF: ${outputName}.pdf`);
    const studentOutputPath = path.join(STUDENT_ROOT, `${outputName}.pdf`);
    const studentCmd = `python3 "${pdfGeneratorPath}" "${inputDir}" -o "${studentOutputPath}"`;

    try {
      execSync(studentCmd, { stdio: 'inherit' });
      console.log(`   ✅ Generated student version: ${outputName}.pdf`);
    } catch (error) {
      console.error(
        `❌ Student PDF generation failed for ${outputName}:`,
        error.message
      );
      process.exit(1);
    }

    console.log(`📄 Generating Instructor PDF: ${outputName}.pdf`);
    const instructorOutputPath = path.join(
      INSTRUCTOR_ROOT,
      `${outputName}.pdf`
    );
    const instructorCmd = `python3 "${pdfGeneratorPath}" "${inputDir}" -o "${instructorOutputPath}" --instructor`;

    try {
      execSync(instructorCmd, { stdio: 'inherit' });
      console.log(`   ✅ Generated instructor version: ${outputName}.pdf`);
    } catch (error) {
      console.error(
        `❌ Instructor PDF generation failed for ${outputName}:`,
        error.message
      );
      process.exit(1);
    }
  } else {
    // Generate single version (copy to both directories since no instructor notes)
    console.log(`📄 Generating PDF: ${outputName}.pdf`);
    const studentOutputPath = path.join(STUDENT_ROOT, `${outputName}.pdf`);
    const cmd = `python3 "${pdfGeneratorPath}" "${inputDir}" -o "${studentOutputPath}"`;

    try {
      execSync(cmd, { stdio: 'inherit' });
      console.log(`   ✅ Generated ${outputName}.pdf`);

      // Copy to instructor directory as well
      const instructorOutputPath = path.join(
        INSTRUCTOR_ROOT,
        `${outputName}.pdf`
      );
      fs.copyFileSync(studentOutputPath, instructorOutputPath);
      console.log(`   📋 Copied to instructor directory`);
    } catch (error) {
      console.error(
        `❌ PDF generation failed for ${outputName}:`,
        error.message
      );
      process.exit(1);
    }
  }
}

/**
 * Main build process
 */
function main() {
  try {
    // Verify public repo exists or create dist
    if (!fs.existsSync(PUBLIC_ROOT)) {
      console.error(`❌ Destination not found: ${PUBLIC_ROOT}`);
      console.log(`📁 Creating distribution directory...`);
      fs.mkdirSync(PUBLIC_ROOT, { recursive: true });
    }

    console.log(`📂 Admin repo: ${ADMIN_ROOT}`);
    console.log('');

    // Step 1: Clean distribution directory
    console.log('🧹 STEP 1: Cleaning distribution directory');
    console.log('=====================================');

    // Remove entire dist/public directory to ensure clean build
    if (fs.existsSync(PUBLIC_ROOT)) {
      console.log('🗑️  Removing entire dist/ directory');
      fs.rmSync(PUBLIC_ROOT, { recursive: true, force: true });
    }

    // Recreate empty dist directory
    console.log('📁 Creating fresh dist/ directory');
    fs.mkdirSync(PUBLIC_ROOT, { recursive: true });

    // Create separate directories for student and instructor materials
    fs.mkdirSync(STUDENT_ROOT, { recursive: true });
    fs.mkdirSync(INSTRUCTOR_ROOT, { recursive: true });

    console.log('');

    // Step 2: Generate PDFs
    console.log('📄 STEP 2: Generating PDFs');
    console.log('==========================');

    // Discover source directories dynamically to tolerate version/name changes
    const allDirs = fs
      .readdirSync(ADMIN_ROOT, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    const findFirst = (re) => allDirs.find((d) => re.test(d));

    const slidesDir = findFirst(/^professional-react.*-slides-/);
    const labsDir = findFirst(/^professional-react.*-labs-/);
    const setupDir = allDirs.includes('setup-and-outline')
      ? 'setup-and-outline'
      : null;

    if (slidesDir) {
      generatePdf(path.join(ADMIN_ROOT, slidesDir), slidesDir, true);
    }

    if (labsDir) {
      generatePdf(path.join(ADMIN_ROOT, labsDir), labsDir, true);
    }

    if (setupDir) {
      generatePdf(path.join(ADMIN_ROOT, setupDir), 'setup-and-outline', false);
    }

    console.log('');

    // Step 3: Copy fresh content
    console.log('📋 STEP 3: Copying fresh content');
    console.log('================================');

    // Copy setup-test
    const adminSetupTest = path.join(ADMIN_ROOT, 'setup-test');
    const publicSetupTest = path.join(PUBLIC_ROOT, 'setup-test');
    if (fs.existsSync(adminSetupTest)) {
      copyDirectory(adminSetupTest, publicSetupTest);
    } else {
      console.log('⚠️  Warning: setup-test folder not found in admin repo');
    }

    // Copy demos
    const adminDemos = path.join(ADMIN_ROOT, 'demos');
    const publicDemos = path.join(PUBLIC_ROOT, 'demos');
    if (fs.existsSync(adminDemos)) {
      copyDirectory(adminDemos, publicDemos);
    } else {
      console.log('⚠️  Warning: demos folder not found in admin repo');
    }

    // Copy starter
    const adminStarter = path.join(ADMIN_ROOT, 'starter');
    const publicStarter = path.join(PUBLIC_ROOT, 'starter');
    if (fs.existsSync(adminStarter)) {
      copyDirectory(adminStarter, publicStarter);
    } else {
      console.log('⚠️  Warning: starter folder not found in admin repo');
    }

    // Copy solutions (JS)
    const adminSolutions = path.join(ADMIN_ROOT, 'solutions');
    const publicSolutions = path.join(PUBLIC_ROOT, 'solutions');
    if (fs.existsSync(adminSolutions)) {
      copyDirectory(adminSolutions, publicSolutions);
    } else {
      console.log('⚠️  Warning: solutions folder not found in admin repo');
    }

    // Copy solutions (TypeScript)
    const adminSolutionsTs = path.join(ADMIN_ROOT, 'solutions-typescript');
    const publicSolutionsTs = path.join(PUBLIC_ROOT, 'solutions-typescript');
    if (fs.existsSync(adminSolutionsTs)) {
      copyDirectory(adminSolutionsTs, publicSolutionsTs);
    } else {
      console.log('ℹ️  No solutions-typescript folder found');
    }

    // Create labs directory structure from solutions
    const publicLabs = path.join(PUBLIC_ROOT, 'labs');
    if (fs.existsSync(adminSolutions)) {
      fs.mkdirSync(publicLabs, { recursive: true });

      // Create lab directories based on solution names
      const solutionDirs = fs
        .readdirSync(adminSolutions, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      solutionDirs.forEach((solutionDir, index) => {
        const labNumber = String(index + 1).padStart(2, '0');
        const labDir = path.join(publicLabs, `lab${labNumber}`);
        fs.mkdirSync(labDir, { recursive: true });

        // Create a basic README.md for each lab
        const readmeContent = `# Lab ${index + 1}: ${solutionDir
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase())}

See the course lab instructions PDF for detailed instructions.

## Getting Started

1. Read the lab instructions in the course PDF
2. Complete the exercises in this directory
3. Check your solution against the provided solution when finished
`;
        fs.writeFileSync(path.join(labDir, 'README.md'), readmeContent);
      });

      console.log(`📋 Created ${solutionDirs.length} lab directories (JS)`);
    }

    // Create labs-typescript directory structure from TS solutions
    const publicLabsTs = path.join(PUBLIC_ROOT, 'labs-typescript');
    if (fs.existsSync(adminSolutionsTs)) {
      fs.mkdirSync(publicLabsTs, { recursive: true });

      const solutionDirsTs = fs
        .readdirSync(adminSolutionsTs, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      solutionDirsTs.forEach((solutionDir, index) => {
        const labNumber = String(index + 1).padStart(2, '0');
        const labDir = path.join(publicLabsTs, `lab${labNumber}`);
        fs.mkdirSync(labDir, { recursive: true });
        const readmeContent = `# Lab (TypeScript) ${index + 1}: ${solutionDir
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase())}

See the course lab instructions PDF for detailed instructions.
`;
        fs.writeFileSync(path.join(labDir, 'README.md'), readmeContent);
      });

      console.log(`📋 Created ${solutionDirsTs.length} lab directories (TS)`);
    }

    console.log('');

    // Step 4: Verify results
    console.log('✅ STEP 4: Build verification');
    console.log('=============================');

    // Check for generated PDFs (names based on discovered directory names)
    const expectedPdfs = [slidesDir, labsDir, setupDir]
      .filter(Boolean)
      .map((cfg) => `${cfg}.pdf`);

    expectedPdfs.forEach((pdfName) => {
      const studentPdfPath = path.join(STUDENT_ROOT, pdfName);
      const instructorPdfPath = path.join(INSTRUCTOR_ROOT, pdfName);
      const displayName = pdfName.replace('.pdf', '').replace(/-/g, ' ');

      if (fs.existsSync(studentPdfPath)) {
        const pdfSize = (
          fs.statSync(studentPdfPath).size /
          (1024 * 1024)
        ).toFixed(1);
        console.log(`✅ ${displayName} (student): ${pdfSize}M`);
      } else {
        console.log(`❌ ${displayName} (student): Not found`);
      }

      if (fs.existsSync(instructorPdfPath)) {
        const pdfSize = (
          fs.statSync(instructorPdfPath).size /
          (1024 * 1024)
        ).toFixed(1);
        console.log(`✅ ${displayName} (instructor): ${pdfSize}M`);
      } else {
        console.log(`❌ ${displayName} (instructor): Not found`);
      }
    });

    const checks = [
      { name: 'setup-test', path: publicSetupTest },
      { name: 'demos', path: publicDemos },
      { name: 'starter', path: publicStarter },
      { name: 'solutions', path: publicSolutions },
      { name: 'solutions-typescript', path: publicSolutionsTs },
      { name: 'labs', path: publicLabs },
      { name: 'labs-typescript', path: publicLabsTs },
    ];

    checks.forEach((c) => {
      if (c.path && fs.existsSync(c.path)) {
        const count = fs.readdirSync(c.path).length;
        console.log(`✅ ${c.name}/ present (${count} items)`);
      } else {
        console.log(`ℹ️  ${c.name}/ not created`);
      }
    });

    console.log('');
    console.log('🎉 BUILD COMPLETE!');
    console.log('==================');
    console.log(`📁 Public repository ready at: ${PUBLIC_ROOT}`);
    console.log('📁 Student materials: /dist-student/');
    console.log('📁 Instructor materials: /dist-instructor/');
    console.log('');
    console.log('💡 Instructor materials include all instructor notes');
    console.log('💡 Student materials have instructor notes filtered out');
    console.log('');
    console.log('Next steps:');
    console.log('1. Review the generated files');
    console.log('2. Commit and push the public repository');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run the build process
if (require.main === module) {
  main();
}

module.exports = { main };
