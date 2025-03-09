"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Flag, FileCheck, FormInput, CheckCircle2, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Flag className="h-8 w-8 text-white" />
            <div className="text-white">
              <h1 className="text-lg font-semibold">MINISTRY OF FOREIGN AFFAIRS</h1>
              <p className="text-sm opacity-80">REPUBLIC OF MOLDOVA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Globe className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-2xl">VISA MOLDOVA</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="check" className="w-full">
            <TabsList className="w-full h-16 bg-transparent gap-1">
              <TabsTrigger 
                value="start"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 data-[state=active]:bg-blue-700"
              >
                START
              </TabsTrigger>
              <TabsTrigger 
                value="need"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 data-[state=active]:bg-blue-700"
              >
                DO I NEED A VISA?
              </TabsTrigger>
              <TabsTrigger 
                value="apply"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 data-[state=active]:bg-blue-700"
              >
                APPLY NOW
              </TabsTrigger>
              <TabsTrigger 
                value="continue"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 data-[state=active]:bg-blue-700"
              >
                CONTINUE APPLICATION
              </TabsTrigger>
              <TabsTrigger 
                value="status"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 data-[state=active]:bg-blue-700"
              >
                CHECK STATUS
              </TabsTrigger>
              <TabsTrigger 
                value="check"
                className="flex-1 bg-white/10 text-white hover:bg-white/20 data-[state=active]:bg-blue-700"
              >
                CHECK VISA
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-3">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Things you should know</h2>
            <Button 
              variant="default" 
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <FileCheck className="mr-2 h-4 w-4" />
              10 things about eVisa
            </Button>
          </div>
        </aside>

        {/* Main Form */}
        <main className="col-span-9">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">Seeking visa</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Visa number
                </label>
                <Input 
                  type="text" 
                  placeholder="Enter visa number"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Verification code
                </label>
                <div className="bg-blue-50 p-4 rounded-lg mb-2 flex items-center justify-center">
                  <div className="text-2xl font-mono text-blue-800">Z1530m</div>
                </div>
                <Input 
                  type="text" 
                  placeholder="Enter verification code"
                  className="w-full"
                />
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Search className="mr-2 h-4 w-4" />
                Check
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white/80">
          <span>Version: 1.4.4.3</span>
          <a href="mailto:info@evisa.org.md.com" className="hover:text-white">
            E-mail: info@evisa.org.md.com
          </a>
        </div>
      </footer>
    </main>
  );
}