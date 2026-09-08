import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Book Now | Redstone Driving School',
  description: 'Book your driving lessons in Calgary, Airdrie, Chestermere, Cochrane, Crossfield, Okotoks, and Strathmore today. Call, text, or email us to get started.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
