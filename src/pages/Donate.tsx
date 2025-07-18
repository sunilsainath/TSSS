import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Building, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Scan from '@/assets/TSSS_Scan.jpg';

const Donate = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your generous donations help us continue our work in blood donation drives, 
            educational support, and spiritual programs. Every contribution makes a difference.
          </p>
        </div>

        {/* Donation Impact */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in">
              <CardHeader>
                <CardTitle className="text-trust-orange">₹365</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provides educational supplies for one child for a month
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-trust-orange">₹500</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Covers expenses for organizing one blood donation camp
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-trust-orange">₹3600</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  One year membership for all the programs done through TSSS!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bank Details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bank Transfer */}
          <div className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-6 w-6 text-trust-orange" />
                  <span>Bank Transfer Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-warm-bg rounded-lg">
                    <div>
                      <p className="font-semibold">Account Holder</p>
                      <p className="text-muted-foreground">Telangana Srinivasula Seva Samstha</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('Telangana Srinivasula Seva Samstha', 'Account Holder Name')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-warm-bg rounded-lg">
                    <div>
                      <p className="font-semibold">Bank Name</p>
                      <p className="text-muted-foreground">Axis Bank Ltd</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('Axis Bank Ltd', 'Bank Name')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-warm-bg rounded-lg">
                    <div>
                      <p className="font-semibold">Account Number</p>
                      <p className="text-muted-foreground">925020000294054</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('925020000294054', 'Account Number')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-warm-bg rounded-lg">
                    <div>
                      <p className="font-semibold">IFSC Code</p>
                      <p className="text-muted-foreground">UTIB0000290</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('UTIB0000290', 'IFSC Code')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-warm-bg rounded-lg">
                    <div>
                      <p className="font-semibold">Branch</p>
                      <p className="text-muted-foreground">Karimnagar</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('Karimnagar', 'Branch Name')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Please mention "Donation for Srinivasula Seva Samstha" 
                    in the transfer description and send us a screenshot at 
                    donations@srinivasulasevasamstha.com for acknowledgment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* UPI & Online Options */}
          <div className="space-y-8">
            {/* UPI */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-trust-orange" />
                    <span>UPI Payment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-warm-bg rounded-lg">
                    
                    
                   </div>
                  
                  <div className="text-center p-6 bg-warm-bg rounded-lg">
                    <div className="w-3200 h-3200 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-muted">
<img
    src={Scan} // <-- replace with actual image path
    alt="QR Code"
    className="mx-auto w-3500 h-240 mb-2" // adjusts size and centers the image
  />                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scan this QR code with any UPI app to make a donation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tax Benefits */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-6 w-6 text-trust-orange" />
                    <span>Tax Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Your donations to Srinivasula Seva Samstha are eligible for tax deductions 
                      under Section 80G of the Income Tax Act.
                    </p>
                    <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                      <p className="text-sm text-success font-medium">
                        Get 50% tax deduction on your donation amount
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We will provide you with an official receipt for tax purposes 
                      within 7 business days of receiving your donation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Information */}
        <section className="mt-16 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Trust Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Registration Details</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Trust Registration Number:</strong> Regd. No. 192/2024
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>PAN Number:</strong> AAFTT0654G
                  </p>
                  <p className="text-sm text-muted-foreground">
                 {/*   <strong>80G Certificate Number:</strong> DIT(E)/80G/2024/001 */}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact for Donations</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Email:</strong> donations@srinivasulasevasamstha.com
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Phone:</strong> +91 8143538604
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For any queries regarding donations or receipts, please contact us.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Donate;