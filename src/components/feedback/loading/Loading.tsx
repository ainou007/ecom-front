import { TLoading } from '@/lib/types';

type LoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};
const Loading = ({ loading, error, children }: LoadingProps) => {
  if (loading == TLoading.pending) return <div>Loading... please wait</div>;
  if (loading == TLoading.failed) return <div> {error} </div>;
  return <div>{children}</div>;
};
export default Loading;
