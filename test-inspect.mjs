// Test: what exactly does the live server return for the login endpoint with proper TanStack format?
async function testLive() {
  // The client sends the loginAdmin call with seroval-encoded data
  // Let's check what error we get from a properly formatted POST

  // First let's check what the live CSS file hash is to confirm which build is deployed
  const adminPage = await fetch("https://hegxcorp.com/admin");
  const html = await adminPage.text();

  // Get CSS hash
  const cssMatch = html.match(/href="([^"]*styles[^"]*\.css)"/);
  console.log("Live CSS:", cssMatch?.[1]);

  // Get JS hash
  const jsMatch = html.match(/src="([^"]*index[^"]*\.js)"/);
  console.log("Live JS:", jsMatch?.[1]);

  // Check the response headers for deployment info
  console.log("\nResponse headers:");
  for (const [k, v] of adminPage.headers.entries()) {
    console.log(`  ${k}: ${v}`);
  }

  // Now try directly calling the admin login with the exact content type the browser sends
  // The error happens BEFORE the handler runs (Seroval Error step 3 = deserialization)
  // This means the deployed version might be using a DIFFERENT seroval format than the client JS

  // Let's check if the live server has a mismatch between client and server builds
  // The live client JS = index-DS_z19ah.js
  // Check if there's an index-Ca9W6PHB.js (our latest build)
  const latestJs = await fetch("https://hegxcorp.com/assets/index-Ca9W6PHB.js");
  console.log("\nLatest build JS (index-Ca9W6PHB.js) status:", latestJs.status);

  const oldJs = await fetch("https://hegxcorp.com/assets/index-BouNJBRY.js");
  console.log("Our build JS (index-BouNJBRY.js) status:", oldJs.status);
}

testLive().catch(console.error);
