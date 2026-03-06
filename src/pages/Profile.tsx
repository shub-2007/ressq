import { Layout } from '@/components/layout/Layout';

export function Profile() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <div className="w-24 h-24 bg-slate-200 rounded-full mb-6" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">User Profile</h1>
        <p className="text-slate-500">
          Manage your offline data preferences and medical ID here.
        </p>
      </div>
    </Layout>
  );
}
