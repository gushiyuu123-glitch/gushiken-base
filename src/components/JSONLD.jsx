// src/components/JSONLD.jsx
import { Helmet } from "react-helmet-async";

function normalize(data) {
  if (!data) return [];

  const arr = Array.isArray(data) ? data : [data];

  return arr.filter((item) => {
    return item && typeof item === "object";
  });
}

function safeJsonStringify(data) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export default function JSONLD({ data }) {
  const scripts = normalize(data);

  if (!scripts.length) return null;

  return (
    <Helmet>
      {scripts.map((obj, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonStringify(obj),
          }}
        />
      ))}
    </Helmet>
  );
}