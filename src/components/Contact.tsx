"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Хаяг",
    value: "Улаанбаатар хот, Сүхбаатар дүүрэг, Бага тойруу",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Утас",
    value: "+976 7011-1234",
    href: "tel:+97670111234",
  },
  {
    icon: Mail,
    label: "И-мэйл",
    value: "info@ankhniinakhia.mn",
    href: "mailto:info@ankhniinakhia.mn",
  },
  {
    icon: Clock,
    label: "Ажлын цаг",
    value: "Даваа - Баасан: 09:00 - 18:00",
    href: undefined,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            Холбоо барих
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Бидэнтэй{" "}
            <span className="text-teal-600">холбогдоорой</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Бүтээгдэхүүний талаар дэлгэрэнгүй мэдээлэл авах эсвэл захиалга
            өгөхийг хүсвэл бидэнтэй холбогдоорой.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const content = (
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-gray-800 font-medium">{item.value}</p>
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

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Улаанбаатар, Монгол</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Мэдээлэл амжилттай илгээгдлээ!
                  </h3>
                  <p className="text-gray-500">
                    Бид тантай удахгүй холбогдох болно.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  >
                    Дахин илгээх
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Нэр
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Таны нэр"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Утас
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+976"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      И-мэйл
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сэдэв
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-gray-800"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Сонгох...
                      </option>
                      <option>Бүтээгдэхүүний мэдээлэл</option>
                      <option>Захиалга өгөх</option>
                      <option>Хамтын ажиллагаа</option>
                      <option>Бусад</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Мессеж
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Таны мессеж..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    Илгээх
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
