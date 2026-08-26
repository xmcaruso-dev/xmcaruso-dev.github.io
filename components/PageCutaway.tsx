export function PageCutaway() {
  return (
    <div className="cutaway">
      <aside className="cutaway-notes">
        <p>
          <strong>The offer.</strong> One line at the top. Not Welcome to our
          website.
        </p>
        <p>
          <strong>Proof slots.</strong> Your facts, if you have them. I leave
          the space quiet if you skip. I will not write a review you did not
          earn.
        </p>
        <p>
          <strong>The form.</strong> Name, email, phone, a note. It goes to the
          inbox you name.
        </p>
        <p>
          <strong>The phone.</strong> Same page, stacked. Most of the clicks
          happen here, so this is where I start.
        </p>
      </aside>

      <div className="cutaway-page" aria-hidden="true">
        <p className="cutaway-brand">Your offer</p>
        <p className="cutaway-h">The thing they came here to do.</p>
        <p className="cutaway-p">
          A short paragraph. What it is, who it is for, what happens next.
        </p>
        <div className="cutaway-proof">
          <span>A fact you can stand behind</span>
          <span>Another, if you have it</span>
          <span>Or this slot stays empty</span>
        </div>
        <div className="cutaway-form">
          <span />
          <span />
          <span />
          <b>Send</b>
        </div>
      </div>

      <div className="cutaway-phone" aria-hidden="true">
        <p className="cutaway-brand">Your offer</p>
        <p className="cutaway-h cutaway-h-sm">The thing they came here to do.</p>
        <p className="cutaway-p">Short. Thumb reach. Form in view.</p>
        <div className="cutaway-form cutaway-form-sm">
          <span />
          <span />
          <b>Send</b>
        </div>
      </div>
    </div>
  );
}
