// src/plugins/pyscript-runner/client.js
if (typeof window !== "undefined") {
  console.log("[pyscript/pre] Injecting script from CDN");
  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://pyscript.net/releases/2026.3.1/core.js";
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
