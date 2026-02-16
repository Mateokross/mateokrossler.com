export default function ButtonDesignLab() {
  return (
    <main className="button-lab-page">
      <header className="button-lab-header">
        <p className="button-lab-kicker">Design Playground</p>
        <h1>Button Design Lab</h1>
        <p>
          EP-133 inspired option for <strong>Work</strong> and{' '}
          <strong>Photography</strong>.
        </p>
        <div className="button-lab-links">
          <a href="/">Home</a>
          <a href="#/button-lab">Refresh Lab</a>
        </div>
      </header>

      <section className="button-lab-grid" aria-label="Button variants">
        <article className="button-lab-card">
          <div className="button-lab-card-head">
            <span className="button-lab-id">01</span>
            <h2>EP-133 Cluster</h2>
          </div>
          <div className="te133-main">
            <div className="te133-buttons">
              <div className="te133-button-pair">
                <div className="te133-btn-shell">
                  <button type="button" className="te133-button te133-button-plusminus">
                    <svg viewBox="0 -960 960 960" className="te133-icon" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200-440v-80h560v80H200Z" />
                    </svg>
                  </button>
                </div>
                <div className="te133-btn-shell">
                  <button type="button" className="te133-button te133-button-plusminus">
                    <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" className="te133-icon">
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="te133-button-pair">
                <div className="te133-btn-shell">
                  <button type="button" className="te133-button te133-button-work">
                    <span className="te133-button-text">Work</span>
                  </button>
                </div>
                <div className="te133-btn-shell">
                  <button type="button" className="te133-button te133-button-photo">
                    <span className="te133-button-text">Photography</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="te133-caption">Teenage Engineering inspired cluster</div>
          </div>
        </article>
      </section>
    </main>
  )
}
