"use client";

import { FormEvent, useMemo, useState } from "react";

type IntakeFields = {
  businessName: string;
  offer: string;
  audience: string;
  cta: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  skipProof: boolean;
  logo: string;
  noLogo: boolean;
  leadsTo: string;
  deadline: string;
  email: string;
};

const empty: IntakeFields = {
  businessName: "",
  offer: "",
  audience: "",
  cta: "",
  bullet1: "",
  bullet2: "",
  bullet3: "",
  skipProof: false,
  logo: "",
  noLogo: false,
  leadsTo: "",
  deadline: "",
  email: "",
};

function asRecord(fields: IntakeFields) {
  return {
    businessName: fields.businessName,
    offer: fields.offer,
    audience: fields.audience,
    primaryCta: fields.cta,
    proofPoints: fields.skipProof
      ? []
      : [fields.bullet1, fields.bullet2, fields.bullet3].filter(Boolean),
    skippedProof: fields.skipProof,
    logo: fields.noLogo ? null : fields.logo || null,
    noLogo: fields.noLogo,
    leadsTo: fields.leadsTo,
    deadline: fields.deadline || null,
    contactEmail: fields.email,
    submittedAt: new Date().toISOString(),
  };
}

export function IntakeForm() {
  const [fields, setFields] = useState<IntakeFields>(empty);
  const [submitted, setSubmitted] = useState<ReturnType<typeof asRecord> | null>(
    null,
  );
  const [copied, setCopied] = useState(false);

  const json = useMemo(
    () => (submitted ? JSON.stringify(submitted, null, 2) : ""),
    [submitted],
  );

  function update<K extends keyof IntakeFields>(key: K, value: IntakeFields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const record = asRecord(fields);
    try {
      window.localStorage.setItem("friday-page-intake", JSON.stringify(record));
    } catch {
      // Storage can be blocked. The success screen still holds the answers.
    }
    setSubmitted(record);
    setCopied(false);
  }

  async function copyAnswers() {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (submitted) {
    return (
      <div className="success" role="status">
        <h2>Got it.</h2>
        <p>
          Answers are on this screen and saved in this browser. Nothing was
          emailed. I start when this intake and payment are both in.
        </p>
        <dl className="success-dl">
          <div>
            <dt>Business</dt>
            <dd>{submitted.businessName}</dd>
          </div>
          <div>
            <dt>Offer</dt>
            <dd>{submitted.offer}</dd>
          </div>
          <div>
            <dt>Audience</dt>
            <dd>{submitted.audience}</dd>
          </div>
          <div>
            <dt>Primary CTA</dt>
            <dd>{submitted.primaryCta}</dd>
          </div>
          <div>
            <dt>Proof</dt>
            <dd>
              {submitted.skippedProof
                ? "Skipped"
                : submitted.proofPoints.join(" · ") || "None given"}
            </dd>
          </div>
          <div>
            <dt>Logo</dt>
            <dd>
              {submitted.noLogo ? "None yet" : submitted.logo || "None given"}
            </dd>
          </div>
          <div>
            <dt>Leads go to</dt>
            <dd>{submitted.leadsTo}</dd>
          </div>
          <div>
            <dt>Deadline</dt>
            <dd>{submitted.deadline || "None"}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{submitted.contactEmail}</dd>
          </div>
        </dl>
        <div className="success-actions">
          <button type="button" className="btn btn-primary" onClick={copyAnswers}>
            {copied ? "Copied" : "Copy answers"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setSubmitted(null);
              setCopied(false);
            }}
          >
            Edit answers
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="intake-form" onSubmit={onSubmit} noValidate={false}>
      <label className="field">
        <span>Business name</span>
        <input
          name="businessName"
          autoComplete="organization"
          required
          value={fields.businessName}
          onChange={(e) => update("businessName", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Offer in one sentence</span>
        <textarea
          name="offer"
          required
          rows={3}
          maxLength={280}
          value={fields.offer}
          onChange={(e) => update("offer", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Who it is for</span>
        <input
          name="audience"
          required
          value={fields.audience}
          onChange={(e) => update("audience", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Primary CTA you want on the page</span>
        <input
          name="cta"
          required
          placeholder="Book a call, Get a quote, Start a trial"
          value={fields.cta}
          onChange={(e) => update("cta", e.target.value)}
        />
      </label>

      <fieldset className="field-group" disabled={fields.skipProof}>
        <legend>Three proof points</legend>
        <p className="field-help">Facts you can stand behind. Skip if you do not have them.</p>
        <label className="field">
          <span>Point 1</span>
          <input
            name="bullet1"
            value={fields.bullet1}
            onChange={(e) => update("bullet1", e.target.value)}
          />
        </label>
        <label className="field">
          <span>Point 2</span>
          <input
            name="bullet2"
            value={fields.bullet2}
            onChange={(e) => update("bullet2", e.target.value)}
          />
        </label>
        <label className="field">
          <span>Point 3</span>
          <input
            name="bullet3"
            value={fields.bullet3}
            onChange={(e) => update("bullet3", e.target.value)}
          />
        </label>
      </fieldset>

      <label className="check">
        <input
          type="checkbox"
          checked={fields.skipProof}
          onChange={(e) => update("skipProof", e.target.checked)}
        />
        <span>Skip proof points</span>
      </label>

      <label className="field">
        <span>Logo URL (optional)</span>
        <input
          name="logo"
          type="text"
          inputMode="url"
          placeholder="https:// or leave blank"
          disabled={fields.noLogo}
          value={fields.logo}
          onChange={(e) => update("logo", e.target.value)}
        />
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={fields.noLogo}
          onChange={(e) => {
            update("noLogo", e.target.checked);
            if (e.target.checked) update("logo", "");
          }}
        />
        <span>No logo yet</span>
      </label>

      <label className="field">
        <span>Where to send leads</span>
        <input
          name="leadsTo"
          required
          placeholder="inbox@yourdomain.com"
          value={fields.leadsTo}
          onChange={(e) => update("leadsTo", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Deadline, if any</span>
        <input
          name="deadline"
          placeholder="None"
          value={fields.deadline}
          onChange={(e) => update("deadline", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Contact email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </label>

      <p className="form-note">
        This form stays in the browser. It does not email an inbox.
      </p>

      <button type="submit" className="btn btn-primary btn-block">
        Submit intake
      </button>
    </form>
  );
}
