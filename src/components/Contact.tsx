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
    <section id="contact" className="py-16 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display text-gradient mb-6">Let's Build Intelligent Solutions</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                Ready to solve complex problems with AI? I'm always excited to discuss new opportunities 
                in machine learning and data science projects.
              </p>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-3xl text-text-primary mb-6 font-light">Get In Touch</h3>
                <p className="text-body-large text-text-secondary mb-10">
                  Whether you're looking for an AI engineer to join your team, need help with ML projects, 
                  or want to discuss the latest in AI/ML technology, I'd love to hear from you.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center space-x-6 bg-card p-4 rounded-xl border border-card-border">
                    <div className="w-14 h-14 bg-interactive-base rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm font-medium mb-1">Email</p>
                      <a 
                        href="mailto:harshpandey145@gmail.com" 
                        className="text-text-primary hover:text-accent-primary transition-colors text-lg font-medium"
                      >
                        harshpandey145@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 bg-card p-4 rounded-xl border border-card-border">
                    <div className="w-14 h-14 bg-interactive-base rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm font-medium mb-1">Location</p>
                      <p className="text-text-primary text-lg font-medium">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 bg-card p-4 rounded-xl border border-card-border">
                    <div className="w-14 h-14 bg-interactive-base rounded-full flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm font-medium mb-1">Status</p>
                      <p className="text-text-primary text-lg font-medium">Open to Opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Harsh-debug04" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-card border border-card-border rounded-full flex items-center justify-center hover:bg-interactive-hover hover:border-accent-primary transition-all duration-300 cursor-hover"
                  >
                    <Github className="w-6 h-6 text-text-secondary hover:text-accent-primary transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/harshwardhan-pandey-a536851a1/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-card border border-card-border rounded-full flex items-center justify-center hover:bg-interactive-hover hover:border-accent-primary transition-all duration-300 cursor-hover"
                  >
                    <Linkedin className="w-6 h-6 text-text-secondary hover:text-accent-primary transition-colors" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-glass rounded-2xl p-8 lg:p-10 border shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <h3 className="text-2xl text-text-primary mb-8 font-medium">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-text-primary font-medium">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background-subtle border-card-border focus-visible:ring-accent-primary h-12" />
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
                          <FormLabel className="text-text-primary font-medium">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-background-subtle border-card-border focus-visible:ring-accent-primary h-12" />
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
                          <FormLabel className="text-text-primary font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can I help you?"
                              className="resize-none bg-background-subtle border-card-border focus-visible:ring-accent-primary min-h-[150px]"
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
                          <Send className="w-5 h-5 mr-2" />
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
