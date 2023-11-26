import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import { Metadata } from "next";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export const metadata: Metadata = {
  title: "Issue Tracker - Add new issue",
  description: "Add new project issue",
};

export default NewIssuePage;
