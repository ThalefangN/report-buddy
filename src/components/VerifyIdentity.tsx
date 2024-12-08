import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Home, PenSquare, Bell, Map, User, Upload } from 'lucide-react';
import { toast } from 'sonner';

const VerifyIdentity = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'John Doe', // Auto-filled example
    dateOfBirth: '',
    nationalId: '',
    placeOfBirth: '',
    document: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.document) {
      toast.error("Please upload your ID document");
      return;
    }
    navigate('/verification-pending');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, document: e.target.files![0] }));
      toast.success("Document uploaded successfully");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <FileText className="w-12 h-12 mx-auto text-primary animate-bounce" />
          <h1 className="text-2xl font-bold">Account Verification</h1>
          <p className="text-muted-foreground">Please provide your details for verification</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm animate-scale-in">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input 
                value={formData.fullName}
                readOnly
                className="bg-muted"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date of Birth</label>
              <Input 
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                required
                className="hover:border-primary focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">National ID/Passport</label>
              <Input 
                value={formData.nationalId}
                onChange={(e) => setFormData(prev => ({ ...prev, nationalId: e.target.value }))}
                required
                className="hover:border-primary focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Place of Birth</label>
              <Input 
                value={formData.placeOfBirth}
                onChange={(e) => setFormData(prev => ({ ...prev, placeOfBirth: e.target.value }))}
                required
                className="hover:border-primary focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm animate-scale-in">
            <div className="space-y-2">
              <label className="text-sm font-medium">Upload ID Document</label>
              <div className="flex items-center gap-2">
                <Input 
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  id="document-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-white transition-colors group"
                  onClick={() => document.getElementById('document-upload')?.click()}
                >
                  <Upload className="mr-2 group-hover:scale-110 transition-transform" />
                  Choose File
                </Button>
              </div>
              {formData.document && (
                <p className="text-sm text-muted-foreground mt-2 animate-fade-in">
                  File selected: {formData.document.name}
                </p>
              )}
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 transition-colors"
          >
            Submit for Verification
          </Button>
        </form>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
            <PenSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
            <Map className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default VerifyIdentity;