import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', calories: 1890, goal: 2200 },
  { name: 'Tue', calories: 2100, goal: 2200 },
  { name: 'Wed', calories: 1950, goal: 2200 },
  { name: 'Thu', calories: 2250, goal: 2200 },
  { name: 'Fri', calories: 1847, goal: 2200 },
  { name: 'Sat', calories: 2180, goal: 2200 },
  { name: 'Sun', calories: 2050, goal: 2200 },
];

export function CalorieChart() {
  return (
    <Card className="glass-luxury p-8 md:p-12 lg:p-20 shadow-luxury hover:shadow-premium hover-luxury">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 lg:mb-10 gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-3 md:mb-4 lg:mb-6 tracking-tight text-foreground">Weekly Calorie Analysis</h3>
            <p className="text-muted-foreground font-medium text-sm md:text-base lg:text-xl">Comprehensive daily intake tracking with intelligent goal optimization</p>
          </div>
          <div className="text-center lg:text-right glass-subtle p-4 md:p-6 lg:p-8 rounded-xl md:rounded-[1.5rem] shadow-elegant">
            <p className="text-sm font-black text-muted-foreground uppercase tracking-wider">Weekly Avg</p>
            <p className="text-4xl font-black text-foreground">2,047 cal</p>
          </div>
        </div>
      </div>
      
      <div className="h-[300px] md:h-[350px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={14}
              fontWeight={600}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={14}
              fontWeight={600}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '16px',
                color: 'hsl(var(--card-foreground))',
                boxShadow: '0 8px 32px hsl(var(--foreground) / 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="goal" 
              stroke="hsl(var(--muted-foreground))" 
              strokeDasharray="5 5"
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="calories" 
              stroke="hsl(var(--primary))" 
              strokeWidth={4}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}