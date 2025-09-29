import { signIn, signOut } from '@/auth';

type AuthButtonProps = {
  mode: 'sign-in' | 'sign-out';
  label: string;
  provider?: string;
  redirectTo?: string;
  className?: string;
};

export default function AuthButton({
  mode,
  label,
  provider,
  redirectTo,
  className,
}: AuthButtonProps) {
  async function action() {
    'use server';
    if (mode === 'sign-in') {
      // Default to Google if no provider provided
      await signIn(provider ?? 'google');
    } else {
      await signOut({ redirectTo: redirectTo ?? '/' });
    }
  }

  return (
    <form action={action}>
      <button type="submit" className={className}>
        {label}
      </button>
    </form>
  );
}

