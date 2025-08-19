"use client";
import { useEffect, useState } from "react";

export default function EventExamples() {
  const [clicks, setClicks] = useState(0);
  const [mountCount, setMountCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedClicks = localStorage.getItem("event_clicks");
    const storedMount = localStorage.getItem("event_mountCount");
    setClicks(storedClicks ? parseInt(storedClicks, 10) : 0);
    setMountCount(storedMount ? parseInt(storedMount, 10) : 0);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("event_clicks", clicks);
  }, [clicks, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("event_mountCount", mountCount);
  }, [mountCount, hydrated]);

  useEffect(() => {
    if (hydrated) setMountCount((c) => c + 1);
  }, [hydrated]);

  if (!hydrated) return <div>Cargando...</div>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 20,
        borderRadius: 8,
        marginTop: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Ejemplo de Programación Orientada a Eventos</h2>
      <button onClick={() => setClicks(clicks + 1)} style={{ margin: 8 }}>
        Clicks: {clicks}
      </button>
      <div>
        Montado del componente: {mountCount} {mountCount > 1 ? "veces" : "vez"}
      </div>
    </div>
  );
}
