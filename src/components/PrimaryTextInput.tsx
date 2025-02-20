export default function PrimaryTextInput() {
  return (
    <div className="text-input">
      <div className="header">
        <div className="label">
          <label className="label-text">Label</label>
          <label className="label-optional">Optional</label>
        </div>
        <label className="label-description">Description</label>
      </div>
      <input type="text" className="input-form" placeholder="Placeholder" />
    </div>
  );
}
