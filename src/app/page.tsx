import { getServerSession } from 'next-auth';

const HomePage = async () => {
  const session = await getServerSession();

  return (
    <div className="pt-20">
      <div className="w-full max-w-md mx-auto space-y-6 text-center bg-white p-6 rounded-lg shadow-md">
        {session && <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>}
        {!session && <p className="text-gray-500 dark:text-gray-400">Sign in to your account to continue.</p>}
        <div className="text-left space-y-4">
          <div className="flex items-center">
            <span className="font-semibold text-gray-800 w-32">User:</span>
            <span className="text-gray-600">{session?.user?.name || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
