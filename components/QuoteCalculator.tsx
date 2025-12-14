'use client'

import { useState, useMemo } from 'react'

const SCOOTER_CLASSES = [
  { value: 'class-2', label: 'Class 2 (Pavement)', description: 'Max 4mph, pavement only', maxSpeed: 4 },
  { value: 'class-3', label: 'Class 3 (Road)', description: 'Max 8mph, road legal', maxSpeed: 8 },
  { value: 'powerchair', label: 'Powerchair', description: 'Electric wheelchair', maxSpeed: 4 },
]

const SCOOTER_VALUES = [
  { value: '500', label: 'Under £500' },
  { value: '1000', label: '£500 - £1,000' },
  { value: '2000', label: '£1,000 - £2,000' },
  { value: '3000', label: '£2,000 - £3,000' },
  { value: '5000', label: '£3,000 - £5,000' },
  { value: '7500', label: 'Over £5,000' },
]

const COVER_TYPES = [
  { value: 'basic', label: 'Basic Cover', description: 'Theft & fire only', multiplier: 0.7 },
  { value: 'comprehensive', label: 'Comprehensive', description: 'Theft, damage, breakdown', multiplier: 1.0, popular: true },
  { value: 'premium', label: 'Premium', description: 'All risks + personal accident', multiplier: 1.3 },
]

const EXCESS_OPTIONS = [
  { value: '0', label: '£0 Excess', multiplier: 1.2 },
  { value: '50', label: '£50 Excess', multiplier: 1.0 },
  { value: '100', label: '£100 Excess', multiplier: 0.85 },
]

function estimatePremium(scooterValue: string, coverType: string, excess: string, includeBreakdown: boolean) {
  const baseValue = parseInt(scooterValue) || 1000
  const coverMultiplier = COVER_TYPES.find(c => c.value === coverType)?.multiplier || 1
  const excessMultiplier = EXCESS_OPTIONS.find(e => e.value === excess)?.multiplier || 1
  const breakdownAddition = includeBreakdown ? 15 : 0

  // Base rate: roughly 4-6% of scooter value annually
  const baseAnnual = (baseValue * 0.05) * coverMultiplier * excessMultiplier + breakdownAddition
  const annual = Math.max(40, Math.min(200, baseAnnual))
  const monthly = annual / 12

  return {
    monthly: { low: Math.floor(monthly * 0.85), high: Math.ceil(monthly * 1.15) },
    annual: { low: Math.floor(annual * 0.85), high: Math.ceil(annual * 1.15) }
  }
}

function formatCurrency(amount: number) {
  return `£${amount.toFixed(0)}`
}

export function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [scooterClass, setScooterClass] = useState('class-2')
  const [scooterValue, setScooterValue] = useState('1000')
  const [coverType, setCoverType] = useState('comprehensive')
  const [excess, setExcess] = useState('50')
  const [includeBreakdown, setIncludeBreakdown] = useState(true)
  const [postcode, setPostcode] = useState('')
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(
    () => estimatePremium(scooterValue, coverType, excess, includeBreakdown),
    [scooterValue, coverType, excess, includeBreakdown]
  )

  const canProceed = () => {
    switch (step) {
      case 1: return scooterClass && scooterValue
      case 2: return coverType
      case 3: return postcode.length >= 3
      default: return true
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => s < step && setStep(s)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? 'bg-blue-500 text-white'
                  : s < step
                  ? 'bg-blue-500/30 text-blue-400 cursor-pointer hover:bg-blue-500/50'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 3 && (
              <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${s < step ? 'bg-blue-500/50' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm text-slate-400 px-2">
        <span className={step === 1 ? 'text-blue-400' : ''}>Your Scooter</span>
        <span className={step === 2 ? 'text-blue-400' : ''}>Cover Options</span>
        <span className={step === 3 ? 'text-blue-400' : ''}>Get Quote</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Scooter Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Scooter Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SCOOTER_CLASSES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setScooterClass(type.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        scooterClass === type.value
                          ? 'bg-blue-500/20 border-2 border-blue-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{type.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Scooter Value</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SCOOTER_VALUES.map((val) => (
                    <button
                      key={val.value}
                      onClick={() => setScooterValue(val.value)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        scooterValue === val.value
                          ? 'bg-blue-500/20 border-2 border-blue-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white">{val.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Cover Options */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Your Cover Type</h3>
                <div className="space-y-3">
                  {COVER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setCoverType(type.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all relative ${
                        coverType === type.value
                          ? 'bg-blue-500/20 border-2 border-blue-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 right-4 px-2 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
                          Most Popular
                        </span>
                      )}
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Excess Amount</h3>
                <div className="grid grid-cols-3 gap-3">
                  {EXCESS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setExcess(opt.value)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        excess === opt.value
                          ? 'bg-blue-500/20 border-2 border-blue-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      checked={includeBreakdown}
                      onChange={(e) => setIncludeBreakdown(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                      includeBreakdown ? 'bg-blue-500 border-blue-500' : 'border-slate-500 group-hover:border-slate-400'
                    }`}>
                      {includeBreakdown && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-medium">Breakdown Cover</div>
                    <div className="text-sm text-slate-400">24/7 roadside assistance and recovery to your home</div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Step 3: Get Quote */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Your Location</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Postcode <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    placeholder="e.g. SW1A 1AA"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                    maxLength={8}
                  />
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Quote Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scooter Type</span>
                    <span className="text-white">{SCOOTER_CLASSES.find(s => s.value === scooterClass)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scooter Value</span>
                    <span className="text-white">{SCOOTER_VALUES.find(v => v.value === scooterValue)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cover Type</span>
                    <span className="text-white">{COVER_TYPES.find(c => c.value === coverType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Excess</span>
                    <span className="text-white">{EXCESS_OPTIONS.find(e => e.value === excess)?.label}</span>
                  </div>
                  {includeBreakdown && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extras</span>
                      <span className="text-blue-400">Breakdown Cover</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setShowEstimate(true)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Get Quote Estimate
              </button>
            )}
          </div>
        </div>

        {/* Estimate Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Estimated Monthly Premium</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {formatCurrency(premium.monthly.low)} - {formatCurrency(premium.monthly.high)}
                </div>
                <div className="text-sm text-blue-400">per month</div>
                <div className="text-xs text-slate-500 mt-2">
                  ({formatCurrency(premium.annual.low)} - {formatCurrency(premium.annual.high)} per year)
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Theft &amp; accidental damage
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Public liability cover
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  UK specialist insurers
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                *Indicative pricing only. Actual premiums depend on individual circumstances.
              </p>
            </div>

            {showEstimate && (
              <div className="mt-4 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">What happens next?</h4>
                <p className="text-sm text-slate-400 mb-4">
                  To get accurate quotes from specialist mobility scooter insurers, click below to compare policies from leading UK providers.
                </p>
                <a
                  href="https://www.surewise.com/mobility-scooter-insurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Compare Quotes
                </a>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  Compare from leading UK mobility scooter insurers
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
