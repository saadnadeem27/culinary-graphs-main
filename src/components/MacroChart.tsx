import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Protein', value: 25, color: 'hsl(var(--accent-amethyst))' },
  { name: 'Carbs', value: 45, color: 'hsl(var(--accent-sapphire))' },
  { name: 'Fats', value: 30, color: 'hsl(var(--accent-gold))' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="hsl(var(--card-foreground))" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function MacroChart() {
  return (
    <Card className="glass-luxury p-8 md:p-12 lg:p-20 shadow-luxury hover:shadow-premium hover-luxury">
        <div className="mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 lg:mb-10 gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-3 md:mb-4 lg:mb-6 tracking-tight text-foreground">Macronutrient Profile</h3>
            <p className="text-muted-foreground font-medium text-sm md:text-base lg:text-xl">Optimal balance analysis with personalized recommendations</p>
          </div>
          <div className="text-center lg:text-right glass-subtle p-4 md:p-6 lg:p-8 rounded-xl md:rounded-[1.5rem] shadow-elegant">
            <p className="text-sm font-black text-muted-foreground uppercase tracking-wider">Balance Score</p>
            <p className="text-4xl font-black text-transparent bg-clip-text" style={{
              background: 'linear-gradient(135deg, hsl(270 95% 75%) 0%, hsl(262 83% 58%) 50%, hsl(221 83% 53%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>A+ Grade</p>
          </div>
        </div>
      </div>
      
      <div className="h-[300px] md:h-[350px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              stroke="hsl(var(--background))"
              strokeWidth={3}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '16px',
                color: 'hsl(var(--card-foreground))',
                boxShadow: '0 8px 32px hsl(var(--foreground) / 0.1)'
              }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '24px',
                color: 'hsl(var(--muted-foreground))',
                fontSize: '14px',
                fontWeight: '600'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}