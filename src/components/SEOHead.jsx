// src/components/SEOHead.jsx
import { useEffect } from "react";

export default function SEOHead({ title, description, keywords, ogImage, url }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:image", ogImage);
    setProperty("og:url", url);
  }, [title, description, keywords, ogImage, url]);

  return null;
}
