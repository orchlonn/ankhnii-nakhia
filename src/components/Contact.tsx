"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

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
      href: "tel:+97670111234",
    },
    {
      icon: Mail,
      label: t("email.label"),
      value: t("email.value"),
      href: "mailto:info@ankhniinakhia.mn",
    },
    {
      icon: Clock,
      label: t("hours.label"),
      value: t("hours.value"),
      href: undefined,
    },
  ];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {contactInfo.map((item) => {
              const content = (
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F9FAFB] border border-gray-100 hover:border-[#00AC94]/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">
                    <item.icon className="w-4.5 h-4.5 text-[#00AC94]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#455A6F]/60 font-medium mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#243342] font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
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
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00AC94] hover:bg-[#009882] text-white text-sm font-medium rounded-xl transition-all"
                  >
                    <Send className="w-4 h-4" />
                    {t("form.submitButton")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
