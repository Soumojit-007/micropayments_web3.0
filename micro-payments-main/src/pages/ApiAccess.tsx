
import { useState, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import ProtectedContent from "../components/api/ProtectedContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ZapIcon, PlayCircle, Code, Database, LinkIcon, RefreshCw } from "lucide-react";

const ApiAccess = () => {
  const { toast } = useToast();
  const [isStreaming, setIsStreaming] = useState(false);
  const [mockData, setMockData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const toggleStream = () => {
    setIsStreaming(!isStreaming);
    
    if (!isStreaming) {
      toast({
        title: "Stream started",
        description: "You are now paying 0.5 sats/second for API access",
        variant: "default"
      });
    } else {
      toast({
        title: "Stream stopped",
        description: "API access has been revoked",
        variant: "default"
      });
      setMockData(null);
    }
  };
  
  const fetchMockData = () => {
    if (!isStreaming) {
      toast({
        title: "Access denied",
        description: "You need to start streaming payments to access this API",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call with delay
    setTimeout(() => {
      setMockData({
        timestamp: new Date().toISOString(),
        data: {
          price: 29384.52,
          volume_24h: 32867954123,
          market_cap: 573629451234,
          change_24h: 2.34,
          highest_24h: 29512.67,
          lowest_24h: 28956.21
        },
        request_cost: "0.5 sats"
      });
      setLoading(false);
      
      toast({
        title: "API request successful",
        description: "0.5 sats deducted for this request",
        variant: "default"
      });
    }, 1500);
  };
  
  useEffect(() => {
    if (!isStreaming) {
      setMockData(null);
    }
  }, [isStreaming]);
  
  return (
    <PageLayout className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">API Access</h1>
        <p className="text-white/60">Access premium data via our pay-per-second API</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Streaming Status</h3>
                  <div className="flex items-center">
                    <Badge className={`mr-2 ${isStreaming ? "bg-lightning-success" : "bg-gray-600"}`}>
                      {isStreaming ? "Active" : "Inactive"}
                    </Badge>
                    <span className="text-sm text-white/60">{isStreaming ? "0.5 sats/second" : "Not paying"}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={toggleStream}
                  className={isStreaming 
                    ? "w-full bg-white/10 text-white hover:bg-white/20" 
                    : "w-full bg-lightning text-white hover:bg-lightning/90"}
                >
                  {isStreaming ? (
                    <>Stop Streaming</>
                  ) : (
                    <>
                      <PlayCircle className="mr-2 h-4 w-4" /> Start Streaming
                    </>
                  )}
                </Button>
                
                {isStreaming && (
                  <div className="mt-4 flex items-center justify-center text-sm text-white/60">
                    <ZapIcon className="h-3 w-3 mr-1 text-lightning animate-pulse" />
                    Streaming payments active
                  </div>
                )}
              </CardContent>
            </Card>
            
            <ProtectedContent isStreaming={isStreaming} />
          </div>
        </div>
        
        {/* Right Column */}
        <div className="col-span-1 lg:col-span-2">
          <Tabs defaultValue="demo">
            <TabsList className="mb-6">
              <TabsTrigger value="demo" className="flex items-center">
                <Database className="mr-1 h-4 w-4" /> Demo Data
              </TabsTrigger>
              <TabsTrigger value="documentation" className="flex items-center">
                <Code className="mr-1 h-4 w-4" /> Documentation
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="demo">
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Database className="h-5 w-5 mr-2 text-lightning" />
                      Bitcoin Market Data
                    </CardTitle>
                    <Button 
                      onClick={fetchMockData} 
                      disabled={loading} 
                      size="sm"
                      className={isStreaming ? "bg-lightning" : "bg-gray-600"}
                    >
                      {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Fetch Data"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {mockData ? (
                    <div>
                      <div className="mb-4 text-xs text-white/50">
                        <span>Request timestamp: {new Date(mockData.timestamp).toLocaleString()}</span>
                        <span className="float-right">
                          <ZapIcon className="inline h-3 w-3 mr-1 text-lightning" />
                          {mockData.request_cost}
                        </span>
                      </div>
                      
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-white/60 mb-1">Price (USD)</div>
                            <div className="text-xl font-medium">${mockData.data.price.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">24h Change</div>
                            <div className={`text-xl font-medium ${mockData.data.change_24h > 0 ? 'text-lightning-success' : 'text-red-500'}`}>
                              {mockData.data.change_24h > 0 ? '+' : ''}{mockData.data.change_24h}%
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">24h Volume</div>
                            <div className="text-xl font-medium">${(mockData.data.volume_24h / 1e9).toFixed(2)}B</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">Market Cap</div>
                            <div className="text-xl font-medium">${(mockData.data.market_cap / 1e9).toFixed(2)}B</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">24h High</div>
                            <div className="text-xl font-medium">${mockData.data.highest_24h.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-white/60 mb-1">24h Low</div>
                            <div className="text-xl font-medium">${mockData.data.lowest_24h.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-sm text-white/60">
                        <p>This data is updated every minute. Each request costs 0.5 sats.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="py-16 flex flex-col items-center justify-center text-center">
                      {isStreaming ? (
                        <>
                          <div className="w-16 h-16 rounded-full bg-lightning/10 flex items-center justify-center mb-4">
                            <Database className="h-8 w-8 text-lightning/50" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">Ready to Fetch Data</h3>
                          <p className="text-white/60 max-w-sm mb-6">
                            Your stream is active. Click the "Fetch Data" button to access the premium Bitcoin market data.
                          </p>
                          <Button onClick={fetchMockData} disabled={loading} className="bg-lightning text-white hover:bg-lightning/90">
                            {loading ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Database className="h-4 w-4 mr-2" />}
                            Fetch Data
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                            <ZapIcon className="h-8 w-8 text-white/30" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">Access Locked</h3>
                          <p className="text-white/60 max-w-sm mb-6">
                            Start streaming sats to unlock the premium Bitcoin market data API.
                          </p>
                          <Button onClick={toggleStream} className="bg-lightning text-white hover:bg-lightning/90">
                            <PlayCircle className="h-4 w-4 mr-2" /> Start Streaming
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documentation">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Code className="h-5 w-5 mr-2 text-lightning" />
                    API Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Endpoints</h3>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10 space-y-3">
                        <div>
                          <div className="flex items-center mb-1">
                            <Badge className="mr-2 bg-green-700">GET</Badge>
                            <code className="text-sm font-mono">/api/v1/market-data</code>
                          </div>
                          <p className="text-sm text-white/60">Fetch current Bitcoin market data</p>
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <Badge className="mr-2 bg-green-700">GET</Badge>
                            <code className="text-sm font-mono">/api/v1/historical-data</code>
                          </div>
                          <p className="text-sm text-white/60">Fetch historical Bitcoin price data</p>
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <Badge className="mr-2 bg-green-700">GET</Badge>
                            <code className="text-sm font-mono">/api/v1/market-sentiment</code>
                          </div>
                          <p className="text-sm text-white/60">Get current market sentiment analysis</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Authentication</h3>
                      <p className="text-white/70 mb-3">
                        Add your API key to all requests using the Authorization header:
                      </p>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                        <code className="text-sm font-mono text-white/80">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Sample Response</h3>
                      <div className="bg-black/30 rounded-lg p-4 border border-white/10 overflow-x-auto">
                        <pre className="text-sm font-mono text-white/80">
{`{
  "timestamp": "2025-05-17T14:32:17Z",
  "data": {
    "price": 29384.52,
    "volume_24h": 32867954123,
    "market_cap": 573629451234,
    "change_24h": 2.34,
    "highest_24h": 29512.67,
    "lowest_24h": 28956.21
  }
}`}
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Rate Limits</h3>
                      <p className="text-white/70">
                        While actively streaming, you can make up to 100 requests per minute. 
                        Each request costs 0.5 sats, which is automatically deducted from your streaming balance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default ApiAccess;
