import Button from "@/components/buttons/Button";
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import { z } from "zod";
import { useLoginMutation } from "../queries";
import Logo from "@/components/branding/Logo";
import Link from "next/link";

const authSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type AuthType = z.infer<typeof authSchema>;

const LoginForm = () => {
  const mutation = useLoginMutation();
  const form = useForm<AuthType>({
    validate: zodResolver(authSchema),
    initialValues: {
      email: "hohshenyien@gmail.com",
      password: "asdf",
    },
  });

  const submitForm = (data: AuthType) => {
    mutation.mutateAsync(data).catch((err) => {
      notifications.show({
        message: err.response.data.message,
        color: "red",
      });
    });
  };

  return (
    <div className="col-span-6 px-6 py-8">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <Logo size={160} />
        </Link>
        <h2 className="mt-6 text-3xl font-semibold">Hello Again!</h2>
        <div className="mt-1 text-lg font-light">Welcome back to Next LMS</div>
      </div>
      <form className="mt-6 space-y-2" onSubmit={form.onSubmit(submitForm)}>
        <TextInput
          label="Email"
          placeholder="example@mail.com"
          variant="filled"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          variant="filled"
          {...form.getInputProps("password")}
        />

        <Button
          fullWidth
          className="!mt-5"
          type="submit"
          loading={mutation.isLoading}
        >
          Sign In
        </Button>
      </form>
      <div className="!mt-6 text-center text-sm">
        <p className="text-center text-zinc-500">
          {"Don't have an account yet?"}
        </p>
        <Link href="/auth/register">
          <Button variant="link">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
