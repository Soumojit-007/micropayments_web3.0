import PageLayout from "../components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ZapIcon, Zap, Shield, Bolt } from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-lightning to-lightning-secondary bg-clip-text text-transparent">SatsStream</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Revolutionizing digital content monetization with Bitcoin Lightning Network micro-payments.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-12 bg-lightning-dark/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="glass-card p-8 text-center">
              <p className="text-lg mb-6">
                SatsStream is built on a simple premise: you should only pay for what you actually use.
                Traditional subscription models force users into fixed monthly payments regardless of usage.
                We're changing that with a pay-per-second model powered by Lightning Network.
              </p>
              <p className="text-lg">
                Our mission is to create a fair and transparent payment ecosystem for digital content,
                where creators get paid fairly for their work and users only pay for what they value.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">How SatsStream Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-lightning/20 flex items-center justify-center mb-4">
                  <Bolt className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="text-xl font-medium mb-3">Connect</h3>
                <p className="text-white/70">
                  Connect your Lightning wallet using Alby browser extension or LNBits. 
                  Setup takes less than a minute with no KYC required.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-lightning/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="text-xl font-medium mb-3">Stream</h3>
                <p className="text-white/70">
                  Click to start streaming sats at your preferred rate. Payments are processed 
                  in real-time via the Lightning Network with sub-second precision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-lightning/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="text-xl font-medium mb-3">Access</h3>
                <p className="text-white/70">
                  Gain immediate access to premium content or APIs while you're streaming.
                  Stop the stream at any time to halt payments instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16 bg-lightning-dark/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Technology</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-lightning" />
                  Lightning Network
                </h3>
                <p className="text-white/70">
                  We leverage the Lightning Network's ability to process micropayments with near-zero fees.
                  This allows for truly granular pay-per-second pricing that wouldn't be possible with traditional payment rails.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <ZapIcon className="h-5 w-5 mr-2 text-lightning" />
                  Websocket Streaming
                </h3>
                <p className="text-white/70">
                  Our real-time payment protocol uses websockets to maintain constant connection between your wallet and our service,
                  ensuring seamless streaming payments and instant access control.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-lightning" />
                  Non-custodial Security
                </h3>
                <p className="text-white/70">
                  We never take custody of your funds. All payments are processed directly through your chosen Lightning wallet,
                  giving you full control over your money at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">
            Ready to experience the future of digital payments?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join SatsStream today and start paying for only what you use, down to the second.
          </p>
          <Button 
            onClick={() => navigate('/dashboard')} 
            className="bg-lightning text-white hover:bg-lightning/90"
            size="lg"
          >
            <ZapIcon className="mr-2 h-5 w-5" /> Get Started
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
