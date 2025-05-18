
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ZapIcon, Clock, TrendingUp, Hash } from "lucide-react";

const mockPaymentData = [
  { time: '00:00', amount: 0 },
  { time: '01:00', amount: 30 },
  { time: '02:00', amount: 65 },
  { time: '03:00', amount: 58 },
  { time: '04:00', amount: 90 },
  { time: '05:00', amount: 120 },
  { time: '06:00', amount: 85 },
  { time: '07:00', amount: 55 },
  { time: '08:00', amount: 40 },
  { time: '09:00', amount: 70 },
  { time: '10:00', amount: 95 },
  { time: '11:00', amount: 115 },
  { time: '12:00', amount: 145 },
];

const UsageStats = () => {
  const totalSpent = mockPaymentData.reduce((acc, curr) => acc + curr.amount, 0);
  const averageSpent = totalSpent / mockPaymentData.length;
  const totalSessions = 7;
  const totalTime = "4h 23m";
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4 flex flex-col justify-center h-full">
            <div className="text-white/60 text-sm mb-1 flex items-center">
              <ZapIcon className="h-3 w-3 mr-1 text-lightning" /> Total Sats Spent
            </div>
            <div className="text-xl font-bold">{totalSpent}</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-4 flex flex-col justify-center h-full">
            <div className="text-white/60 text-sm mb-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-lightning-success" /> Average/Hour
            </div>
            <div className="text-xl font-bold">{averageSpent.toFixed(1)}</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-4 flex flex-col justify-center h-full">
            <div className="text-white/60 text-sm mb-1 flex items-center">
              <Hash className="h-3 w-3 mr-1 text-lightning-secondary" /> Sessions
            </div>
            <div className="text-xl font-bold">{totalSessions}</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-4 flex flex-col justify-center h-full">
            <div className="text-white/60 text-sm mb-1 flex items-center">
              <Clock className="h-3 w-3 mr-1 text-lightning-warning" /> Total Time
            </div>
            <div className="text-xl font-bold">{totalTime}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="glass-card">
        <CardHeader className="pb-0">
          <CardTitle className="text-lg font-medium text-white">Payment History</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={mockPaymentData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSats" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                  tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <YAxis 
                  tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} 
                  tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(34, 31, 38, 0.9)',
                    borderColor: 'rgba(139, 92, 246, 0.5)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value: number) => [`${value} sats`, 'Amount']}
                  labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#8B5CF6" 
                  fillOpacity={1} 
                  fill="url(#colorSats)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsageStats;
