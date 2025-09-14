import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Zap, Target, Award, Mail, Github, Linkedin } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Recognition",
    description: "Advanced computer vision technology instantly identifies foods and calculates nutritional content with laboratory-grade precision."
  },
  {
    icon: Target,
    title: "Personalized Analytics",
    description: "Machine learning algorithms analyze your eating patterns to provide personalized recommendations and insights."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your health data is encrypted and secure. We never share your personal information with third parties."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with a community of health-conscious individuals and certified nutritionists for guidance and motivation."
  }
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Nutritionist",
    bio: "PhD in Nutritional Science, 15+ years experience",
    avatar: "👩‍⚕️"
  },
  {
    name: "Mike Chen",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in health tech",
    avatar: "👨‍💻"
  },
  {
    name: "Alex Rivera",
    role: "Data Scientist",
    bio: "ML specialist focusing on nutrition analytics",
    avatar: "👨‍🔬"
  }
];

const stats = [
  { value: "100K+", label: "Active Users" },
  { value: "5M+", label: "Meals Tracked" },
  { value: "99.2%", label: "Accuracy Rate" },
  { value: "4.9★", label: "User Rating" }
];

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen gradient-mesh pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            About <span className="text-transparent bg-clip-text" style={{
              background: 'linear-gradient(135deg, hsl(270 95% 75%) 0%, hsl(262 83% 58%) 50%, hsl(221 83% 53%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>NutritionPro</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing nutrition tracking with cutting-edge AI technology and personalized insights 
            to help you achieve your health goals with unprecedented precision and ease.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-luxury p-6 md:p-8 text-center shadow-luxury hover:shadow-premium hover-elegant">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="glass-luxury p-8 md:p-12 shadow-luxury mb-12 md:mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accent-amethyst/20 to-accent-emerald/15 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-morphing">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-accent-amethyst" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              To democratize access to personalized nutrition insights through innovative technology, 
              empowering individuals to make informed dietary choices that enhance their overall well-being 
              and quality of life. We believe that everyone deserves access to the tools and knowledge 
              necessary to achieve optimal health.
            </p>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-8 md:mb-12 text-foreground">
            Why Choose <span className="text-primary">NutritionPro</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-luxury p-6 md:p-8 shadow-luxury hover:shadow-premium hover-elegant group">
                  <div className="bg-gradient-to-br from-accent-sapphire/20 to-accent-amethyst/15 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-morphing group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent-sapphire" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-8 md:mb-12 text-foreground">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-luxury p-6 md:p-8 text-center shadow-luxury hover:shadow-premium hover-elegant">
                <div className="text-4xl md:text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-lg md:text-xl font-black mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Card className="glass-luxury p-8 md:p-12 shadow-luxury text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg">
              <Mail className="mr-2 w-5 h-5" />
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}