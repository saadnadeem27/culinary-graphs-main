import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Settings, Trophy, Target, Calendar, Activity, Heart, Zap } from "lucide-react";

const achievements = [
  { title: "7-Day Streak", description: "Logged meals for 7 consecutive days", icon: "🔥", unlocked: true },
  { title: "Protein Master", description: "Hit protein goal 10 times", icon: "💪", unlocked: true },
  { title: "Hydration Hero", description: "Drank 8 glasses of water daily", icon: "💧", unlocked: false },
  { title: "Balanced Eater", description: "Perfect macro balance for 5 days", icon: "⚖️", unlocked: true },
];

const goals = [
  { title: "Daily Calories", current: 1847, target: 2000, unit: "cal", color: "accent-amethyst" },
  { title: "Protein", current: 85, target: 120, unit: "g", color: "accent-emerald" },
  { title: "Water Intake", current: 6, target: 8, unit: "glasses", color: "accent-sapphire" },
  { title: "Exercise", current: 4, target: 5, unit: "days/week", color: "accent-gold" },
];

const stats = [
  { label: "Total Meals Logged", value: "342", icon: Calendar },
  { label: "Average Daily Calories", value: "1,952", icon: Zap },
  { label: "Health Score", value: "A+", icon: Heart },
  { label: "Days Active", value: "28", icon: Activity },
];

export default function Profile() {
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
            }}>Your</span> Profile
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Track your progress and customize your nutrition journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* User Info Card */}
            <Card className="glass-luxury p-6 md:p-8 shadow-luxury">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16 md:w-20 md:h-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary/20 text-primary text-xl font-black">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground">John Doe</h2>
                    <p className="text-muted-foreground">Premium Member</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary">Age: 28</Badge>
                      <Badge variant="secondary">Goal: Weight Loss</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-lg md:text-xl font-black text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Goals Progress */}
            <Card className="glass-luxury p-6 md:p-8 shadow-luxury">
              <h3 className="text-xl md:text-2xl font-black mb-6 text-foreground flex items-center">
                <Target className="mr-3 w-6 h-6 text-primary" />
                Daily Goals Progress
              </h3>
              
              <div className="space-y-6">
                {goals.map((goal, index) => {
                  const progress = (goal.current / goal.target) * 100;
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-foreground">{goal.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {goal.current} / {goal.target} {goal.unit}
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {Math.round(progress)}% complete
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="glass-luxury p-6 md:p-8 shadow-luxury">
              <h3 className="text-xl md:text-2xl font-black mb-6 text-foreground flex items-center">
                <Trophy className="mr-3 w-6 h-6 text-accent-gold" />
                Achievements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      achievement.unlocked
                        ? "border-accent-gold/30 bg-accent-gold/5 hover:bg-accent-gold/10"
                        : "border-border/20 bg-muted/5 opacity-60"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h4 className="font-black text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Quick Stats */}
            <Card className="glass-luxury p-6 shadow-luxury">
              <h3 className="text-lg font-black mb-4 text-foreground">This Week</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg Calories</span>
                  <span className="font-black text-foreground">1,952</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Best Day</span>
                  <span className="font-black text-accent-emerald">Friday</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Streak</span>
                  <span className="font-black text-accent-gold">7 days</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-luxury p-6 shadow-luxury">
              <h3 className="text-lg font-black mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 w-4 h-4" />
                  Account Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="mr-2 w-4 h-4" />
                  Update Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="mr-2 w-4 h-4" />
                  Health Data
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}