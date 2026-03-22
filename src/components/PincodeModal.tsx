import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

const validPincodes = [
  "111111", "123456", "110003", 
  "400001", "400002", "400003",
  "500001", "500002", "500003",
  "560001", "560002", "560003",
  "600001", "600002", "600003"
];

const PincodeModal = () => {
  const { showPincodeModal, setShowPincodeModal, setHasCheckedPincode, setVerifiedPincode } = useCart();
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim()) {
      setError("Please enter a valid pincode.");
      return;
    }

    if (validPincodes.includes(pincode.trim())) {
      setSuccess(true);
      setError("");
      setHasCheckedPincode(true);
      setVerifiedPincode(pincode.trim());
      
      // Auto-close after showing the success message in the popup
      setTimeout(() => {
        setShowPincodeModal(false);
        setSuccess(false);
      }, 2000);
    } else {
      setError("Sorry, we don't deliver to your area yet.");
    }
  };

  const handleOpenChange = (open: boolean) => {
    setShowPincodeModal(open);
    if (!open) {
      setSuccess(false);
      setError("");
    }
  };

  return (
    <Dialog open={showPincodeModal} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#1c2840] font-display text-xl">
            <MapPin className="text-primary w-5 h-5" />
            Check Delivery Availability
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Since this is your first time ordering, please verify if we deliver fresh food to your location.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-green-600">We deliver in your area!</h3>
            <p className="text-muted-foreground mt-2">You can now proceed with your order.</p>
          </div>
        ) : (
          <form onSubmit={handleCheck} className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <Input
                id="pincode"
                placeholder="Enter your 6-digit Pincode (e.g. 110001)"
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                  setError("");
                }}
                maxLength={6}
                className="text-lg tracking-wide"
              />
              {error && <p className="text-sm text-destructive font-medium">{error}</p>}
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPincodeModal(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Check
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PincodeModal;
