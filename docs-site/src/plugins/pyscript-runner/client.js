// src/plugins/pyscript-runner/client.js
if (typeof window !== "undefined") {
  const config = window.__PYSCRIPT_CONFIG__ || {};
  const cdn = config.cdn || "https://pyscript.net/releases/2026.3.1/core.js";
  const script = document.createElement("script");
  console.log("[pyscript/pre] Injecting script from CDN");
  script.type = "module";
  script.src = cdn;
  script.onload = () => {
    console.log("[pyscript/pre] CDN script loaded");
    const warmup = document.createElement("script");
    warmup.type = "py";
    warmup.textContent = "";
    document.body.appendChild(warmup);
  };
  script.onerror = (err) =>
    console.error("[pyscript/pre] Error while loading CDN script:", err);
  document.head.appendChild(script);
  document.addEventListener(
    "py:ready",
    () => {
      console.log("[pyscript/pre] Initializing script");
      window.__pyscript_ready = true;
    },
    { once: true },
  );
}
