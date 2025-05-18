
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ZapIcon, Sparkles, Bolt, Zap, Shield, Clock } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-lightning-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-lightning/10 to-transparent opacity-30" />
        
        <div className="container relative px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">Stream Sats</span>
                <br />Pay Per Second
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Unlock premium content and APIs with Bitcoin Lightning Network micropayments. 
                Pay only for what you use, down to the second.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/dashboard')}
                  className="bg-lightning text-white hover:bg-lightning/90 shadow-lg"
                >
                  <ZapIcon className="mr-2 h-5 w-5" />
                  Start Streaming
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/about')}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-80 md:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 rounded-full bg-lightning/20 blur-2xl" />
                    <div className="absolute inset-10 rounded-full bg-gradient-to-br from-lightning to-lightning-secondary opacity-30 animate-pulse-glow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ZapIcon className="w-20 h-20 text-lightning animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-lightning-dark/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">How It Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-lightning/20 flex items-center justify-center mb-4">
                  <Bolt className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="text-xl font-medium mb-2">Connect Wallet</h3>
                <p className="text-white/70">
                  Connect your Lightning wallet using Alby browser extension or LNBits credentials. Quick and secure.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-lightning/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="text-xl font-medium mb-2">Stream Sats</h3>
                <p className="text-white/70">
                  Click to start streaming payments at 0.5 sats/second. Pay only for what you use with sub-second precision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-lightning/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="text-xl font-medium mb-2">Access Content</h3>
                <p className="text-white/70">
                  Instantly unlock premium APIs and content for as long as you're streaming. Stop anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">Pay Only For</span>
                <br />What You Need
              </h2>
              <p className="text-white/70 mb-6">
                Traditional subscription models force you to pay for unused services. 
                With SatsStream, you pay per second of actual usage.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: <Clock className="h-5 w-5 text-lightning" />, text: "Sub-second payment precision" },
                  { icon: <ZapIcon className="h-5 w-5 text-lightning" />, text: "No minimum spend requirements" },
                  { icon: <Shield className="h-5 w-5 text-lightning" />, text: "Instant access, no subscriptions" },
                  { icon: <Sparkles className="h-5 w-5 text-lightning" />, text: "Frictionless user experience" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 lg:pl-10">
              <div className="glass-card p-6 border-white/10 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <div className="text-sm text-white/60">Traditional</div>
                      <div className="text-lg font-bold">$10/month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/60">SatsStream</div>
                      <div className="text-lg font-bold text-lightning">~$1.50/month*</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-white/60">
                    * Based on average usage of 10 minutes per day.
                  </div>
                  
                  <div className="h-64 bg-black/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">85%</div>
                      <div className="text-white/70">Average savings</div>
                      <div className="mt-4 text-xs text-white/50">Compared to traditional subscription models</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-lightning/20 to-lightning-secondary/10">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Try <span className="bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">SatsStream</span>?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Start paying for exactly what you use, down to the second. No subscriptions, no wasted money.
          </p>
          <Button 
            onClick={() => navigate('/dashboard')} 
            size="lg" 
            className="bg-lightning text-white hover:bg-lightning/90"
          >
            <ZapIcon className="mr-2 h-5 w-5" /> Get Started
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
