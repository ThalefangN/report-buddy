import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OnboardingSlides from "./components/OnboardingSlides";
import SignUp from "./components/SignUp";
import OTPVerification from "./components/OTPVerification";
import SignIn from "./components/SignIn";
import VerifyIdentity from "./components/VerifyIdentity";
import VerificationPending from "./components/VerificationPending";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingSlides />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/verification-pending" element={<VerificationPending />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;