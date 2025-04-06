'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import contactImg from '@/public/images/contact-image.jpg';
import { useGsapFadeInUp } from '@/hooks/useGsapFadeInUp';
import Loading from '@/app/loading';
import { navbarIcons } from '@/lib/navItems';
import Link from 'next/link';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z
    .string()
    .min(5, { message: 'Message must be at least 5 characters long.' }),
});

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  //////!!!!!!!!!!!!!! ispageloading을 다 없애면 애니메이션 적용되고 있으면 적용이 안됨!!! 해결 필요!!!!

  const contactRef = useGsapFadeInUp();

  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data.success) {
        setResponseMessage('✅ Message sent successfully!');
        form.reset();
      } else {
        setResponseMessage('❌ Failed to send message.');
      }
    } catch (error) {
      setResponseMessage('❌ An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (isPageLoading) return <Loading />;

  return (
    <div
      ref={contactRef}
      className={`${
        isImageLoaded ? '' : 'opacity-0'
      } relative flex flex-col items-center mb-10 md:flex-row md:justify-center md:pt-25`}
    >
      <div className="relative w-full h-[420px] z-10 md:w-md md:h-auto">
        <Image
          src={contactImg}
          alt="contact image"
          height={400}
          width={300}
          className="w-full h-full object-cover dark:brightness-75"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      <div
        className="relative w-full max-w-md p-6 md:border rounded-md md:shadow-md 
      md:h-140 md:max-h-auto md:mt-20 md:ml-[-10px] md:pt-15
      dark:border-gray-700"
      >
        <h2 className="text-xl font-semibold mb-4 md:text-4xl md:mb-8">
          Contact Me
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between md:mt-10">
              <div className="flex text-4xl gap-5">
                {navbarIcons.map((icon) => {
                  return (
                    <Link
                      key={icon.href}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon.icon}
                    </Link>
                  );
                })}
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="rounded-xl md:text-[1rem] cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </Form>
        {responseMessage && (
          <p className="mt-4 text-center md:mt-10">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
