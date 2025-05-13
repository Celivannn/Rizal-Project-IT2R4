
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import NotFound from "./pages/NotFound";

// Create a placeholder for future chapters
const PlaceholderChapter = ({ number }: { number: number }) => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center px-4 max-w-md">
        <h1 className="text-3xl font-bold mb-4">Chapter {number}</h1>
        <p className="text-xl text-gray-600 mb-6">
          This chapter will be implemented soon. Please check back later!
        </p>
        <a href="/" className="text-primary hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<PlaceholderChapter number={3} />} />
          <Route path="/chapter4" element={<Chapter4 />} />
          <Route path="/chapter5" element={<Chapter5 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
