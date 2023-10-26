import React, {useState} from "react";

import CreateUserApp from "./user/scripts/CreateApp.jsx";
import CreateSuperAdminApp from "./super-admin/scripts/CreateApp.jsx";


export default function CreateApp() {

  return (
    <>
      <CreateUserApp/>
      <CreateSuperAdminApp/>
    </>
  );
} 