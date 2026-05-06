// src/theme/CodeBlock/index.js
import { useState, useId, useEffect, useRef } from "react";
import OriginalCodeBlock from "@theme-original/CodeBlock";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { python } from "@codemirror/lang-python";

export default function CodeBlock(props) {
  const { className, children } = props;
  const lang = (className ?? "").replace("language-", "").toLowerCase();
  const isPython = lang === "python" || lang === "py";
  if (!isPython) return <OriginalCodeBlock {...props} />;
  return <PyBlock initialCode={String(children).trimEnd()} />;
}

const PHASES = [
  { pct: 15, label: "Descargando Pyodide…" },
  { pct: 35, label: "Cargando intérprete Python…" },
  { pct: 60, label: "Inicializando módulos…" },
  { pct: 80, label: "Preparando entorno…" },
  { pct: 92, label: "Arrancando Pyodide…" },
];

function isBrowserSupported() {
  try {
    return (
      typeof WebAssembly === "object" && typeof SharedArrayBuffer === "function"
    );
  } catch {
    return false;
  }
}

function PyBlock({ initialCode }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState(null);
  const [status, setStatus] = useState("idle");
  const uid = useId().replace(/:/g, "u");
  const outputId = `pyout-${uid}`;
  const observerRef = useRef(null);
  const runRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState(0);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isBrowserSupported());
  }, []);

  useEffect(() => {
    if (ready || !supported) return;
    if (phase >= PHASES.length - 1) return;
    const t = setTimeout(() => setPhase((p) => p + 1), 1800);
    return () => clearTimeout(t);
  }, [phase, ready, supported]);

  useEffect(() => {
    const handler = () => setReady(true);
    document.addEventListener("py:ready", handler, { once: true });
    if (window.__pyscript_ready) setReady(true);
    return () => document.removeEventListener("py:ready", handler);
  }, []);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  const run = () => {
    setStatus("running");
    setOutput("");
    runRef.current += 1;
    const runId = runRef.current;
    let target = document.getElementById(outputId);
    if (!target) {
      target = document.createElement("div");
      target.id = outputId;
      target.style.cssText = "display:none;white-space:pre-wrap;";
      document.body.appendChild(target);
    } else {
      target.innerHTML = "";
    }

    // Eliminar script anterior
    document
      .querySelectorAll(`[id^="pyscript-${uid}"]`)
      .forEach((el) => el.remove());

    const wrapped = `
import sys
from io import StringIO
from pyscript import display

_buf = StringIO()
_orig_out = sys.stdout
_orig_err = sys.stderr
sys.stdout = _buf
sys.stderr = _buf
try:
${code
  .split("\n")
  .map((l) => "    " + l)
  .join("\n")}
except Exception as _exc:
    print(f"\\n⚠ {type(_exc).__name__}: {_exc}")
finally:
    sys.stdout = _orig_out
    sys.stderr = _orig_err
    _out = _buf.getvalue()
    display(_out if _out else "(sin output)", target="${outputId}", append=False)
`;

    const script = document.createElement("script");
    script.type = "py";
    script.id = `pyscript-${uid}-${runId}`;
    script.setAttribute("target", outputId);
    script.textContent = wrapped;

    observerRef.current?.disconnect();

    const observer = new MutationObserver(() => {
      const text = target.textContent || target.innerText || "";
      if (text) {
        setOutput(text.trim());
        setStatus(text.includes("⚠") ? "error" : "done");
        observer.disconnect();
      }
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    observerRef.current = observer;

    setTimeout(() => {
      if (status === "running") {
        setOutput("⏱ Timeout: la ejecución tardó demasiado.");
        setStatus("error");
        observer.disconnect();
      }
    }, 15000);

    document.body.appendChild(script);
  };

  const { pct, label } = PHASES[phase];

  let btnLabel, btnStyle;
  if (!supported) {
    btnLabel = "⚠ Navegador no compatible";
    btnStyle = { ...s.btn, ...s.btnUnsupported };
  } else if (status === "running") {
    btnLabel = "⏳ Ejecutando…";
    btnStyle = { ...s.btn, ...s.btnBusy };
  } else if (!ready) {
    btnLabel = `⌛ ${label}`;
    btnStyle = { ...s.btn, ...s.btnWait };
  } else {
    btnLabel = "▶ Ejecutar";
    btnStyle = s.btn;
  }

  return (
    <div style={s.wrap}>
      <div style={s.header}>
        <span style={s.badge}>Python</span>
        <span style={s.hint}>editable</span>
      </div>

      <CodeMirror
        value={code}
        theme={dracula}
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        style={s.editor}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
      />

      {!ready && supported && (
        <div style={s.barTrack}>
          <div style={{ ...s.barFill, width: `${pct}%` }} />
        </div>
      )}

      {!supported && (
        <div style={s.unsupportedNote}>
          Tu navegador no soporta <strong>WebAssembly</strong> o{" "}
          <strong>SharedArrayBuffer</strong>, necesarios para ejecutar Python.
          Prueba con Chrome, Firefox o Edge actualizados.
        </div>
      )}

      <button
        style={btnStyle}
        onClick={run}
        disabled={status === "running" || !ready || !supported}
        title={
          !supported
            ? "Navegador no compatible con WebAssembly/SharedArrayBuffer"
            : !ready
              ? "Pyodide cargando… (puede tardar unos segundos la primera vez)"
              : "Ejecutar"
        }
      >
        {btnLabel}
      </button>

      {output !== null && (
        <div
          style={{ ...s.output, ...(status === "error" ? s.outputErr : {}) }}
        >
          <div style={s.outputLabel}>Output</div>
          <pre style={s.pre}>{output}</pre>
        </div>
      )}
    </div>
  );
}

const s = {
  wrap: {
    borderRadius: 8,
    border: "1px solid var(--ifm-color-emphasis-300)",
    overflow: "hidden",
    marginBottom: "1.5rem",
    fontFamily: "var(--ifm-font-family-monospace)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 12px",
    background: "var(--ifm-color-emphasis-100)",
    borderBottom: "1px solid var(--ifm-color-emphasis-200)",
  },

  badge: {
    fontSize: 11,
    fontWeight: 700,
    color: "var(--ifm-color-primary)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  hint: {
    fontSize: 11,
    color: "var(--ifm-color-emphasis-500)",
    fontStyle: "italic",
  },

  editor: {
    fontSize: "0.875rem",
  },

  barTrack: {
    height: 3,
    background: "var(--ifm-color-emphasis-200)",
  },

  barFill: {
    height: "100%",
    background: "var(--ifm-color-primary)",
    transition: "width 1.2s ease",
  },

  btn: {
    display: "block",
    width: "100%",
    padding: "7px 16px",
    background: "var(--ifm-color-primary)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    transition: "opacity 0.15s",
  },

  btnBusy: { opacity: 0.7, cursor: "not-allowed" },

  btnWait: { background: "var(--ifm-color-emphasis-400)", cursor: "wait" },

  btnUnsupported: {
    background: "var(--ifm-color-warning)",
    cursor: "not-allowed",
  },

  unsupportedNote: {
    padding: "6px 16px",
    fontSize: "0.78rem",
    color: "var(--ifm-color-warning-dark)",
    background: "var(--ifm-color-warning-contrast-background)",
    borderTop: "1px solid var(--ifm-color-warning-light)",
    fontFamily: "var(--ifm-font-family-base)",
  },

  output: {
    borderTop: "2px solid var(--ifm-color-primary-light)",
    background: "var(--ifm-pre-background)",
  },

  outputErr: { borderTop: "2px solid var(--ifm-color-danger)" },

  outputLabel: {
    padding: "4px 12px 0",
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--ifm-color-emphasis-500)",
  },

  pre: {
    margin: 0,
    padding: "6px 16px 12px",
    background: "transparent",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    fontSize: "0.875rem",
  },
};
