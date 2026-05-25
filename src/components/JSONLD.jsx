// src/components/JSONLD.jsx
import { Helmet } from "react-helmet-async";

const normalize = (data) => {
  if (!data) return [];
  const arr = Array.isArray(data) ? data : [data];
  return arr.filter(Boolean);
};

export default function JSONLD({ data }) {
  const scripts = normalize(data);
  if (!scripts.length) return null;

  return (
    <Helmet>
      {scripts.map((obj, i) => (
        <script
          key={`jsonld-${i}`}
          type="application/ld+json"
          // JSON.stringify は安全に文字列化するだけ（XSSはここでは基本起きない）
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </Helmet>
  );
}