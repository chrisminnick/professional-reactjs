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

    // Configure templates for different document types (only include if found)
    const pdfConfigurations = [];
    if (slidesDir) {
      pdfConfigurations.push({
        dir: slidesDir,
        template: 'default', // template for slides
        description: 'Course slides with modern styling',
      });
    }
    if (labsDir) {
      pdfConfigurations.push({
        dir: labsDir,
        template: 'default', // template for labs
        description: 'Lab instructions with professional styling',
      });
    }
    if (setupDir) {
      pdfConfigurations.push({
        dir: setupDir,
        template: 'minimal', // minimal template for setup
        description: 'Setup guide with clean academic styling',
        noToc: true, // no table of contents for setup guides
      });
    }

    const generatorPath = getPdfGeneratorPath();
    pdfConfigurations.forEach((config) => {
      const dirPath = path.join(ADMIN_ROOT, config.dir);
      if (fs.existsSync(dirPath)) {
        console.log(
          `📄 Generating PDF for: ${config.dir} (${config.template} template)`
        );
        console.log(`   ${config.description}`);
        const noTocFlag = config.noToc ? ' --no-toc' : '';
        executeCommand(
          `python3 "${generatorPath}" "${config.dir}/" --dist-dir "${PUBLIC_ROOT}" --template ${config.template}${noTocFlag}`,
          `Processing ${config.dir} with ${config.template} template`
        );
      } else {
        console.log(`⚠️  Directory not found: ${config.dir}`);
      }
    });

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
      const pdfPath = path.join(PUBLIC_ROOT, pdfName);
      if (fs.existsSync(pdfPath)) {
        const pdfSize = (fs.statSync(pdfPath).size / (1024 * 1024)).toFixed(1);
        const displayName = pdfName.replace('.pdf', '').replace(/-/g, ' ');
        console.log(`✅ ${displayName}: ${pdfSize}M`);
      } else {
        const displayName = pdfName.replace('.pdf', '').replace(/-/g, ' ');
        console.log(`❌ ${displayName}: Not found`);
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
