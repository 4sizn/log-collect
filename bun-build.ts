try {
  const result = await Bun.build({
    entrypoints: ["src/Console/index.ts"],
    outdir: "./dist",
    format: "esm",
    target: "browser",
  });
  console.log("build success", result);
} catch (error) {
  console.error(error);
}
