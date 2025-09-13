import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Edit, Trash2, BarChart3 } from "lucide-react";

const meals = [
  {
    id: 1,
    name: "Greek Yogurt Bowl",
    time: "8:30 AM",
    calories: 320,
    type: "Breakfast",
    typeColor: "bg-accent-gold/20 text-accent-gold"
  },
  {
    id: 2,
    name: "Quinoa Salad with Chicken",
    time: "12:45 PM",
    calories: 485,
    type: "Lunch",
    typeColor: "bg-accent-sapphire/20 text-accent-sapphire"
  },
  {
    id: 3,
    name: "Mixed Nuts & Apple",
    time: "3:20 PM",
    calories: 180,
    type: "Snack",
    typeColor: "bg-primary/20 text-primary"
  },
  {
    id: 4,
    name: "Salmon with Vegetables",
    time: "7:15 PM",
    calories: 540,
    type: "Dinner",
    typeColor: "bg-accent-emerald/20 text-accent-emerald"
  }
];

export function RecentMeals() {
  return (
    <Card className="glass-luxury p-8 md:p-12 lg:p-20 shadow-luxury hover:shadow-premium hover-luxury">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-12 lg:mb-16 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-black mb-3 md:mb-4 lg:mb-6 tracking-tight text-foreground">Nutrition Timeline</h3>
          <p className="text-muted-foreground font-medium text-sm md:text-base lg:text-xl">Complete daily intake with AI-powered nutritional insights</p>
        </div>
        <Button variant="luxury" size="lg" className="mt-2 group">
          <BarChart3 className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
          Export Analytics
        </Button>
      </div>

      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        {meals.map((meal) => (
          <div key={meal.id} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 lg:p-12 glass-subtle rounded-xl md:rounded-[2rem] hover:glass-luxury hover:shadow-elegant hover:scale-102 transition-all duration-500 hover-luxury gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 flex-1">
              <Badge className={`${meal.typeColor} px-4 md:px-6 py-2 md:py-3 font-bold text-xs md:text-sm rounded-xl md:rounded-2xl shadow-elegant`}>
                {meal.type}
              </Badge>
              <div>
                <h4 className="font-black text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-foreground transition-all duration-500">{meal.name}</h4>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2 md:mr-3 lg:mr-4" />
                  <span className="font-semibold text-sm md:text-base lg:text-lg">{meal.time}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10">
              <div className="text-center sm:text-right">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light">
                  <span className="font-black text-foreground">{meal.calories}</span>
                </p>
                <p className="text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-wider">calories</p>
              </div>
              <div className="flex space-x-2 md:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Button variant="ghost" size="icon" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 hover:bg-primary/10 rounded-xl md:rounded-2xl hover:scale-110">
                  <Edit className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 hover:bg-destructive/10 hover:text-destructive rounded-xl md:rounded-2xl hover:scale-110">
                  <Trash2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}