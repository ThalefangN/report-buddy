import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertCircle, Home, PenSquare, Bell, Map, User } from 'lucide-react';

const VerificationPending = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4">
          <AlertCircle className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-2xl font-bold">Verification Pending</h1>
        </div>

        <div className="space-y-4 text-center">
          <p className="font-medium">Your verification is in progress.</p>
          <p className="text-muted-foreground">Estimated time for verification: 24-48 hours.</p>
          <p className="text-muted-foreground">You will be notified once your account has been verified.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg text-center">
          <p className="font-medium">Until verification is complete, you will not be able to make reports.</p>
        </div>

        <Button 
          className="w-full"
          onClick={() => navigate('/home')}
        >
          Return to Home
        </Button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button variant="ghost" size="sm">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <PenSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Map className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default VerificationPending;