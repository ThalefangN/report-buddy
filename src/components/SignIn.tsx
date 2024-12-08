import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Facebook, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-identity');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome Back</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button type="submit" className="w-full">
            Sign In
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

export default SignIn;