import { Button, Dialog } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    // <Dialog.Root>
    //     <Dialog.Trigger>
    <Button color="red">Delete Issue</Button>
    //    </Dialog.Trigger>
    //   <Dialog.Content style={{ maxWidth: 450 }}>
    //     <Dialog.Title>Delete Issue</Dialog.Title>
    //     <Dialog.Description size="2" mb="4">
    //       Are you sure you want to delete this issue?
    //     </Dialog.Description>
    //     <Dialog.Close>
    //       <Dialog.Close>
    //         <Button variant="soft" color="gray">
    //           Cancel
    //         </Button>
    //       </Dialog.Close>
    //       <Button color="red">Delete</Button>
    //     </Dialog.Close>
    //   </Dialog.Content>
    // </Dialog.Root>
  );
};

export default DeleteIssueButton;
