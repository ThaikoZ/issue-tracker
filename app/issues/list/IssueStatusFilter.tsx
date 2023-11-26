import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const IssueActions: { name: string; value?: Status }[] = [
  { name: "All" },
  { name: "Open", value: "OPEN" },
  { name: "In Progress", value: "IN_PROGRESS" },
  { name: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  // TODO: const searchParams = useSearchParams();

  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status ? `?status=${status}` : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        <Select.Group>
          {IssueActions.map((action) => (
            <Select.Item key={action.name} value={action.value || ""}>
              {action.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
