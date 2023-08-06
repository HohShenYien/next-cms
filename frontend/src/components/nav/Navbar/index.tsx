import Button from "@/components/buttons/Button";
import Link from "next/link";
import Logo from "../../branding/Logo";
import { clsx } from "@mantine/core";
import useNavStyles from "./useNavStyles";
import useSession from "@/features/Auth/hooks/useSession";
import { useLogoutMutation } from "@/features/Auth/queries";

const Navbar = () => {
  const navStyle = useNavStyles();
  const { isLoading, mutate: logout } = useLogoutMutation();

  const { status } = useSession();

  return (
    <div
      className={clsx(
        "fixed left-0 right-0 top-0 z-20 flex flex-row justify-center px-8 py-4"
      )}
      style={{ ...navStyle }}
    >
      <nav className="flex max-w-6xl flex-1 flex-row items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Logo size={48} />
            <p className="text-2xl font-bold text-blue-600">Next LMS</p>
          </div>
        </Link>
        <div className="space-x-4">
          {status === "authenticated" ? (
            <>
              <Link href="/protected">
                <Button variant="subtle" color="indigo" size="lg">
                  Protected Page
                </Button>
              </Link>
              <Button
                variant="subtle"
                size="lg"
                onClick={() => logout()}
                loading={isLoading}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="subtle" size="lg">
                  Sign in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="lg">Register</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
