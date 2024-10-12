"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  OrgansationSetupSchema,
  OrgansationSetupSchemaType,
} from "@/validators/organisation-validators";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

export function InputForm() {
  const form = useForm<OrgansationSetupSchemaType>({
    resolver: zodResolver(OrgansationSetupSchema),
    defaultValues: {
      organisation: "",
      organisationDescription: "",
      organisationLogo: {
        file: null,
        name: "",
      },
    },
  });

  function onSubmit(data: OrgansationSetupSchemaType) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="organisation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation</FormLabel>
              <FormControl>
                <Input placeholder="Organisation name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organisationLogo.file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation Logo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png, image/svg+xml"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              <FormDescription>
                Upload a logo file (JPEG, JPG, PNG, or SVG).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organisationDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief description of the organisation"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A brief description of the organisation.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="mr-2">
            Save and Continue
          </Button>
          <Button variant={"outline"} type="submit">
            Setup
          </Button>
        </div>
      </form>
    </Form>
  );
}
