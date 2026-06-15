import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Github, Linkedin, MapPin, Coffee, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="py-20 bg-background-subtle border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display mb-6">Let's Connect</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                Ready to solve complex problems with AI? I'm always excited to discuss new opportunities.
              </p>
              <div className="w-16 h-[1px] bg-border mx-auto mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-3xl text-text-primary mb-6 font-serif">Get In Touch</h3>
                <p className="text-body-large text-text-secondary mb-10">
                  Whether you're looking for an AI engineer to join your team, need help with ML projects, 
                  or want to discuss the latest in technology, I'd love to hear from you.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-6">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-text-muted text-sm font-medium uppercase tracking-wider mb-1">Email</p>
                      <a 
                        href="mailto:harshpandey145@gmail.com" 
                        className="text-text-primary hover:text-primary transition-colors text-lg"
                      >
                        harshpandey145@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-text-muted text-sm font-medium uppercase tracking-wider mb-1">Location</p>
                      <p className="text-text-primary text-lg">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <Coffee className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-text-muted text-sm font-medium uppercase tracking-wider mb-1">Status</p>
                      <p className="text-text-primary text-lg">Open to Opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Harsh-debug04" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center hover:bg-border transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-text-primary" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/harshwardhan-pandey-a536851a1/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center hover:bg-border transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-text-primary" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-background border border-border p-8 lg:p-10">
                <h3 className="text-2xl text-text-primary mb-8 font-serif">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-primary font-medium text-sm uppercase tracking-wider">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background rounded-none border-input focus-visible:ring-1 focus-visible:ring-primary h-12" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-primary font-medium text-sm uppercase tracking-wider">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-background rounded-none border-input focus-visible:ring-1 focus-visible:ring-primary h-12" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-primary font-medium text-sm uppercase tracking-wider">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can I help you?"
                              className="resize-none bg-background rounded-none border-input focus-visible:ring-1 focus-visible:ring-primary min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
