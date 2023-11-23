import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuePage = () => {
  return (
    <Link href="/issues/new">
      <Button>CREATE NEW ISSUE</Button>
    </Link>
  );
};

export default IssuePage;
