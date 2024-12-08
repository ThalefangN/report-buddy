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
      <h1 className="text-2xl font-bold text-center mb-8">Account Verification</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
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
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">National ID/Passport</label>
          <Input 
            value={formData.nationalId}
            onChange={(e) => setFormData(prev => ({ ...prev, nationalId: e.target.value }))}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Place of Birth</label>
          <Input 
            value={formData.placeOfBirth}
            onChange={(e) => setFormData(prev => ({ ...prev, placeOfBirth: e.target.value }))}
            required
          />
        </div>

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
              className="w-full"
              onClick={() => document.getElementById('document-upload')?.click()}
            >
              <Upload className="mr-2" />
              Choose File
            </Button>
          </div>
          {formData.document && (
            <p className="text-sm text-muted-foreground">
              File selected: {formData.document.name}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Submit for Verification
        </Button>
      </form>

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

export default VerifyIdentity;