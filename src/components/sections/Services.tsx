import { Code2, Palette, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  {
    icon: <Code2 className="h-12 w-12 mb-4 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: <Palette className="h-12 w-12 mb-4 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement.",
  },
  {
    icon: <Rocket className="h-12 w-12 mb-4 text-primary" />,
    title: "Digital Strategy",
    description: "Strategic planning and consulting to maximize your online presence and growth.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive web solutions to help your business thrive in the digital world.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2}>
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}