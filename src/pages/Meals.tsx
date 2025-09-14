import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Camera, Search, Clock, Flame, Heart } from "lucide-react";

const meals = [
  {
    id: 1,
    name: "Grilled Salmon Bowl",
    time: "8:30 AM",
    calories: 520,
    category: "Breakfast",
    image: "🐟",
    macros: { protein: 45, carbs: 35, fat: 20 }
  },
  {
    id: 2,
    name: "Mediterranean Quinoa Salad",
    time: "1:15 PM",
    calories: 380,
    category: "Lunch",
    image: "🥗",
    macros: { protein: 15, carbs: 55, fat: 18 }
  },
  {
    id: 3,
    name: "Protein Smoothie",
    time: "3:45 PM",
    calories: 245,
    category: "Snack",
    image: "🥤",
    macros: { protein: 25, carbs: 30, fat: 8 }
  }
];

const quickAdd = [
  { name: "Apple", calories: 95, icon: "🍎" },
  { name: "Almonds", calories: 160, icon: "🥜" },
  { name: "Greek Yogurt", calories: 130, icon: "🥛" },
  { name: "Banana", calories: 105, icon: "🍌" }
];

export default function Meals() {
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
            }}>Meal</span> Tracking
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Log your meals with precision and track your nutritional journey
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Button variant="hero" size="lg" className="h-16 md:h-20">
            <Plus className="mr-3 w-5 h-5" />
            Add New Meal
          </Button>
          <Button variant="luxury" size="lg" className="h-16 md:h-20">
            <Camera className="mr-3 w-5 h-5" />
            Scan Food
          </Button>
          <Button variant="outline" size="lg" className="h-16 md:h-20">
            <Search className="mr-3 w-5 h-5" />
            Search Database
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Today's Meals */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Today's Meals</h2>
            <div className="space-y-4 md:space-y-6">
              {meals.map((meal) => (
                <Card key={meal.id} className="glass-luxury p-6 md:p-8 shadow-luxury hover:shadow-premium hover-elegant">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl md:text-4xl">{meal.image}</div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-foreground">{meal.name}</h3>
                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{meal.time}</span>
                          </div>
                          <Badge variant="outline">{meal.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-accent-amethyst font-black">
                        <Flame className="w-4 h-4" />
                        <span>{meal.calories}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">calories</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/20">
                    <div className="text-center">
                      <div className="text-sm font-black text-accent-emerald">{meal.macros.protein}g</div>
                      <div className="text-xs text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-black text-accent-sapphire">{meal.macros.carbs}g</div>
                      <div className="text-xs text-muted-foreground">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-black text-accent-gold">{meal.macros.fat}g</div>
                      <div className="text-xs text-muted-foreground">Fat</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Add & Stats */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Daily Summary */}
            <Card className="glass-luxury p-6 md:p-8 shadow-luxury">
              <h3 className="text-xl font-black mb-6 text-foreground">Daily Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-accent-amethyst" />
                    <span className="text-sm font-medium">Calories</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-foreground">1,145</div>
                    <div className="text-xs text-muted-foreground">of 2,000</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-accent-emerald" />
                    <span className="text-sm font-medium">Protein</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-foreground">85g</div>
                    <div className="text-xs text-muted-foreground">of 120g</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Add */}
            <Card className="glass-luxury p-6 md:p-8 shadow-luxury">
              <h3 className="text-xl font-black mb-6 text-foreground">Quick Add</h3>
              <div className="space-y-3">
                {quickAdd.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-between h-12 hover:bg-accent/20"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.calories} cal</span>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}