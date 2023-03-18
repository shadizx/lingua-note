export default async function Layout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { readonly id: string };
}) {
  return <>{children}</>;
}

export interface Params {
  params: {
    id: string;
  };
}
