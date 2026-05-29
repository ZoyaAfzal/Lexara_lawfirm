import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  date: z.string().min(1, "Please select a date"),
  area: z.string().min(1, "Please select a practice area"),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const bookingForm = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      area: "",
    },
  });

  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onBookingSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values);
    toast.success("Appointment request sent successfully!");
    bookingForm.reset();
  }

  function onContactSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    toast.success("Message sent successfully!");
    contactForm.reset();
  }

  return (
    <section className="py-28 bg-forest text-ivory relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain-overlay pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Booking Form Section */}
          <motion.div
            id="booking"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="scroll-mt-32"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Reservation</div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              Book an <span className="italic text-gold">Appointment</span>
            </h2>
            <p className="text-ivory/60 mb-10 max-w-md">
              Schedule a confidential strategy session with one of our lead attorneys.
            </p>

            <Form {...bookingForm}>
              <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={bookingForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory/80">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-ivory/5 border-ivory/10 focus:border-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={bookingForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory/80">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            className="bg-ivory/5 border-ivory/10 focus:border-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={bookingForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory/80">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your phone number"
                            className="bg-ivory/5 border-ivory/10 focus:border-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={bookingForm.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory/80">Preferred Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-ivory/5 border-ivory/10 focus:border-gold appearance-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={bookingForm.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory/80">Practice Area</FormLabel>
                      <FormControl>
                        <select
                          className="flex h-10 w-full rounded-md border border-ivory/10 bg-ivory/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-gold"
                          {...field}
                        >
                          <option value="" disabled className="text-forest">
                            Select an area
                          </option>
                          <option value="corporate" className="text-forest">
                            Corporate Law
                          </option>
                          <option value="family" className="text-forest">
                            Family Law
                          </option>
                          <option value="litigation" className="text-forest">
                            Litigation
                          </option>
                          <option value="real-estate" className="text-forest">
                            Real Estate
                          </option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gold text-forest-dark hover:bg-gold-light py-6 rounded-full font-medium tracking-wide"
                >
                  Request Appointment
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="scroll-mt-32"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Inquiry</div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              Send a <span className="italic text-gold">Message</span>
            </h2>

            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory/80">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Smith"
                            className="bg-ivory/5 border-ivory/10 focus:border-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ivory/80">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jane@smith.com"
                            className="bg-ivory/5 border-ivory/10 focus:border-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={contactForm.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory/80">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How can we help?"
                          className="bg-ivory/5 border-ivory/10 focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory/80">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your case briefly..."
                          className="bg-ivory/5 border-ivory/10 focus:border-gold min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full border border-gold text-gold hover:bg-gold hover:text-forest-dark py-6 rounded-full font-medium tracking-wide bg-transparent"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
