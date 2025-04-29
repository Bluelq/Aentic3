"use client"

import { useState, useEffect } from "react"
import { X, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { setCookie, getCookie } from "@/lib/cookie-manager"

type CookiePreferences = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showSettingsButton, setShowSettingsButton] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentCookie = getCookie("cookieConsent")

    if (!consentCookie) {
      // First visit, show the banner
      setShowBanner(true)
    } else {
      // User has made a choice, parse preferences
      try {
        const savedPreferences = JSON.parse(consentCookie)
        setPreferences(savedPreferences)
        setShowSettingsButton(true)
      } catch (e) {
        // If there's an error parsing, show the banner again
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    // Save preferences to cookie
    setCookie("cookieConsent", JSON.stringify(prefs), 365)
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettingsButton(true)
    setOpen(false)

    // Apply cookie preferences
    applyPreferences(prefs)
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    }
    savePreferences(necessaryOnly)
  }

  const applyPreferences = (prefs: CookiePreferences) => {
    // This function would actually apply the cookie preferences
    // For example, enabling/disabling Google Analytics based on analytics preference

    // Example: If analytics is disabled, remove Google Analytics cookies
    if (!prefs.analytics) {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    // Example: If marketing is disabled, remove marketing cookies
    if (!prefs.marketing) {
      document.cookie = "_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
  }

  return (
    <>
      {/* Main Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 p-4 md:p-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                  traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <Button variant="link" className="text-sm p-0 h-auto text-primary" onClick={() => setOpen(true)}>
                  Customize Settings
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={acceptNecessary} className="whitespace-nowrap">
                  Necessary Only
                </Button>
                <Button onClick={acceptAll} className="whitespace-nowrap">
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Button */}
      {showSettingsButton && !open && !showBanner && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-all"
          aria-label="Cookie Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      )}

      {/* Cookie Settings Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold">Cookie Settings</h2>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="grid grid-cols-3 p-4">
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
                <TabsTrigger value="cookies">Cookies</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                  traffic. You can choose which cookies you want to allow. Please note that some cookies may impact your
                  experience of the site and the services we offer.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Necessary Cookies</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        These cookies are essential for the Website to function properly.
                      </p>
                    </div>
                    <Switch checked={preferences.necessary} disabled className="ml-4" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Preference Cookies</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        These cookies remember your preferences and settings.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.preferences}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, preferences: checked })}
                      className="ml-4"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Analytics Cookies</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        These cookies collect information about how you use our website.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                      className="ml-4"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Cookies</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        These cookies are used to track visitors across websites to display relevant advertisements.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                      className="ml-4"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cookies" className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. They are widely
                  used to make websites work more efficiently and provide information to the website owners.
                </p>
                <h4 className="font-medium mb-2">Types of Cookies We Use:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Necessary Cookies:</strong> Essential for the website to function properly.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Allow the website to remember choices you make.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes.
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/cookie-policy" className="text-primary hover:underline text-sm">
                    Read our full Cookie Policy
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="details" className="p-4">
                <h4 className="font-medium mb-2">Cookie Details</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Provider
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Purpose
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Expiry
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          cookieConsent
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          aentic.ai
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Stores your cookie preferences
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">1 year</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Necessary
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">_ga</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Google</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Used to distinguish users
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          2 years
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Analytics
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">_gid</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Google</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Used to distinguish users
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          24 hours
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Analytics
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="outline" onClick={acceptNecessary}>
                Necessary Only
              </Button>
              <Button onClick={acceptAll}>Accept All</Button>
              <Button onClick={() => savePreferences(preferences)}>Save Preferences</Button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-2 px-4 text-xs text-center">
        <div className="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-1 items-center">
          <span className="text-gray-600 dark:text-gray-300">We use cookies to improve your experience.</span>
          <div className="flex gap-2 items-center">
            <Button variant="link" className="h-auto p-0 text-xs text-primary" onClick={() => setOpen(true)}>
              Cookie Settings
            </Button>
            <span className="text-gray-400">|</span>
            <Link href="/cookie-policy" className="text-primary hover:underline text-xs">
              Cookie Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/privacy" className="text-primary hover:underline text-xs">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/terms" className="text-primary hover:underline text-xs">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
