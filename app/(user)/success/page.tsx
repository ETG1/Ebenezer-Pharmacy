import SuccessClient from './userSuccess'

interface SuccessPageProps {
    searchParams: Promise<{
        session_id?: string | null;
    }>;
}

const SuccessPage = async ({ searchParams }: SuccessPageProps) => {
  // Handle the async logic in the server component
  const resolvedSearchParams = await searchParams;
  const { session_id } = resolvedSearchParams;

  // If no session_id, redirect on the server side
  if (!session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return <SuccessClient sessionId={session_id} />
}

export default SuccessPage;