import type { Metadata } from "next";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { BASE_PATH, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us — ${SITE.name}`,
  description: `Get in touch with ${SITE.name} for marine infrastructure, coastal protection, and dredging projects in the UAE.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Top Banner with Contact Details */}
      <section className="relative flex min-h-[520px] md:h-[440px] md:max-h-[440px] flex-col justify-end overflow-hidden bg-marine-main pb-[75px] pt-28 text-white">
        <Container size="default" className="relative z-10 w-full">
          <FadeIn className="space-y-6 sm:space-y-8">
            {/* Address Row */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 bg-transparent text-white sm:h-14 sm:w-14">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-light text-white/80 sm:text-sm">
                  United Arab Emirates
                </p>
                <p className="mt-1 text-base font-medium text-white sm:text-lg md:text-xl">
                  {SITE.address}
                </p>
              </div>
            </div>

            {/* Phone & Email Row */}
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-16">
              {/* Call */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 bg-transparent text-white sm:h-14 sm:w-14">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-light text-white/80 sm:text-sm">Call</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-base font-medium text-white underline underline-offset-4 hover:text-teal-200 sm:text-lg"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 bg-transparent text-white sm:h-14 sm:w-14">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-light text-white/80 sm:text-sm">Email Us:</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block break-all text-base font-medium text-white hover:text-teal-200 sm:break-normal sm:text-lg"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-white py-16 sm:py-24">
        <Container size="default">
          {/* Underline Input Form */}
          <FadeIn>
            <form
              action={`${BASE_PATH}/contact.php`}
              method="POST"
              className="space-y-10 sm:space-y-12"
            >
              {/* Row 1: Name & Email */}
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Name Here"
                    className="min-h-12 w-full border-b border-gray-600 bg-transparent pb-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-marine-main focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your Mail Here"
                    className="min-h-12 w-full border-b border-gray-600 bg-transparent pb-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-marine-main focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Service */}
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    className="min-h-12 w-full border-b border-gray-600 bg-transparent pb-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-marine-main focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    placeholder="What Service You Want"
                    className="min-h-12 w-full border-b border-gray-600 bg-transparent pb-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-marine-main focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={2}
                  placeholder="Your Message"
                  className="min-h-12 w-full resize-none border-b border-gray-600 bg-transparent pb-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-marine-main focus:outline-none"
                />
              </div>

              {/* Row 4: Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full border border-marine-main bg-white px-7 py-2.5 text-sm font-semibold text-marine-main transition-all duration-300 hover:bg-marine-main hover:text-white shadow-sm"
                >
                  <span>Send Message</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-marine-main text-white transition-colors duration-300 group-hover:bg-white group-hover:text-marine-main">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                  </span>
                </button>
              </div>
            </form>
          </FadeIn>

          {/* Map Container */}
          <FadeIn className="mt-16 overflow-hidden rounded-3xl border border-sky-400/40 shadow-sm sm:mt-20">
            <iframe
              title="All Marine - Ascorp Holdings, Abu Dhabi"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465324.35869522707!2d54.48928!3d24.334418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e409ad21cfe09%3A0xef011018f7152872!2sAscorp%20Holdings!5e0!3m2!1sen!2sus!4v1787651001418!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[360px] w-full sm:h-[440px]"
            />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
