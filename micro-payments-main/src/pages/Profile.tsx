
import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ZapIcon, User, Wallet, History, Bolt, Copy, CheckCircle } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const handleCopyLightningAddress = () => {
    navigator.clipboard.writeText("your-lightning-address@ln.tips");
    setCopied(true);
    toast({
      title: "Lightning address copied",
      description: "Your Lightning address has been copied to the clipboard."
    });
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile saved",
      description: "Your profile changes have been saved successfully."
    });
  };
  
  return (
    <PageLayout className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Profile</h1>
        <p className="text-white/60">Manage your account and wallet settings</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - User Profile */}
        <div className="col-span-1">
          <Card className="glass-card">
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="text-xl bg-lightning/20 text-lightning">JS</AvatarFallback>
              </Avatar>
              <CardTitle>John Smith</CardTitle>
              <CardDescription>Bitcoin enthusiast since 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="pt-4 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <div className="flex items-center text-white/60">
                    <User className="h-4 w-4 mr-2" /> Account Type
                  </div>
                  <div>Premium</div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <div className="flex items-center text-white/60">
                    <Wallet className="h-4 w-4 mr-2" /> Wallet
                  </div>
                  <div>Alby</div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <div className="flex items-center text-white/60">
                    <ZapIcon className="h-4 w-4 mr-2" /> Balance
                  </div>
                  <div>10,000 sats</div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <div className="flex items-center text-white/60">
                    <History className="h-4 w-4 mr-2" /> Member Since
                  </div>
                  <div>May 2025</div>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center text-white/60">
                    <Bolt className="h-4 w-4 mr-2" /> Session Status
                  </div>
                  <div className="text-lightning">Active</div>
                </div>
                
                <Button variant="outline" className="mt-4 w-full border-lightning/30 hover:bg-lightning/10">
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Settings */}
        <div className="col-span-1 lg:col-span-2">
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input id="displayName" defaultValue="John Smith" className="bg-black/30 border-white/10" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john@example.com" className="bg-black/30 border-white/10" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" defaultValue="Bitcoin enthusiast and developer" className="bg-black/30 border-white/10" />
                  </div>
                  
                  <div>
                    <Button onClick={handleSaveProfile} className="bg-lightning text-white hover:bg-lightning/90">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Lightning Address</CardTitle>
                <CardDescription>Your Lightning Network payment details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="lightningAddress">Lightning Address</Label>
                    <div className="flex mt-1.5">
                      <Input 
                        id="lightningAddress" 
                        defaultValue="your-lightning-address@ln.tips" 
                        readOnly
                        className="bg-black/30 border-white/10 rounded-r-none"
                      />
                      <Button 
                        onClick={handleCopyLightningAddress} 
                        variant="secondary"
                        className="rounded-l-none flex items-center"
                      >
                        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-2">Connected Wallets</h4>
                    <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#FFBD59]/20 flex items-center justify-center mr-3">
                            <ZapIcon className="h-4 w-4 text-[#FFBD59]" />
                          </div>
                          <div>
                            <div className="font-medium">Alby</div>
                            <div className="text-xs text-white/60">Connected May 17, 2025</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs h-8 border-white/10 hover:bg-white/10">
                          Disconnect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Payment Settings</CardTitle>
                <CardDescription>Configure your streaming payment preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="rate">Default Streaming Rate</Label>
                    <div className="flex items-center mt-1.5">
                      <Input 
                        id="rate" 
                        defaultValue="0.5" 
                        className="bg-black/30 border-white/10"
                      />
                      <span className="ml-2">sats/second</span>
                    </div>
                    <p className="text-xs text-white/60 mt-1">This equals 1,800 sats/hour or approximately $0.54/hour at current exchange rates.</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="minBalance">Low Balance Alert</Label>
                    <div className="flex items-center mt-1.5">
                      <Input 
                        id="minBalance" 
                        defaultValue="1000" 
                        className="bg-black/30 border-white/10"
                      />
                      <span className="ml-2">sats</span>
                    </div>
                    <p className="text-xs text-white/60 mt-1">You will receive a notification when your balance falls below this amount.</p>
                  </div>
                  
                  <div>
                    <Button onClick={handleSaveProfile} className="bg-lightning text-white hover:bg-lightning/90">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
