"use client";

import { useState, type FormEvent } from "react";

type RequestServiceFormProps = {
  phoneDisplay: string;
  phoneHref: string;
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

export function RequestServiceForm({
  phoneDisplay,
  phoneHref,
}: RequestServiceFormProps) {
  const [showFallback, setShowFallback] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowFallback(true);
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
        <button className="button button-primary" type="submit">
          Request service
        </button>
        <a className="button button-secondary form-call" href={phoneHref}>
          Call {phoneDisplay}
        </a>
      </div>

      {showFallback ? (
        <p className="form-status" role="status">
          Online request delivery is ready to be connected. For now, please call
          Skyline Flow to finish the request.
        </p>
      ) : null}
    </form>
  );
}
