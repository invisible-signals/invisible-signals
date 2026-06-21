import StatusPill from '../components/StatusPill.jsx'

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <StatusPill color="blue">POLICY_ACTIVE</StatusPill>
          <span className="font-mono text-xs text-is-dim tracking-widest">UPDATED: 2026-06-21</span>
        </div>
        <h1 className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-is-text mb-3">
          PRIVACY_POLICY
        </h1>
        <p className="font-mono text-sm text-is-secondary leading-relaxed">
          Invisible Signals™ is a static, open-source site. No accounts, no servers, no databases.
          This policy explains what limited analytics we collect and why.
        </p>
      </div>

      {/* Overview */}
      <section className="is-panel p-6 mb-6">
        <span className="is-label block mb-4">01 // OVERVIEW</span>
        <p className="font-mono text-sm text-is-secondary leading-relaxed">
          This site does not collect, store, or share any personal data. There is no login, no
          account creation, no form submission, and no server-side processing of any kind.
          The only data collection that occurs is anonymous behavioral analytics via Microsoft
          Clarity, described below.
        </p>
      </section>

      {/* Behavioral Analysis */}
      <section className="is-panel p-6 mb-6">
        <span className="is-label block mb-4">02 // BEHAVIORAL_ANALYSIS // MICROSOFT_CLARITY</span>
        <div className="space-y-4">
          <p className="font-mono text-sm text-is-secondary leading-relaxed">
            This site uses{' '}
            <a
              href="https://clarity.microsoft.com"
              target="_blank"
              rel="noreferrer"
              className="text-is-primary hover:underline"
            >
              Microsoft Clarity
            </a>
            , a behavioral analytics tool. Clarity may collect:
          </p>
          <ul className="space-y-2 pl-4">
            {[
              'Page navigation and click patterns',
              'Scroll depth and session replays',
              'Heatmap aggregates showing where users interact',
              'Browser/device type and approximate region',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-mono text-sm text-is-secondary">
                <span className="mt-1.5 w-1 h-1 bg-is-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t border-is-border pt-4 mt-4">
            <span className="is-label block mb-3">PURPOSE</span>
            <p className="font-mono text-sm text-is-secondary leading-relaxed">
              Clarity data is used <span className="text-is-text font-semibold">solely</span> to
              understand how people navigate the site so the UX can be improved. It is{' '}
              <span className="text-is-alert font-semibold">not</span> used for advertising,
              retargeting, marketing, or any commercial purpose.
            </p>
          </div>
          <div className="border-t border-is-border pt-4">
            <span className="is-label block mb-3">MICROSOFT_GOVERNANCE</span>
            <p className="font-mono text-sm text-is-secondary leading-relaxed">
              Clarity data is processed by Microsoft under their own privacy terms. See{' '}
              <a
                href="https://privacy.microsoft.com/privacystatement"
                target="_blank"
                rel="noreferrer"
                className="text-is-primary hover:underline"
              >
                Microsoft's Privacy Statement
              </a>{' '}
              for details on how they handle this data.
            </p>
          </div>
        </div>
      </section>

      {/* Data Practices */}
      <section className="is-panel p-6 mb-6">
        <span className="is-label block mb-4">03 // DATA_PRACTICES</span>
        <div className="space-y-4">
          {[
            {
              label: 'PERSONAL_DATA',
              status: 'coral',
              pill: 'NOT_COLLECTED',
              text: 'No names, email addresses, payment information, or any personally identifiable information is collected, stored, or transmitted by this site.',
            },
            {
              label: 'DATA_SHARING',
              status: 'coral',
              pill: 'NONE',
              text: 'No data is sold, rented, or shared with third parties for any purpose. Clarity data flows only to Microsoft as described above.',
            },
            {
              label: 'DATA_STORAGE',
              status: 'coral',
              pill: 'NO_SERVER',
              text: 'This is a fully static site. There is no backend, no database, and no server. Nothing you do on this site is persisted by us.',
            },
            {
              label: 'COOKIES',
              status: 'gold',
              pill: 'ANALYTICS_ONLY',
              text: 'Microsoft Clarity sets cookies to maintain session continuity for its behavioral analysis. No other cookies are set by this site.',
            },
          ].map(({ label, status, pill, text }) => (
            <div key={label} className="border-b border-is-border last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="is-label">{label}</span>
                <StatusPill color={status}>{pill}</StatusPill>
              </div>
              <p className="font-mono text-sm text-is-secondary leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="is-panel p-6 mb-6">
        <span className="is-label block mb-4">04 // OPEN_SOURCE</span>
        <p className="font-mono text-sm text-is-secondary leading-relaxed">
          Invisible Signals™ is fully open source under the Apache 2.0 license. You can inspect
          every line of code, including all analytics integrations, in the{' '}
          <a
            href="https://github.com/invisible-signals/invisible-signals"
            target="_blank"
            rel="noreferrer"
            className="text-is-primary hover:underline"
          >
            public repository
          </a>
          .
        </p>
      </section>

      {/* Contact */}
      <section className="is-panel p-6">
        <span className="is-label block mb-4">05 // QUESTIONS</span>
        <p className="font-mono text-sm text-is-secondary leading-relaxed">
          Questions about this policy? Open an issue or discussion on the{' '}
          <a
            href="https://github.com/invisible-signals/invisible-signals"
            target="_blank"
            rel="noreferrer"
            className="text-is-primary hover:underline"
          >
            GitHub repository
          </a>
          .
        </p>
      </section>
    </div>
  )
}
