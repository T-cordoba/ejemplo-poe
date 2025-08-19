import { NextResponse } from "next/server";
import { triggerCustomEvent } from "@/events/customEvent";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const msg = searchParams.get("msg") || "Mensaje por defecto";
  triggerCustomEvent(msg);
  return NextResponse.json({ status: "Evento personalizado disparado en el backend" });
}
