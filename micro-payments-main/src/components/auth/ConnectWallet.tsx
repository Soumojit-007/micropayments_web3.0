
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ZapIcon } from "lucide-react";

const ConnectWallet = () => {
  const { toast } = useToast();
  const [connecting, setConnecting] = useState(false);

  const handleAlbyConnect = () => {
    setConnecting(true);
    
    // Simulate connection delay
    setTimeout(() => {
      setConnecting(false);
      toast({
        title: "Wallet connected",
        description: "You've successfully connected your Alby wallet.",
      });
    }, 1500);
  };

  const handleLnbitsConnect = () => {
    setConnecting(true);
    
    // Simulate connection delay
    setTimeout(() => {
      setConnecting(false);
      toast({
        title: "Wallet connected",
        description: "You've successfully connected your LNBits wallet.",
      });
    }, 1500);
  };

  return (
    <Card className="glass-card w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">Connect Your Lightning Wallet</CardTitle>
        <CardDescription className="text-center">
          Choose your preferred lightning wallet to start streaming sats.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="alby">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="alby">Alby</TabsTrigger>
            <TabsTrigger value="lnbits">LNBits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="alby" className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <ZapIcon className="h-8 w-8 text-lightning" />
              </div>
            </div>
            <p className="text-sm text-white/70 text-center mb-4">
              Connect with Alby browser extension to enable seamless one-click streaming payments.
            </p>
            <Button 
              onClick={handleAlbyConnect}
              disabled={connecting}
              className="w-full bg-[#FFBD59] text-black hover:bg-[#FFBD59]/90"
            >
              {connecting ? "Connecting..." : "Connect with Alby"}
            </Button>
          </TabsContent>
          
          <TabsContent value="lnbits" className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <ZapIcon className="h-8 w-8 text-lightning" />
              </div>
            </div>
            <p className="text-sm text-white/70 text-center mb-4">
              Connect with LNBits by providing your wallet API keys to enable streaming payments.
            </p>
            <Button 
              onClick={handleLnbitsConnect}
              disabled={connecting}
              className="w-full bg-[#673ab7] text-white hover:bg-[#673ab7]/90"
            >
              {connecting ? "Connecting..." : "Connect with LNBits"}
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-white/10 pt-4">
        <p className="text-xs text-white/50 text-center">
          Your wallet connection is secure and encrypted. We never store your private keys.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ConnectWallet;
