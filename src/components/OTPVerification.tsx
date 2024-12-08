import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verified, setVerified] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      setVerified(true);
      toast.success("Account verified successfully!");
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } else {
      toast.error("Please enter a valid OTP");
    }
  };

  return (
    <div className="auth-container">
      {!verified ? (
        <div className="auth-form">
          <h1 className="text-2xl font-bold text-center mb-4">Verify Your Account</h1>
          <p className="text-center text-gray-600 mb-8">
            Enter the 4-digit code sent to your phone
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-2xl"
              />
            ))}
          </div>

          <Button 
            onClick={handleVerify} 
            className="w-full"
          >
            Verify Account
          </Button>
        </div>
      ) : (
        <div className="text-center animate-fade-in">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Verification Successful!</h2>
          <p className="text-gray-600">Redirecting to sign in...</p>
        </div>
      )}
    </div>
  );
};

export default OTPVerification;