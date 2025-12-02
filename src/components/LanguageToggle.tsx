import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const getLabel = () => {
    switch (language) {
      case "en":
        return "EN";
      case "am":
        return "አማ";
      case "both":
        return "EN/አማ";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{getLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English Only
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("am")}>
          አማርኛ ብቻ (Amharic Only)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("both")}>
          Both / ሁለቱም
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
