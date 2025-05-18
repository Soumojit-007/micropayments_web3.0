
import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PaymentStream from '../components/streaming/PaymentStream';
import UsageStats from '../components/streaming/UsageStats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ZapIcon, Plus, History } from "lucide-react";
import AddFundsModal from '@/components/wallet/AddFundsModal';

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("stream");
  const [isLoggedIn] = useState(true); // Mock auth state
  const [walletBalance, setWalletBalance] = useState(10000); // Mock wallet balance
  const [isAddFundsModalOpen, setIsAddFundsModalOpen] = useState(false);
  
  const handleAddFunds = (amount: number) => {
    setWalletBalance(prevBalance => prevBalance + amount);
  };
  
  return (
    <PageLayout className="container px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-white/60">Monitor your streaming payments and usage</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            onClick={() => setIsAddFundsModalOpen(true)} 
            className="border-dashed border-2 border-white/20 bg-transparent hover:bg-white/5"
          >
            <Plus className="mr-1 h-4 w-4" /> Add Funds
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1">
          <PaymentStream initialBalance={walletBalance} />
        </div>
        
        {/* Right Column */}
        <div className="col-span-1 lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="stream" className="flex items-center">
                <ZapIcon className="mr-1 h-4 w-4" /> Stream Data
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center">
                <History className="mr-1 h-4 w-4" /> Usage History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="stream">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className="text-lg font-medium">Stream Information</h3>
                    <span className="px-2 py-1 rounded-full text-xs bg-lightning/20 text-lightning">
                      <ZapIcon className="inline h-3 w-3 mr-1" /> 0.5 sats/second
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/60">Connection Status</span>
                      <span className="font-medium text-lightning-success">Connected</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/60">Wallet Type</span>
                      <span className="font-medium">Alby Browser Extension</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/60">Payment Method</span>
                      <span className="font-medium">Lightning Network</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/60">Current Rate</span>
                      <span className="font-medium">0.5 sats/second (1,800 sats/hour)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-white/60">Access Level</span>
                      <span className="font-medium">Premium API + Data</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <UsageStats />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <AddFundsModal 
        isOpen={isAddFundsModalOpen}
        onClose={() => setIsAddFundsModalOpen(false)}
        onAddFunds={handleAddFunds}
      />
    </PageLayout>
  );
};

export default Dashboard;
