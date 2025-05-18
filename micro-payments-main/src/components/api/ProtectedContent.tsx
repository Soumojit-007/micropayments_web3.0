
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Copy, CheckCircle, ZapIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProtectedContentProps {
  isStreaming: boolean;
}

const ProtectedContent = ({ isStreaming }: ProtectedContentProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [apiKey, setApiKey] = useState("");
  
  // Generate a mock API key
  useEffect(() => {
    if (isStreaming) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = 'lnsat_';
      for (let i = 0; i < 24; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setApiKey(result);
    } else {
      setApiKey("");
    }
  }, [isStreaming]);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    toast({
      title: "API key copied",
      description: "Your temporary API key has been copied to the clipboard."
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Shield className="h-5 w-5 mr-2 text-lightning" />
            Protected API Access
          </CardTitle>
          <Badge className={isStreaming ? "bg-lightning-success" : "bg-gray-600"}>
            {isStreaming ? "Active" : "Inactive"}
          </Badge>
        </div>
        <CardDescription>
          {isStreaming 
            ? "Your session is active. Use the API key below to access the premium endpoints."
            : "Start streaming payments to access the premium API content."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isStreaming ? (
          <div className="space-y-4">
            <div className="p-3 bg-black/30 rounded-md border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Temporary API Key</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 px-2 text-xs" 
                  onClick={handleCopy}
                >
                  {copied ? <CheckCircle className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
              <code className="text-sm font-mono break-all text-lightning-success">{apiKey}</code>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Code className="h-4 w-4 mr-1" /> Sample API Request
              </h4>
              <div className="bg-black/30 p-3 rounded-md border border-white/10 overflow-x-auto">
                <pre className="text-xs font-mono text-white/80">
{`fetch('https://api.satsstream.com/v1/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <ZapIcon className="h-10 w-10 text-white/30" />
            </div>
            <h3 className="text-lg font-medium mb-2">Content Locked</h3>
            <p className="text-white/60 max-w-sm mb-6">
              Start streaming sats to unlock the premium API content and receive your temporary access key.
            </p>
            <Button className="bg-lightning text-white hover:bg-lightning/90">
              Go to Dashboard
            </Button>
          </div>
        )}
      </CardContent>
      {isStreaming && (
        <CardFooter className="border-t border-white/10 pt-4 text-xs text-white/50 flex justify-between">
          <span>Rate Limit: 100 requests/min</span>
          <span className="flex items-center">
            <ZapIcon className="h-3 w-3 mr-1 text-lightning" />
            0.5 sats/request
          </span>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProtectedContent;
