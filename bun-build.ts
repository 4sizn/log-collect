try {
  const result = await Bun.build({
    entrypoints: ["index.ts"],
    outdir: "./out",
    format: "esm",
    target: "browser",
  });
  console.log("build success", result);
} catch (error) {
  console.error(error);
}
