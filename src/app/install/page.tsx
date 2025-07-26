"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Install <span className="text-[#C0AD72]">Big Blues App</span>
            </h1>
            <p className="text-xl text-white/90">Get the app on your phone for easy access</p>
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* iPhone/iOS Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0F1D44] flex items-center gap-2">
                    📱 iPhone/iPad (iOS)
                    <Badge className="bg-[#C0AD72] text-[#0F1D44]">Safari Required</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium">Open Safari Browser</p>
                        <p className="text-sm text-gray-600">Must use Safari (not Chrome or other browsers)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium">Visit the App</p>
                        <p className="text-sm text-gray-600">Go to your deployed app URL</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium">Tap Share Button</p>
                        <p className="text-sm text-gray-600">Tap the share icon at the bottom of Safari</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium">Add to Home Screen</p>
                        <p className="text-sm text-gray-600">Scroll down and tap "Add to Home Screen"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                      <div>
                        <p className="font-medium">Confirm Installation</p>
                        <p className="text-sm text-gray-600">Tap "Add" to install the app</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>✅ Success!</strong> The Big Blues app will appear on your home screen like a regular app!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Android Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0F1D44] flex items-center gap-2">
                    🤖 Android
                    <Badge className="bg-[#C0AD72] text-[#0F1D44]">Chrome Recommended</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium">Open Chrome Browser</p>
                        <p className="text-sm text-gray-600">Chrome works best for Android installation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium">Visit the App</p>
                        <p className="text-sm text-gray-600">Go to your deployed app URL</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium">Look for Install Banner</p>
                        <p className="text-sm text-gray-600">Chrome may show an "Install" banner automatically</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium">Or Use Menu</p>
                        <p className="text-sm text-gray-600">Tap ⋮ menu → "Add to Home screen" or "Install app"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0F1D44] text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                      <div>
                        <p className="font-medium">Confirm Installation</p>
                        <p className="text-sm text-gray-600">Tap "Install" or "Add" to complete</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>✅ Success!</strong> The app will be installed and accessible from your app drawer!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features After Installation */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-[#0F1D44]">🎉 What You Get After Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#C0AD72] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#0F1D44] font-bold">📱</span>
                    </div>
                    <h3 className="font-semibold mb-2">Native App Experience</h3>
                    <p className="text-sm text-gray-600">Works like a regular app with full-screen experience</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#C0AD72] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#0F1D44] font-bold">⚡</span>
                    </div>
                    <h3 className="font-semibold mb-2">Fast Loading</h3>
                    <p className="text-sm text-gray-600">Cached content loads instantly, even with poor connection</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#C0AD72] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#0F1D44] font-bold">🏠</span>
                    </div>
                    <h3 className="font-semibold mb-2">Home Screen Access</h3>
                    <p className="text-sm text-gray-600">Quick access directly from your phone's home screen</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-[#0F1D44]">❓ Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Don't see "Add to Home Screen" option?</h4>
                    <p className="text-sm text-gray-600">Make sure you're using Safari on iOS or Chrome on Android. Other browsers may not support installation.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">App not working after installation?</h4>
                    <p className="text-sm text-gray-600">Try refreshing the app or reinstalling it. Make sure you have a stable internet connection.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Still having issues?</h4>
                    <p className="text-sm text-gray-600">Contact the athletics department or IT support for assistance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
