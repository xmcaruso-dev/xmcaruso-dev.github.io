"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { PayButton } from "@/components/PayButton";

type SampleLeadFormProps = {
  cta: string;
  noteLabel: string;
  notePlaceholder?: string;
  className?: string;
  address?: boolean;
  choice?: {
    legend: string;
    options: string[];
  };
};

type LeadFields = {
  name: string;
  email: string;
  phone: string;
  address: string;
  note: string;
  choice: string;
};

const empty: LeadFields = {
  name: "",
  email: "",
  phone: "",
  address: "",
  note: "",
  choice: "",
};

export function SampleLeadForm({
  cta,
  noteLabel,
  notePlaceholder,
  className = "",
  address,
  choice,
}: SampleLeadFormProps) {
  const [fields, setFields] = useState<LeadFields>(empty);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof LeadFields>(key: K, value: LeadFields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`demo-done ${className}`.trim()} role="status">
        <p className="demo-done-label">SAMPLE LAYOUT</p>
        <h2>Nothing left this browser.</h2>
        <p>
          This form is a demo. It does not email a practice and it does not
          book a real appointment. If you want a page like this one, pay $2,500
          and fill the intake. I start when both are in.
        </p>
        <div className="hero-actions">
          <PayButton />
          <Link className="btn btn-ghost" href="/intake">
            Tell me the offer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className={`sample-form ${className}`.trim()} onSubmit={onSubmit} id="lead">
      <p className="sample-form-kicker">SAMPLE LAYOUT</p>
      <label className="field">
        <span>Name</span>
        <input
          name="name"
          autoComplete="name"
          required
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </label>
      <label className="field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </label>
      <label className="field">
        <span>Phone</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={fields.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </label>
      {address ? (
        <label className="field">
          <span>Address or nearest cross street</span>
          <input
            name="address"
            autoComplete="street-address"
            value={fields.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </label>
      ) : null}
      {choice ? (
        <fieldset className="field-group">
          <legend>{choice.legend}</legend>
          {choice.options.map((option) => (
            <label className="check" key={option}>
              <input
                type="radio"
                name="choice"
                required
                checked={fields.choice === option}
                onChange={() => update("choice", option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>
      ) : null}
      <label className="field">
        <span>{noteLabel}</span>
        <textarea
          name="note"
          rows={3}
          placeholder={notePlaceholder}
          value={fields.note}
          onChange={(e) => update("note", e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-primary btn-block">
        {cta}
      </button>
      <p className="form-note">Demo form. Submit stays in this browser.</p>
    </form>
  );
}
