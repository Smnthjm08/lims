// "use client"

// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

// const steps = [
//   "Organization Details",
//   "Organization Contact",
//   "Laboratory Setup",
//   "Laboratory Contact",
//   "Review"
// ];

// export default function LIMSSetup() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     orgName: '',
//     orgDescription: '',
//     orgPhone: '',
//     orgAddress: '',
//     labName: '',
//     labType: '',
//     labPhone: '',
//     labAddress: ''
//   });

//   const handleInputChange = (e: { target: { name: any; value: unknown; }; }) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSelectChange = (value: string, name: string) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
//   const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

//   const renderStep = () => {
//     switch(currentStep) {
//       case 0:
//         return (
//           <>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="orgName">Organization Name</Label>
//                 <Input
//                   id="orgName"
//                   name="orgName"
//                   value={formData.orgName}
//                   onChange={handleInputChange}
//                   placeholder="Enter organization name"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="orgDescription">Organization Description</Label>
//                 <Textarea
//                   id="orgDescription"
//                   name="orgDescription"
//                   value={formData.orgDescription}
//                   onChange={handleInputChange}
//                   placeholder="Describe your organization"
//                 />
//               </div>
//             </div>
//           </>
//         );
//       case 1:
//         return (
//           <>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="orgPhone">Organization Phone</Label>
//                 <Input
//                   id="orgPhone"
//                   name="orgPhone"
//                   value={formData.orgPhone}
//                   onChange={handleInputChange}
//                   placeholder="Enter organization phone"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="orgAddress">Organization Address</Label>
//                 <Textarea
//                   id="orgAddress"
//                   name="orgAddress"
//                   value={formData.orgAddress}
//                   onChange={handleInputChange}
//                   placeholder="Enter organization address"
//                 />
//               </div>
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="labName">Laboratory Name</Label>
//                 <Input
//                   id="labName"
//                   name="labName"
//                   value={formData.labName}
//                   onChange={handleInputChange}
//                   placeholder="Enter laboratory name"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="labType">Laboratory Type</Label>
//                 <Select onValueChange={(value) => handleSelectChange(value, 'labType')}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select laboratory type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="clinical">Clinical</SelectItem>
//                     <SelectItem value="research">Research</SelectItem>
//                     <SelectItem value="diagnostic">Diagnostic</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="labPhone">Laboratory Phone</Label>
//                 <Input
//                   id="labPhone"
//                   name="labPhone"
//                   value={formData.labPhone}
//                   onChange={handleInputChange}
//                   placeholder="Enter laboratory phone"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="labAddress">Laboratory Address</Label>
//                 <Textarea
//                   id="labAddress"
//                   name="labAddress"
//                   value={formData.labAddress}
//                   onChange={handleInputChange}
//                   placeholder="Enter laboratory address"
//                 />
//               </div>
//             </div>
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Review Your Information</h3>
//               <div className="space-y-2">
//                 <p><strong>Organization Name:</strong> {formData.orgName}</p>
//                 <p><strong>Organization Description:</strong> {formData.orgDescription}</p>
//                 <p><strong>Organization Phone:</strong> {formData.orgPhone}</p>
//                 <p><strong>Organization Address:</strong> {formData.orgAddress}</p>
//                 <p><strong>Laboratory Name:</strong> {formData.labName}</p>
//                 <p><strong>Laboratory Type:</strong> {formData.labType}</p>
//                 <p><strong>Laboratory Phone:</strong> {formData.labPhone}</p>
//                 <p><strong>Laboratory Address:</strong> {formData.labAddress}</p>
//               </div>
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = () => {
//     // Here you would typically send the formData to your backend
//     console.log("Form submitted:", formData);
//     // You can add further logic here, such as redirecting to a success page
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-[550px]">
//         <CardHeader>
//           <CardTitle>LIMS Setup</CardTitle>
//           <CardDescription>Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           {renderStep()}
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button
//             variant="outline"
//             onClick={prevStep}
//             disabled={currentStep === 0}
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" /> Previous
//           </Button>
//           {currentStep === steps.length - 1 ? (
//             <Button onClick={handleSubmit}>
//               <Check className="mr-2 h-4 w-4" /> Submit
//             </Button>
//           ) : (
//             <Button onClick={nextStep}>
//               Next <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           )}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }