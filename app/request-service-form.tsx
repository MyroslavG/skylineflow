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

const propertyTypes = [
  {
    label: "House",
    value: "house",
  },
  {
    label: "Building",
    value: "building",
  },
  {
    label: "Commercial",
    value: "commercial",
  },
];

const getFieldValue = (formData: FormData, name: string) => {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
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
    const payload = {
      name: getFieldValue(formData, "name"),
      phone: getFieldValue(formData, "phone"),
      email: getFieldValue(formData, "email"),
      address: getFieldValue(formData, "address"),
      property_type: getFieldValue(formData, "property_type"),
      preferred_time: getFieldValue(formData, "preferred_time"),
      problem_description: getFieldValue(formData, "problem_description"),
    };

    setIsSubmitting(true);
    setStatus({
      tone: "info",
      message: "Sending your request...",
    });

    try {
      const response = await fetch(
        "/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
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
      data-lead-form
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <label>
          <span>Name*</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>

        <label>
          <span>Phone*</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>

        <label>
          <span>Email</span>
          <input autoComplete="email" name="email" type="email" />
        </label>

        <label>
          <span>City / Service Address*</span>
          <input
            autoComplete="street-address"
            name="address"
            required
            type="text"
          />
        </label>
      </div>

      <div className="form-grid">
        <label>
          <span>Property Type*</span>
          <select defaultValue="" name="property_type" required>
            <option disabled value="">
              Select property type
            </option>
            {propertyTypes.map((propertyType) => (
              <option key={propertyType.value} value={propertyType.value}>
                {propertyType.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Preferred Time</span>
          <input
            autoComplete="off"
            name="preferred_time"
            placeholder="Morning, afternoon, or a date"
            type="text"
          />
        </label>
      </div>

      <label>
        <span>Tell Us What Is Happening</span>
        <textarea
          name="problem_description"
          placeholder="Describe the fixture, leak, drain, piping, sump pump or renovation project."
          required
          rows={6}
        />
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
