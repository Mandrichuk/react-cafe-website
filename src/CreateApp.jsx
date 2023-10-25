import React, {useState} from "react";

import CreateUserApp from "./user/scripts/CreateApp.jsx";
import CreateSuperAdminApp from "./super-admin/scripts/CreateApp.jsx";


export default function CreateApp() {
  console.log(window.location.href);

  const [currentLink, setCurrentLink] = useState("");

  return (
    <>
      <CreateUserApp />
      <CreateSuperAdminApp />
    </>
  );
} 