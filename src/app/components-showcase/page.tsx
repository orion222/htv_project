"use client"

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
} from "@/components/ui/menubar"

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Components Showcase</h1>
          <p className="text-muted-foreground">
            Reference guide for all available shadcn components
          </p>
        </div>

        {/* Card Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>
                    This is a simple card with header and description
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Card content goes here. You can add any content you want.
                  </p>
                </CardContent>
              </Card>

              {/* Card with Footer */}
              <Card>
                <CardHeader>
                  <CardTitle>Card with Footer</CardTitle>
                  <CardDescription>Card featuring a footer section</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">This card includes a footer.</p>
                </CardContent>
                <CardFooter className="border-t">
                  <button className="text-sm text-primary hover:underline">
                    Learn more →
                  </button>
                </CardFooter>
              </Card>

              {/* Card with Action */}
              <Card>
                <CardHeader>
                  <CardTitle>Card with Action</CardTitle>
                  <CardDescription>Card with action button</CardDescription>
                  <CardAction>
                    <button className="text-xs px-3 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                      Action
                    </button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The action button appears in the top-right corner.
                  </p>
                </CardContent>
              </Card>

              {/* Full Featured Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Full Featured Card</CardTitle>
                  <CardDescription>
                    All card components combined
                  </CardDescription>
                  <CardAction>
                    <button className="text-xs text-muted-foreground hover:text-foreground">
                      •••
                    </button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Complete card example with:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Header with title and description</li>
                      <li>Action button</li>
                      <li>Content area</li>
                      <li>Footer section</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t justify-between">
                  <span className="text-xs text-muted-foreground">Updated 2m ago</span>
                  <button className="text-sm text-primary hover:underline">
                    View
                  </button>
                </CardFooter>
              </Card>

              {/* Custom Styled Card */}
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-600 dark:text-purple-400">
                    Custom Styled
                  </CardTitle>
                  <CardDescription>
                    Cards can be customized with className
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Use Tailwind classes to customize appearance.
                  </p>
                </CardContent>
              </Card>

              {/* Minimal Card */}
              <Card className="px-6 py-4">
                <p className="font-medium">Minimal Card</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Simple card without subcomponents
                </p>
              </Card>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-sm font-semibold mb-3">Code Example:</h3>
            <pre className="text-xs overflow-x-auto">
              <code>{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardAction>
      <button>Action</button>
    </CardAction>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>`}</code>
            </pre>
          </div>
        </section>

        {/* Menubar Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Menubar Component</h2>

            {/* Basic Menubar */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-3">Basic Menubar</h3>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Share</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        Cut <MenubarShortcut>⌘X</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Copy <MenubarShortcut>⌘C</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Paste <MenubarShortcut>⌘V</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                      <MenubarCheckboxItem checked>
                        Always Show Bookmarks Bar
                      </MenubarCheckboxItem>
                      <MenubarCheckboxItem>
                        Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarSeparator />
                      <MenubarItem inset>
                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              {/* Menubar with Radio Groups */}
              <div>
                <h3 className="text-lg font-medium mb-3">Menubar with Radio Groups</h3>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Options</MenubarTrigger>
                    <MenubarContent>
                      <MenubarLabel>Text Size</MenubarLabel>
                      <MenubarRadioGroup value="medium">
                        <MenubarRadioItem value="small">Small</MenubarRadioItem>
                        <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                        <MenubarRadioItem value="large">Large</MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>

              {/* Menubar with Submenu */}
              <div>
                <h3 className="text-lg font-medium mb-3">Menubar with Submenu</h3>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>More</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Settings</MenubarItem>
                      <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>Email link</MenubarItem>
                          <MenubarItem>Messages</MenubarItem>
                          <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem variant="destructive">Delete</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-sm font-semibold mb-3">Code Example:</h3>
            <pre className="text-xs overflow-x-auto">
              <code>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarCheckboxItem checked>
        Show Sidebar
      </MenubarCheckboxItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</code>
            </pre>
          </div>
        </section>

        {/* Typography Examples */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Typography & Colors</h2>
            <Card>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Headings</h3>
                  <div className="space-y-1">
                    <h1 className="text-4xl font-bold">Heading 1</h1>
                    <h2 className="text-3xl font-bold">Heading 2</h2>
                    <h3 className="text-2xl font-semibold">Heading 3</h3>
                    <h4 className="text-xl font-semibold">Heading 4</h4>
                    <h5 className="text-lg font-medium">Heading 5</h5>
                    <h6 className="text-base font-medium">Heading 6</h6>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Text Colors</h3>
                  <div className="space-y-1">
                    <p className="text-foreground">Foreground text</p>
                    <p className="text-muted-foreground">Muted foreground</p>
                    <p className="text-primary">Primary color</p>
                    <p className="text-destructive">Destructive color</p>
                    <p className="text-accent-foreground">Accent foreground</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Background Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-background border rounded p-3 text-sm">
                      background
                    </div>
                    <div className="bg-muted rounded p-3 text-sm">
                      muted
                    </div>
                    <div className="bg-primary text-primary-foreground rounded p-3 text-sm">
                      primary
                    </div>
                    <div className="bg-accent text-accent-foreground rounded p-3 text-sm">
                      accent
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Utilities */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Utility Classes</h2>
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Spacing</h3>
                  <p className="text-sm text-muted-foreground">
                    Use Tailwind spacing utilities: p-*, m-*, gap-*, space-*
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Borders</h3>
                  <div className="space-y-2">
                    <div className="border rounded-md p-3 text-sm">border & rounded-md</div>
                    <div className="border-2 rounded-lg p-3 text-sm">border-2 & rounded-lg</div>
                    <div className="border-t p-3 text-sm">border-t (top only)</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Shadows</h3>
                  <div className="space-y-2">
                    <div className="shadow-sm rounded p-3 text-sm">shadow-sm</div>
                    <div className="shadow-md rounded p-3 text-sm">shadow-md</div>
                    <div className="shadow-lg rounded p-3 text-sm">shadow-lg</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
