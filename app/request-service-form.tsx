"use client";

import { useState, type FormEvent } from "react";

type RequestServiceFormProps = {
  phoneDisplay: string;
  phoneHref: string;
};

type FormStatus = {
  tone: "success" | "error" | "info";
  message: string;
};

const serviceTypes = [
  "Residential Plumbing",
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Drain Service",
  "Fixture Installation",
  "Sump Pump",
  "Condo Plumbing",
  "Leak / Diagnostics",
  "Other",
];

const emailJsConfig = {
  serviceId:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_ap77yjl",
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_qz0s6xs",
  publicKey:
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "2pYZiqZw71whtYv7v",
};

export function RequestServiceForm({
  phoneDisplay,
  phoneHref,
}: RequestServiceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("service_id", emailJsConfig.serviceId);
    formData.append("template_id", emailJsConfig.templateId);
    formData.append("user_id", emailJsConfig.publicKey);
    formData.append("submitted_at", new Date().toLocaleString("en-CA", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Toronto",
    }));
    formData.append("website", "Skyline Flow Toronto Plumbing");

    setIsSubmitting(true);
    setStatus({
      tone: "info",
      message: "Sending your request...",
    });

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Email request failed");
      }

      form.reset();
      setStatus({
        tone: "success",
        message:
          "Request sent. Skyline Flow will review the details and follow up shortly.",
      });
    } catch {
      setStatus({
        tone: "error",
        message: `The online request could not be sent. Please call Skyline Flow at ${phoneDisplay}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="request-form reveal"
      data-emailjs-form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <label>
          <span>Name*</span>
          <input autoComplete="name" name="from_name" required type="text" />
        </label>

        <label>
          <span>Phone*</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>

        <label>
          <span>Email</span>
          <input autoComplete="email" name="reply_to" type="email" />
        </label>

        <label>
          <span>City / Service Address*</span>
          <input
            autoComplete="street-address"
            name="service_address"
            required
            type="text"
          />
        </label>
      </div>

      <label>
        <span>Type of Service</span>
        <select defaultValue="" name="service_type">
          <option disabled value="">
            Select a service
          </option>
          {serviceTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Tell Us What Is Happening</span>
        <textarea
          name="message"
          placeholder="Describe the fixture, leak, drain, piping, sump pump or renovation project."
          rows={6}
        />
      </label>

      <label>
        <span>Upload Photos</span>
        <input
          accept="image/*"
          multiple
          name="photos"
          type="file"
        />
        <small>
          Attach photos of the fixture, leak, piping or problem area.
        </small>
      </label>

      <div className="form-actions">
        <button
          className="button button-primary"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Request service"}
        </button>
        <a className="button button-secondary form-call" href={phoneHref}>
          Call {phoneDisplay}
        </a>
      </div>

      {status ? (
        <p className={`form-status form-status-${status.tone}`} role="status">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
