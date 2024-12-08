import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const SignUp = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

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

          <div className="input-group">
            <Phone className="input-icon" />
            <Input 
              type="tel"
              placeholder="Phone Number"
              className="pl-10"
              required
            />
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
              <img src="/google.svg" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="social-button">
              <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;