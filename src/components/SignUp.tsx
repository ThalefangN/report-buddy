import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, Facebook, Chrome, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SignUp = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    navigate('/verify-otp');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="text-2xl font-bold text-center mb-8">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="input-group">
            <User className="input-icon" />
            <Input 
              type="text"
              placeholder="Username"
              className="pl-10"
              required
            />
          </div>

          <div className="input-group">
            <Mail className="input-icon" />
            <Input 
              type="email"
              placeholder="Email"
              className="pl-10"
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" />
            <Input 
              type="password"
              placeholder="Password"
              className="pl-10"
              required
            />
          </div>

          <div className="flex gap-2">
            <div className="w-1/3">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger>
                  <Flag className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  <SelectItem value="+86">🇨🇳 +86</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="input-group flex-1">
              <Phone className="input-icon" />
              <Input 
                type="tel"
                placeholder="Phone Number"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <label 
              htmlFor="terms" 
              className="text-sm text-gray-600"
            >
              I agree to the Terms and Conditions
            </label>
          </div>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="social-button">
              <Chrome className="w-5 h-5" />
              <span>Google</span>
            </button>
            <button className="social-button">
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;