import React, { useEffect } from "react";

export default function TabTitle({ title }) {
  useEffect(() => {
    document.title = title;
    console.log(title);
  }, [title, window.location.pathname]);

  return null;
}