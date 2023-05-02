export function LineLoading() {
  return (
    <div>
      <svg viewBox="0 0 100 10" className="w-screen fixed left-0 top-0 z-50" fill="#23CAD4">
        <rect x="0" y="0" width="100" height="1">
          <animate attributeName="width" values="0;100" dur="1.5s" />
        </rect>
      </svg>
    </div>
  );
}
