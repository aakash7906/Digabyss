import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { toast } from "sonner"

export function SettingsPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Settings updated successfully!")
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Workspace Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account profile, workspace details, and preferences.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="border border-border/60">
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>Update your personal info and email address.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel htmlFor="display-name">Display Name</FieldLabel>
              <Input id="display-name" defaultValue="Harsh" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email-addr">Email Address</FieldLabel>
              <Input id="email-addr" type="email" defaultValue="user@digabyss.com" />
            </Field>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader>
            <CardTitle>Organization Settings</CardTitle>
            <CardDescription>Configure your team or organization workspace.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel htmlFor="org-name">Organization Name</FieldLabel>
              <Input id="org-name" defaultValue="DigAbyss Team" />
            </Field>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  )
}
