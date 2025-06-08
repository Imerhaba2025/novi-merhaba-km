"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Palette, Save, RefreshCw, Eye } from "lucide-react"

export default function WebsiteSettings() {
  const [primaryColor, setPrimaryColor] = useState("#001e96")
  const [secondaryColor, setSecondaryColor] = useState("#ea2d8b")
  const [autoColorChange, setAutoColorChange] = useState(true)
  const [colorChangeFrequency, setColorChangeFrequency] = useState("weekly")

  const colorPresets = [
    { name: "Default", primary: "#001e96", secondary: "#ea2d8b" },
    { name: "Ocean", primary: "#0066cc", secondary: "#00ccff" },
    { name: "Forest", primary: "#228B22", secondary: "#32CD32" },
    { name: "Sunset", primary: "#FF6347", secondary: "#FFD700" },
    { name: "Purple", primary: "#6A0DAD", secondary: "#DA70D6" },
    { name: "Emerald", primary: "#50C878", secondary: "#00FF7F" },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Website Settings</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="appearance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Color Scheme
                </CardTitle>
                <CardDescription>Customize your website's color palette</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="primary-color"
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-16 h-10 p-1 border rounded"
                      />
                      <Input
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        placeholder="#001e96"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="secondary-color"
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-16 h-10 p-1 border rounded"
                      />
                      <Input
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        placeholder="#ea2d8b"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Color Presets</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {colorPresets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        className="h-auto p-2 flex flex-col items-center space-y-1"
                        onClick={() => {
                          setPrimaryColor(preset.primary)
                          setSecondaryColor(preset.secondary)
                        }}
                      >
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: preset.primary }} />
                          <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: preset.secondary }} />
                        </div>
                        <span className="text-xs">{preset.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Auto Color Updates
                </CardTitle>
                <CardDescription>Automatically change website colors periodically</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-color">Enable Auto Color Change</Label>
                  <Switch id="auto-color" checked={autoColorChange} onCheckedChange={setAutoColorChange} />
                </div>

                {autoColorChange && (
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Change Frequency</Label>
                    <Select value={colorChangeFrequency} onValueChange={setColorChangeFrequency}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="seasonal">Seasonal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Preview</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded border" style={{ backgroundColor: primaryColor }} />
                    <div className="w-8 h-8 rounded border" style={{ backgroundColor: secondaryColor }} />
                    <span className="text-sm text-muted-foreground">Current color scheme</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Typography & Layout</CardTitle>
              <CardDescription>Customize fonts and layout settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="font-family">Font Family</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger>
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="opensans">Open Sans</SelectItem>
                      <SelectItem value="lato">Lato</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="font-size">Base Font Size</Label>
                  <Select defaultValue="16">
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="14">14px</SelectItem>
                      <SelectItem value="16">16px</SelectItem>
                      <SelectItem value="18">18px</SelectItem>
                      <SelectItem value="20">20px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="layout-width">Layout Width</Label>
                  <Select defaultValue="1200">
                    <SelectTrigger>
                      <SelectValue placeholder="Select width" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1200">1200px</SelectItem>
                      <SelectItem value="1400">1400px</SelectItem>
                      <SelectItem value="full">Full Width</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Homepage Content</CardTitle>
              <CardDescription>Manage your homepage content and messaging</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Hero Title</Label>
                <Input
                  id="hero-title"
                  defaultValue="Your Gateway to Business in Bosnia and Beyond"
                  placeholder="Enter hero title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                <Textarea
                  id="hero-subtitle"
                  defaultValue="Unlock the potential of Bosnia's emerging market with expert guidance on company formation, virtual offices, staffing, real estate, and more."
                  placeholder="Enter hero subtitle"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta-primary">Primary CTA Text</Label>
                <Input id="cta-primary" defaultValue="Schedule a Consultation" placeholder="Enter primary CTA text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta-secondary">Secondary CTA Text</Label>
                <Input id="cta-secondary" defaultValue="View Our Services" placeholder="Enter secondary CTA text" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update your contact details and social media links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+387 61 800 050" placeholder="Enter phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="info@imerhaba.com" placeholder="Enter email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="Sarajevo, Bosnia and Herzegovina" placeholder="Enter address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input id="whatsapp" defaultValue="+38761800050" placeholder="Enter WhatsApp number" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  defaultValue="iMerhaba Consulting | Your Gateway to Business in Bosnia"
                  placeholder="Enter meta title"
                />
                <p className="text-xs text-muted-foreground">Recommended length: 50-60 characters</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  defaultValue="Unlock the potential of Bosnia's emerging market with expert guidance on company formation, virtual offices, staffing, real estate, and more."
                  placeholder="Enter meta description"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">Recommended length: 150-160 characters</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  defaultValue="Bosnia business, company formation, virtual office, real estate Bosnia"
                  placeholder="Enter keywords separated by commas"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Third-party Integrations</CardTitle>
              <CardDescription>Connect your website with external services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground">Track website traffic and user behavior</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Connected</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Facebook Pixel</h4>
                    <p className="text-sm text-muted-foreground">Track conversions and optimize ads</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Not Connected</Badge>
                    <Switch />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">WhatsApp Business API</h4>
                    <p className="text-sm text-muted-foreground">Enable automated WhatsApp messaging</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Connected</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Email Marketing</h4>
                    <p className="text-sm text-muted-foreground">Connect with Mailchimp or similar service</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Not Connected</Badge>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
