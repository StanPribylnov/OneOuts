const ErrorFallback = ({ message }: { message: string }) => (
  <div>
    <h1>Error loading story</h1>
    <p>{message || 'An unexpected error occurred.'}</p>
  </div>
);

export default ErrorFallback;
