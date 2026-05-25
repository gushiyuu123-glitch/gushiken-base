// src/components/Title.jsx
import { Helmet } from "react-helmet-async";

const SITE_NAME = "GUSHIKEN DESIGN";

export default function Title({ text, mode = "suffix" }) {
  if (!text) return null;

  const full =
    mode === "raw" || String(text).includes(SITE_NAME)
      ? text
      : `${text} | ${SITE_NAME}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{full}</title>
    </Helmet>
  );
}