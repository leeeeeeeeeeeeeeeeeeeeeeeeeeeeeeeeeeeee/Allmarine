const fs = require("fs");
const path = require("path");

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const basePath = rawBasePath
  ? (rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`).replace(/\/$/, "")
  : "";

const outDir = path.join(__dirname, "..", "out");
const dest = path.join(outDir, ".htaccess");

const basePrefix = basePath ? `${basePath}/` : "/";

const htaccessContent = `# Apache configuration for Next.js static export
ErrorDocument 404 ${basePrefix}404.html

RewriteEngine On
RewriteBase ${basePrefix}

# Redirect non-trailing-slash URLs to trailing-slash (matches next.config trailingSlash)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*[^/])$ ${basePrefix}$1/ [L,R=301]
`;

if (fs.existsSync(outDir)) {
  fs.writeFileSync(dest, htaccessContent.trim() + "\n", "utf8");
  console.log(`Generated .htaccess in out/ (RewriteBase: ${basePrefix})`);
} else {
  console.warn("Skipped .htaccess generation — out/ directory not found");
}
