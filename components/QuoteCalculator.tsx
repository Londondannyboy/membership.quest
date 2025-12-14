'use client'

import { useState, useMemo } from 'react'

const TEACHING_TYPES = [
  { value: 'solo', label: 'Solo Teaching', description: 'Independent 1-on-1 sessions' },
  { value: 'studio', label: 'Studio Owner', description: 'Manage a yoga studio' },
  { value: 'group', label: 'Group Classes', description: 'Teach multiple classes' },
  { value: 'trainee', label: 'Trainee', description: 'Still completing training' },
]

const EXPERIENCE_LEVELS = [
  { value: '0-2', label: '0-2 Years', description: 'Newly qualified' },
  { value: '2-5', label: '2-5 Years', description: 'Growing experience' },
  { value: '5+', label: '5+ Years', description: 'Experienced teacher' },
]

const COVER_TYPES = [
  { value: 'indemnity', label: 'Professional Indemnity', description: 'Coverage for negligence claims', multiplier: 0.8 },
  { value: 'liability', label: 'Public Liability', description: 'Injury to students or property damage', multiplier: 1.0, popular: true },
  { value: 'combined', label: 'Combined', description: 'Both professional indemnity & public liability', multiplier: 1.3 },
]

const ADDITIONAL_OPTIONS = [
  { value: 'yoga-alliance', label: 'Yoga Alliance Membership Insurance', description: 'Insurance via Yoga Alliance register' },
  { value: 'cyber', label: 'Cyber Insurance', description: 'Protection for online/digital classes' },
]

function estimatePremium(experienceLevel: string, coverType: string, additionalOptions: string[]) {
  // Base premium varies by experience level and cover type
  const basePremium: Record<string, number> = {
    '0-2': 25,
    '2-5': 20,
    '5+': 18,
  }

  const baseMonthly = basePremium[experienceLevel] || 20
  const coverMultiplier = COVER_TYPES.find(c => c.value === coverType)?.multiplier || 1

  // Calculate monthly with cover type multiplier
  const monthlyAfterCover = baseMonthly * coverMultiplier

  // Add additional options
  let additionalMonthly = 0
  if (additionalOptions.includes('yoga-alliance')) additionalMonthly += 3
  if (additionalOptions.includes('cyber')) additionalMonthly += 4

  const totalMonthly = monthlyAfterCover + additionalMonthly

  // Add some variance for realism
  const monthlyVariance = totalMonthly * 0.15

  return {
    monthly: { low: Math.floor(totalMonthly - monthlyVariance), high: Math.ceil(totalMonthly + monthlyVariance) },
    annual: { low: Math.floor((totalMonthly - monthlyVariance) * 12), high: Math.ceil((totalMonthly + monthlyVariance) * 12) }
  }
}

function formatCurrency(amount: number) {
  return `£${amount.toFixed(0)}`
}

export function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [teachingType, setTeachingType] = useState('group')
  const [experienceLevel, setExperienceLevel] = useState('2-5')
  const [coverType, setCoverType] = useState('liability')
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([])
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(
    () => estimatePremium(experienceLevel, coverType, additionalOptions),
    [experienceLevel, coverType, additionalOptions]
  )

  const canProceed = () => {
    switch (step) {
      case 1: return teachingType
      case 2: return coverType
      default: return true
    }
  }

  const toggleAdditionalOption = (value: string) => {
    setAdditionalOptions(prev =>
      prev.includes(value)
        ? prev.filter(o => o !== value)
        : [...prev, value]
    )
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
        <span className={step === 1 ? 'text-blue-400' : ''}>Your Profile</span>
        <span className={step === 2 ? 'text-blue-400' : ''}>Coverage</span>
        <span className={step === 3 ? 'text-blue-400' : ''}>Get Quotes</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Teaching Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">How Do You Teach?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TEACHING_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setTeachingType(type.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        teachingType === type.value
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
                <h3 className="text-lg font-semibold text-white mb-4">Experience Level</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EXPERIENCE_LEVELS.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setExperienceLevel(level.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        experienceLevel === level.value
                          ? 'bg-blue-500/20 border-2 border-blue-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{level.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{level.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Coverage Options */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Your Coverage</h3>
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
                          Recommended
                        </span>
                      )}
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Additional Coverage</h3>
                <div className="space-y-3">
                  {ADDITIONAL_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-1">
                        <input
                          type="checkbox"
                          checked={additionalOptions.includes(opt.value)}
                          onChange={() => toggleAdditionalOption(opt.value)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          additionalOptions.includes(opt.value) ? 'bg-blue-500 border-blue-500' : 'border-slate-500 group-hover:border-slate-400'
                        }`}>
                          {additionalOptions.includes(opt.value) && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-medium">{opt.label}</div>
                        <div className="text-sm text-slate-400">{opt.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Your Quote Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Teaching Style</span>
                    <span className="text-white">{TEACHING_TYPES.find(t => t.value === teachingType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Experience</span>
                    <span className="text-white">{EXPERIENCE_LEVELS.find(e => e.value === experienceLevel)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage Type</span>
                    <span className="text-white">{COVER_TYPES.find(c => c.value === coverType)?.label}</span>
                  </div>
                  {additionalOptions.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Additional</span>
                      <span className="text-blue-400">{additionalOptions.length} option(s)</span>
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
                className="flex-1 py-4 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Get Quote Estimates
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
                  Professional protection
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Student protection
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  UK specialist providers
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                *Indicative pricing only. Actual premiums depend on individual circumstances.
              </p>
            </div>

            {showEstimate && (
              <div className="mt-4 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">Get Accurate Quotes</h4>
                <p className="text-sm text-slate-400 mb-4">
                  Compare quotes from specialist yoga teacher insurance providers in the UK.
                </p>
                <a
                  href="#providers"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Compare Providers
                </a>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  View detailed quotes from Yoga Alliance, Balens & more
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
