// src/app/create-trip/page.tsx
import CreateTripForm from '@/components/CreateTripForm';
import Footer from '@/components/Footer';

export default function CreateTripPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <CreateTripForm />
    </main>
  );
}