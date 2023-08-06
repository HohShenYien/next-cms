import Button from "@/components/buttons/Button";
import ModalLayout from "@/components/modals/ModalLayout";
import openModal from "@/utils/modals/openModal";
import { MantineModal, loginModal } from "@/utils/modals/types";
import { TextInput, PasswordInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import Image from "next/image";
import { useRouter } from "next/router";
import { z } from "zod";
import { useRegisterMutation } from "../queries";
import Link from "next/link";
import Logo from "@/components/branding/Logo";

export interface RegisterModalProps {}

const registerSchema = z
  .object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Password is required"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export type RegisterType = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const mutation = useRegisterMutation();

  const form = useForm<RegisterType>({
    validate: zodResolver(registerSchema),
  });

  const submitForm = (data: RegisterType) => {
    mutation.mutate(data);
  };

  return (
    <div className="space-y-4 px-6 py-8">
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-center"
        >
          <Logo size={64} />
          <h1 className="text-3xl font-semibold text-blue-600">Next LMS</h1>
        </Link>
        <h2 className="mt-6 text-3xl font-semibold">Getting Started</h2>
        <div className="mt-1 text-lg font-light">
          Ready to transform your school?
        </div>
      </div>
      <form className="space-y-2" onSubmit={form.onSubmit(submitForm)}>
        <TextInput
          label="Institute Name"
          placeholder="School of New Business Malaysia"
          variant="filled"
          type="text"
          {...form.getInputProps("username")}
        />
        <TextInput
          label="Email"
          placeholder="example@mail.com"
          variant="filled"
          type="email"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Your Name"
          placeholder="John Doe"
          variant="filled"
          type="email"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Your Email"
          placeholder="example@mail.com"
          variant="filled"
          type="email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          variant="filled"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Password Confirmation"
          variant="filled"
          {...form.getInputProps("confirmPassword")}
        />

        <Button
          fullWidth
          className="!mt-5 py-1"
          type="submit"
          loading={mutation.isLoading}
        >
          Sign Up
        </Button>
      </form>
      <div className="!mt-6 text-center text-sm">
        <p className="text-center text-zinc-500">
          {"Already have an account?"}
        </p>
        <Link href="/auth/login">
          <Button variant="link">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
