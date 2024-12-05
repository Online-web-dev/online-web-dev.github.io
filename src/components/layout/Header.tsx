import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            OnLine
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-foreground">
            Services
          </a>
          <a href="#work" className="text-foreground/80 hover:text-foreground">
            Our Work
          </a>
          <a href="#process" className="text-foreground/80 hover:text-foreground">
            Process
          </a>
          <ThemeToggle />
          <Button>Contact Us</Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-foreground/80 hover:text-foreground">
              Services
            </a>
            <a href="#work" className="text-foreground/80 hover:text-foreground">
              Our Work
            </a>
            <a href="#process" className="text-foreground/80 hover:text-foreground">
              Process
            </a>
            <Button>Contact Us</Button>
          </nav>
        </div>
      )}
    </header>
  );
}