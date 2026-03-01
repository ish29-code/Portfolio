"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e: any) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("Form Data:", form);
    }

    return (
        <section className="py-20 bg-gray-50 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
                Let's Connect
            </h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-md"
            >
                <Input
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                />

                <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                />

                <Textarea
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                />

                <Button type="submit" className="w-full">
                    Send Message
                </Button>
            </form>
        </section>
    );
}