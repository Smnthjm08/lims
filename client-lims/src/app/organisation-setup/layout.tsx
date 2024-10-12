import { Metadata } from "next";
// import { Announcement } from "@/components/globals/announcements"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/globals/page-header";
import OrganisationSetup from "@/components/globals/simple-appbar";

export const metadata: Metadata = {
  title: "Building Blocks.",
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
};

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative">
      <OrganisationSetup />
      <PageHeader className="mx-10 ">
        {/* <Announcement /> */}
        <PageHeaderHeading>Organisation Setup</PageHeaderHeading>
        <PageHeaderDescription>
          Set up your organization details and preferences to get started.
        </PageHeaderDescription>
        
      </PageHeader>
      <section id="blocks" className="scroll-mt-20">
        {children}
      </section>
    </div>
  );
}
