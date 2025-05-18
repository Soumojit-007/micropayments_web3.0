import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ZapIcon, Pause, Play } from "lucide-react";

interface PaymentStreamProps {
  initialBalance?: number;
  costPerSecond?: number;
}

const PaymentStream = ({ 
  initialBalance = 10000, 
  costPerSecond = 0.5 
}: PaymentStreamProps) => {
  const { toast } = useToast();
  const [streaming, setStreaming] = useState(false);
  const [balance, setBalance] = useState(initialBalance);
  const [spentThisSession, setSpentThisSession] = useState(0);
  const [secondsStreamed, setSecondsStreamed] = useState(0);
  const [streamProgress, setStreamProgress] = useState(0);

  // Update balance when initialBalance prop changes
  useEffect(() => {
    setBalance(initialBalance);
  }, [initialBalance]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (streaming) {
      interval = setInterval(() => {
        setBalance(prevBalance => {
          const newBalance = prevBalance - costPerSecond;
          if (newBalance <= 0) {
            setStreaming(false);
            toast({
              title: "Stream stopped",
              description: "Your balance is depleted. Please refill to continue streaming.",
              variant: "destructive"
            });
            return 0;
          }
          return newBalance;
        });
        
        setSpentThisSession(prev => prev + costPerSecond);
        setSecondsStreamed(prev => prev + 1);
        
        // Payment simulation - every 10 seconds
        if (secondsStreamed > 0 && secondsStreamed % 10 === 0) {
          const paymentAmount = costPerSecond * 10;
          toast({
            title: "Payment made",
            description: `${paymentAmount} sats sent for stream access`,
            variant: "default"
          });
        }
        
        // Circular progress animation (0-100 repeating every 10 seconds)
        setStreamProgress((secondsStreamed % 10) * 10);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [streaming, secondsStreamed, costPerSecond, toast]);
  
  const toggleStreaming = () => {
    if (balance <= 0 && !streaming) {
      toast({
        title: "Insufficient balance",
        description: "Please refill your balance to start streaming.",
        variant: "destructive"
      });
      return;
    }
    
    if (!streaming) {
      toast({
        title: "Stream started",
        description: `Streaming at ${costPerSecond} sats/second`,
        variant: "default"
      });
    } else {
      toast({
        title: "Stream paused",
        description: `You've spent ${spentThisSession.toFixed(1)} sats in this session`,
        variant: "default"
      });
    }
    
    setStreaming(!streaming);
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Payment Stream</h3>
          <div className="text-sm text-white/60">
            {costPerSecond} sats/second
          </div>
        </div>
        
        <div className="relative mb-6 h-32 flex items-center justify-center">
          <div className={`absolute transition-transform duration-300 ${streaming ? 'scale-100' : 'scale-90'}`}>
            <div className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all
                ${streaming ? 'animate-pulse-glow' : ''}`}>
              <div className="absolute inset-0 rounded-full border-2 border-lightning/30" />
              <div className="absolute inset-0 rounded-full border-t-2 border-lightning animate-spin-slow" />
              <div className="absolute inset-0 rounded-full" style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(15,160,206,0.05) 100%)"
              }} />
              
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {streaming ? (
                    <span className="flex items-center justify-center">
                      <ZapIcon className="mr-1 h-4 w-4 text-lightning" />
                      {secondsStreamed}s
                    </span>
                  ) : (
                    <span>Ready</span>
                  )}
                </div>
                <div className="text-xs text-white/60">
                  {streaming ? 'Streaming' : 'Paused'}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-2 text-sm">
            <span>Current Session</span>
            <span className="font-medium text-lightning">
              <ZapIcon className="inline mr-1 h-3 w-3" />
              {spentThisSession.toFixed(1)} sats
            </span>
          </div>
          <Progress 
            value={streamProgress} 
            className="h-2 bg-white/10"
          />
        </div>
        
        <div className="mb-5 flex justify-between text-sm">
          <span className="text-white/60">Wallet Balance</span>
          <span className="font-bold">
            <ZapIcon className="inline mr-1 h-3 w-3" />
            {balance.toFixed(1)} sats
          </span>
        </div>
        
        <Button 
          onClick={toggleStreaming}
          className={`w-full ${streaming 
            ? 'bg-lightning/10 text-lightning hover:bg-lightning/20' 
            : 'bg-lightning text-white hover:bg-lightning/90'}`}
          variant={streaming ? "outline" : "default"}
        >
          {streaming ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause Stream
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Start Stream
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentStream;
