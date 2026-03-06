import { Layout } from '@/components/layout/Layout';

export function Map() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Nearby Hospitals</h1>
        <p className="text-slate-500">
          This feature would use the Geolocation API to find nearby hospitals and pharmacies.
          <br /><br />
          (Offline map data would be pre-cached here)
        </p>
      </div>
    </Layout>
  );
}
