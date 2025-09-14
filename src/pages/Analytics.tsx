import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { CalorieChart } from "@/components/CalorieChart";
import { MacroChart } from "@/components/MacroChart";
import { TrendingUp, TrendingDown, Target, Award, Calendar, Activity } from "lucide-react";

const insights = [
  {
    title: "Weekly Progress",
    value: "+12%",
    description: "Calorie goal achievement improved",
    trend: "up",
    icon: TrendingUp,
    color: "accent-emerald"
  },
  {
    title: "Protein Intake",
    value: "87%",
    description: "Average daily protein target",
    trend: "up",
    icon: Target,
    color: "accent-sapphire"
  },
  {
    title: "Consistency Score",
    value: "94/100",
    description: "Meal logging consistency",
    trend: "up",
    icon: Award,
    color: "accent-gold"
  },
  {
    title: "Health Trends",
    value: "Excellent",
    description: "Overall nutrition quality",
    trend: "stable",
    icon: Activity,
    color: "accent-amethyst"
  }
];

const weeklyData = [
  { day: "Mon", calories: 1950, protein: 85, carbs: 220, fat: 65 },
  { day: "Tue", calories: 2100, protein: 92, carbs: 245, fat: 72 },
  { day: "Wed", calories: 1875, protein: 78, carbs: 210, fat: 58 },
  { day: "Thu", calories: 2050, protein: 88, carbs: 235, fat: 68 },
  { day: "Fri", calories: 1980, protein: 85, carbs: 225, fat: 62 },
  { day: "Sat", calories: 2200, protein: 95, carbs: 260, fat: 75 },
  { day: "Sun", calories: 1900, protein: 82, carbs: 205, fat: 60 }
];

export default function Analytics() {
  return (
    <>
      <Header />
      <div className="min-h-screen gradient-mesh pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            <span className="text-transparent bg-clip-text" style={{
              background: 'linear-gradient(135deg, hsl(270 95% 75%) 0%, hsl(262 83% 58%) 50%, hsl(221 83% 53%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Advanced</span> Analytics
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Deep insights into your nutrition patterns and health metrics
          </p>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const TrendIcon = insight.trend === "up" ? TrendingUp : insight.trend === "down" ? TrendingDown : Activity;
            
            return (
              <Card key={index} className="glass-luxury p-6 md:p-8 shadow-luxury hover:shadow-premium hover-elegant group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-br from-${insight.color}/20 to-accent-amethyst/15 p-3 rounded-xl shadow-morphing group-hover:scale-110 transition-all duration-500`}>
                    <Icon className={`w-6 h-6 text-${insight.color}`} />
                  </div>
                  <TrendIcon className={`w-4 h-4 ${insight.trend === 'up' ? 'text-accent-emerald' : insight.trend === 'down' ? 'text-accent-ruby' : 'text-muted-foreground'}`} />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{insight.title}</p>
                  <p className="text-2xl md:text-3xl font-black text-foreground">{insight.value}</p>
                  <p className="text-xs text-muted-foreground">{insight.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          <CalorieChart />
          <MacroChart />
        </div>

        {/* Weekly Breakdown */}
        <Card className="glass-luxury p-6 md:p-8 shadow-luxury">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground flex items-center">
            <Calendar className="mr-3 w-6 h-6 text-primary" />
            Weekly Breakdown
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-3 text-sm font-black text-muted-foreground uppercase tracking-widest">Day</th>
                  <th className="text-center py-3 text-sm font-black text-muted-foreground uppercase tracking-widest">Calories</th>
                  <th className="text-center py-3 text-sm font-black text-muted-foreground uppercase tracking-widest">Protein</th>
                  <th className="text-center py-3 text-sm font-black text-muted-foreground uppercase tracking-widest">Carbs</th>
                  <th className="text-center py-3 text-sm font-black text-muted-foreground uppercase tracking-widest">Fat</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((day, index) => (
                  <tr key={index} className="border-b border-border/10 hover:bg-accent/20 transition-all duration-300">
                    <td className="py-4 text-foreground font-black">{day.day}</td>
                    <td className="py-4 text-center text-accent-amethyst font-black">{day.calories}</td>
                    <td className="py-4 text-center text-accent-emerald font-semibold">{day.protein}g</td>
                    <td className="py-4 text-center text-accent-sapphire font-semibold">{day.carbs}g</td>
                    <td className="py-4 text-center text-accent-gold font-semibold">{day.fat}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}