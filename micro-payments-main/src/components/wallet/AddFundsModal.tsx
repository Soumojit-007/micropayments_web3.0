
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ZapIcon, Plus } from "lucide-react";

interface AddFundsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFunds: (amount: number) => void;
}

const AddFundsModal = ({ isOpen, onClose, onAddFunds }: AddFundsModalProps) => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<number>(1000);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (amount < 100) {
      toast({
        title: "Invalid amount",
        description: "Minimum amount is 100 sats",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      onAddFunds(amount);
      toast({
        title: "Funds added",
        description: `${amount} sats added to your wallet`,
        variant: "default"
      });
      setIsProcessing(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Add Funds
          </DialogTitle>
          <DialogDescription>
            Add sats to your Lightning wallet to start streaming payments.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount (sats)</Label>
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  min={100}
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                  className="pl-9"
                  required
                />
                <ZapIcon className="absolute left-3 top-3 h-4 w-4 text-lightning" />
              </div>
            </div>
            
            <div className="flex justify-between gap-2 mt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setAmount(1000)} 
                className="flex-1"
              >
                1,000
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setAmount(5000)} 
                className="flex-1"
              >
                5,000
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setAmount(10000)} 
                className="flex-1"
              >
                10,000
              </Button>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isProcessing || amount < 100}
              className="bg-lightning text-white hover:bg-lightning/90"
            >
              {isProcessing ? "Processing..." : "Add Funds"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFundsModal;
