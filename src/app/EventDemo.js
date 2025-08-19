"use client";
import { useEffect, useState } from "react";

export default function EventDemo() {
  const [clicks, setClicks] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const [customMsg, setCustomMsg] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedClicks = localStorage.getItem("eventdemo_clicks");
    const storedRender = localStorage.getItem("eventdemo_renderCount");
    setClicks(storedClicks ? parseInt(storedClicks, 10) : 0);
    setRenderCount(storedRender ? parseInt(storedRender, 10) : 0);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("eventdemo_clicks", clicks);
  }, [clicks, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("eventdemo_renderCount", renderCount);
  }, [renderCount, hydrated]);

  useEffect(() => {
    if (hydrated) setRenderCount((c) => c + 1);
  }, [hydrated]);

  const handleCustomEvent = async () => {
    const res = await fetch("/api/custom-event?msg=¡Hola desde Next.js!", { method: "POST" });
    const data = await res.json();
    setCustomMsg(data.status);
  };

  if (!hydrated) return <div>Cargando...</div>;

return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8, marginTop: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h2>Ejemplo de Programación Orientada a Eventos</h2>
        <button onClick={() => setClicks(clicks + 1)} style={{ margin: 8 }}>
            Clicks: {clicks}
        </button>
        <div>Renderizado de componente: {renderCount} vez/veces</div>
        <button onClick={handleCustomEvent} style={{ margin: 8 }}>
            Disparar evento personalizado (Node.js)
        </button>
        {customMsg && <div style={{ color: "green" }}>{customMsg}</div>}
    </div>
);
}
