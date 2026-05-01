"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";

const contactEmail = "Colquittconcrete@yahoo.com";

function getFormValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getFormValue(formData, "name");
    const contact = getFormValue(formData, "contact");
    const project = getFormValue(formData, "project");
    const details = getFormValue(formData, "details");

    const subject = project
      ? `Concrete estimate request - ${project}`
      : "Concrete estimate request";

    const body = [
      `Name: ${name}`,
      `Phone or email: ${contact}`,
      `Project type: ${project}`,
      "",
      "Details:",
      details,
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Phone or email
        <input type="text" name="contact" placeholder="Best way to reach you" />
      </label>
      <label>
        Project type
        <select name="project" defaultValue="Driveway or parking pad">
          <option>Driveway or parking pad</option>
          <option>Patio or porch slab</option>
          <option>Sidewalk or walkway</option>
          <option>Stamped or decorative concrete</option>
          <option>Demo, grading, or site prep</option>
        </select>
      </label>
      <label>
        Details
        <textarea
          name="details"
          placeholder="Approximate size, location, access notes, and timing"
        />
      </label>
      <button className="button formButton" type="submit">
        Prepare estimate request <ArrowRight size={17} />
      </button>
    </form>
  );
}
