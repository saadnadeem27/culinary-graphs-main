import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Dashboard />
    </div>
  );
};

export default Index;
