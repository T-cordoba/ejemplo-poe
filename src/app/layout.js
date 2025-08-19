
import "./globals.css";

export const metadata = {
  title: "Ejemplo Programación Orientada a Eventos",
  description: "Una página de ejemplo para demostrar como es una aplicación orientada a eventos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
