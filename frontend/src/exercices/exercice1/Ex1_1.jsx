function Button({ children, ...restProps }) {
  return (
    <button
      {...restProps}
      className="rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700"
    >
      {children}
    </button>
  );
}

export default function Ex1() {
  return (
    <div className="grid h-screen place-content-center">
      <Button>Click</Button>
    </div>
  );
}
