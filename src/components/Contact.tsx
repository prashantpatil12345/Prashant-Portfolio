import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xyzebjoo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
      
      // Show success message
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 bg-[#0a0f2c]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-[#00ffff] mx-auto mb-6"></div>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-[#1b1f3b] rounded-xl p-6 shadow-lg shadow-black/20 h-full animate-fade-in">
              <h3 className="text-xl font-bold text-[#ffffff] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#00ffff]/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-[#00ffff]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#ffffff]">Email</h4>
                    <p className="text-[#b0b0b0]">prashantmp264@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00ffff]/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-[#00ffff]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#ffffff]">Phone</h4>
                    <p className="text-[#b0b0b0]">7385310565</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00ffff]/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-[#00ffff]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#ffffff]">Location</h4>
                    <p className="text-[#b0b0b0]">Shirprur, Dhule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-[#1b1f3b] rounded-xl p-6 shadow-lg shadow-black/20 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold text-[#ffffff] mb-6">
                Send Me a Message
              </h3>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/20 rounded-xl text-green-400">
                  <p className="flex items-center">
                    <span className="mr-2">✓</span>
                    Your message has been sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-[#ffffff] mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Prashant Patil"
                      required
                      className="w-full bg-[#1b1f3b] border-[#00ffff] text-[#ffffff] focus:border-[#00ffff] focus:ring-[#00ffff] rounded-xl px-4 py-3 h-auto placeholder:text-[#b0b0b0] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    />
                  </div>
                  
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-[#ffffff] mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-[#1b1f3b] border-[#00ffff] text-[#ffffff] focus:border-[#00ffff] focus:ring-[#00ffff] rounded-xl px-4 py-3 h-auto placeholder:text-[#b0b0b0] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#ffffff] mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-[#1b1f3b] border-[#00ffff] text-[#ffffff] focus:border-[#00ffff] focus:ring-[#00ffff] rounded-xl px-4 py-3 h-auto placeholder:text-[#b0b0b0] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#ffffff] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="w-full bg-[#1b1f3b] border-[#00ffff] text-[#ffffff] focus:border-[#00ffff] focus:ring-[#00ffff] rounded-xl px-4 py-3 resize-none placeholder:text-[#b0b0b0] transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full sm:w-auto bg-[#00ffff] hover:bg-[#00ced1] text-[#0a0f2c] px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
