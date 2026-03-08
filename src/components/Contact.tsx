"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "./motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: MapPin,
      label: t("address.label"),
      value: t("address.value"),
      href: undefined,
    },
    {
      icon: Phone,
      label: t("phone.label"),
      value: t("phone.value"),
      value2: t("phone2.value"),
      href: "tel:+97670111234",
      href2: "tel:+97680010366",
    },
    {
      icon: Mail,
      label: t("email.label"),
      value: t("email.value"),
      href: "mailto:info@ankhniinakhia.mn",
    },
  ];

  const workHours = [
    { day: t("hours.monday"), time: "09:00 - 18:00" },
    { day: t("hours.tuesday"), time: "09:00 - 18:00" },
    { day: t("hours.wednesday"), time: "09:00 - 18:00" },
    { day: t("hours.thursday"), time: "09:00 - 18:00" },
    { day: t("hours.friday"), time: "09:00 - 18:00" },
    { day: t("hours.saturday"), time: t("hours.closed") },
    { day: t("hours.sunday"), time: t("hours.closed") },
  ];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342]">
              {t("title")}
            </h2>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <FadeInLeft className="lg:col-span-2">
            <StaggerContainer className="space-y-3 sm:space-y-4" staggerDelay={0.1}>
              {contactInfo.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F9FAFB] border border-gray-100 hover:border-[#00AC94]/30 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                      <item.icon className="w-4.5 h-4.5 text-[#00AC94]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#455A6F]/60 font-medium mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#243342] font-medium hover:text-[#00AC94] transition-colors block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#243342] font-medium">{item.value}</p>
                      )}
                      {"value2" in item && item.value2 && (
                        <a href={(item as { href2?: string }).href2} className="text-sm text-[#243342] font-medium hover:text-[#00AC94] transition-colors block">
                          {item.value2}
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}

              {/* Work Hours */}
              <StaggerItem>
                <div className="p-5 rounded-xl bg-[#F9FAFB] border border-gray-100 hover:border-[#00AC94]/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                      <Clock className="w-4.5 h-4.5 text-[#00AC94]" />
                    </div>
                    <p className="text-sm font-semibold text-[#243342]">{t("hours.label")}</p>
                  </div>
                  <div className="space-y-0.5">
                    {workHours.slice(0, 5).map((item) => (
                      <div key={item.day} className="flex items-center justify-between text-sm leading-tight">
                        <span className="text-[#243342] font-medium">{item.day}</span>
                        <span className="text-[#455A6F]">{item.time}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between text-sm leading-tight">
                      <span className="text-[#243342] font-medium">{t("hours.saturday")}, {t("hours.sunday")}</span>
                      <span className="text-[#455A6F]">{t("hours.closed")}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeInLeft>

          {/* Contact Form */}
          <FadeInRight className="lg:col-span-3">
            <div className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-5 sm:p-7">
              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 rounded-2xl bg-[#00AC94]/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-[#00AC94]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#243342] mb-2">
                    {t("success.title")}
                  </h3>
                  <p className="text-sm text-[#455A6F]">
                    {t("success.description")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 px-5 py-2 text-sm font-medium text-[#00AC94] hover:bg-[#00AC94]/5 rounded-lg transition-colors"
                  >
                    {t("success.resendButton")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#243342] mb-1.5">
                        {t("form.nameLabel")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#00AC94] focus:ring-2 focus:ring-[#00AC94]/20 outline-none transition-all text-sm text-[#243342] placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#243342] mb-1.5">
                        {t("form.phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={t("form.phonePlaceholder")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#00AC94] focus:ring-2 focus:ring-[#00AC94]/20 outline-none transition-all text-sm text-[#243342] placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#243342] mb-1.5">
                      {t("form.emailLabel")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#00AC94] focus:ring-2 focus:ring-[#00AC94]/20 outline-none transition-all text-sm text-[#243342] placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#243342] mb-1.5">
                      {t("form.subjectLabel")}
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#00AC94] focus:ring-2 focus:ring-[#00AC94]/20 outline-none transition-all text-sm text-[#243342]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("form.subjectPlaceholder")}
                      </option>
                      <option>{t("form.subjectProductInfo")}</option>
                      <option>{t("form.subjectOrder")}</option>
                      <option>{t("form.subjectPartnership")}</option>
                      <option>{t("form.subjectOther")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#243342] mb-1.5">
                      {t("form.messageLabel")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#00AC94] focus:ring-2 focus:ring-[#00AC94]/20 outline-none transition-all text-sm text-[#243342] placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00AC94] hover:bg-[#009882] hover:scale-[1.02] text-white text-sm font-medium rounded-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    {t("form.submitButton")}
                  </button>
                </form>
              )}
            </div>
          </FadeInRight>
        </div>

        {/* Google Maps */}
        <FadeInUp delay={0.3}>
          <div className="mt-10 sm:mt-14 rounded-2xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2341.8697246867496!2d106.88180416892887!3d47.90236452439272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96933500a1bf57%3A0xd2ded91321348072!2z0LPRjdGA0Y3Qu9GCINOp0YDQs9Op06kg0YXQvtGC0YXQvtC9!5e1!3m2!1sen!2sus!4v1773011256927!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Анхны Нахиа ХХК байршил"
            />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
