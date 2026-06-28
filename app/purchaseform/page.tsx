"use client"
import React, { useState } from 'react'
import "../components/styles/deliveryForm.css"

type FormData = {
  name: string
  whatsapp: string
  password: string
  location: string
  email: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const NAME_REGEX = /^[A-Za-z\s'-]{2,}$/
const WHATSAPP_REGEX = /^\+[1-9]\d{7,14}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/


function validateField(field: keyof FormData, value: string): string {
  switch (field) {
    case "name":
      return NAME_REGEX.test(value.trim()) ? "" : "Enter your full name (letters only, 2+ characters)"
    case "whatsapp":
      return WHATSAPP_REGEX.test(value.trim())
        ? ""
        : "Use international format with country code, e.g. +265888123456"
    case "email":
      return EMAIL_REGEX.test(value.trim()) ? "" : "Enter a valid email address"
    case "password":
      return PASSWORD_REGEX.test(value)
        ? ""
        : "At least 8 characters, with one letter and one number"
    case "location":
      return value.trim().length >= 3 ? "" : "Tell us your delivery address or area"
    default:
      return ""
  }
}

function DeliveryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    password: "",
    location: "",
    email: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [agreedTouched, setAgreedTouched] = useState(false)
  const agreedError = agreedTouched && !agreed ? "You must accept the user agreement to continue" : ""
  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
    }
  }

  function handleBlur(field: keyof FormData) {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) }))
  }

  function handleSubmit(e: React.FormEvent) {
  
  e.preventDefault()
  
  const allErrors: FormErrors = {}
  ;(Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
    allErrors[field] = validateField(field, formData[field])
  })

  setErrors(allErrors)
  setTouched({ name: true, whatsapp: true, password: true, location: true, email: true })
  setAgreedTouched(true)

  const hasErrors = Object.values(allErrors).some((msg) => msg)
  if (!hasErrors && agreed) {
    setSubmitted(true)
    // TODO: send formData to your API / backend here
  }
}

  if (submitted) {
    return (
      <div className="delivery-form-page">
        <div className="delivery-card delivery-success">
          <LeafIcon className="success-leaf" />
          <h2>You're all set, {formData.name.split(" ")[0]}</h2>
          <p>We'll WhatsApp you at {formData.whatsapp} to confirm your free delivery.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="delivery-form-page">
      <div className="delivery-card">
        <span className="eyebrow">Free delivery</span>
        <h2 className="form-heading">Fill the following form for free delivery</h2>

        <form onSubmit={handleSubmit} noValidate>
          <Field
            label="Full name"
            field="name"
            value={formData.name}
            error={touched.name ? errors.name : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Edward Banda"
          />
          <Field
            label="WhatsApp number"
            field="whatsapp"
            value={formData.whatsapp}
            error={touched.whatsapp ? errors.whatsapp : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+265888123456"
            hint="Include your country code"
          />
          <Field
            label="Email"
            field="email"
            type="email"
            value={formData.email}
            error={touched.email ? errors.email : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
          />
          <Field
            label="Delivery location"
            field="location"
            value={formData.location}
            error={touched.location ? errors.location : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Area 47, Lilongwe"
          />

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <div className="password-wrap">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="At least 8 characters"
                className={touched.password && errors.password ? "invalid" : ""}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="field-error">{errors.password}</p>
            )}
          </div>
          <div className="agreement-field">
  <label className="agreement-label">
    <input
      type="checkbox"
      checked={agreed}
      onChange={(e) => {
        setAgreed(e.target.checked)
        setAgreedTouched(true)
      }}
      className={agreedError ? "invalid" : ""}
    />
    <span>
      I agree to the{" "}
      <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>{" "}
      and{" "}
      <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>,
      and consent to being contacted on WhatsApp about my order.
    </span>
  </label>
  {agreedError && <p className="field-error">{agreedError}</p>}
</div>

<button type="submit" className="submit-button">
  Submit for free delivery
</button>

          <button type="submit" className="submit-button">
            Submit for free delivery
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({
  label,
  field,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  hint,
  type = "text",
}: {
  label: string
  field: keyof FormData
  value: string
  error?: string
  onChange: (field: keyof FormData, value: string) => void
  onBlur: (field: keyof FormData) => void
  placeholder?: string
  hint?: string
  type?: string
}) {
  return (
    <div className="form-field">
      <label htmlFor={field}>{label}</label>
      <input
        id={field}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(field, e.target.value)}
        onBlur={() => onBlur(field)}
        className={error ? "invalid" : ""}
      />
      {!error && hint && <p className="field-hint">{hint}</p>}
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20C4 12 9 5 20 4C19 15 12 20 4 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 19C9 15 12 11 17 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default DeliveryForm